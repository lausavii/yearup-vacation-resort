function getRoomRate(checkInDate, roomType) {
  const inSeasonMonths = [5, 6, 7, 8]; // Months considered in-season
  const baseRate = 150.00; // Base nightly rate
  const inSeasonRate = 250.00; // In-season nightly rate

  // Check if check-in month is in the in-season months
  const checkInMonth = checkInDate.getMonth() + 1; // January is 0, so add 1
  const isCheckInMonthInSeason = inSeasonMonths.includes(checkInMonth);

  // Return the appropriate nightly rate based on the room type and in-season status
  if (roomType === "Queen" || roomType === "King") {
    return isCheckInMonthInSeason ? inSeasonRate : baseRate;
  } else if (roomType === "2-Bedroom Suite") {
    return isCheckInMonthInSeason ? inSeasonRate + 100.00 : baseRate + 60.00;
  }

  return baseRate; // Default to base rate if the room type is not recognized
}

function calculateStayCost(nightlyRate, totalNights, totalAdults, totalChildren, discount) {
  // Calculate the original room cost
  const roomCost = nightlyRate * totalNights;

  // Calculate the discounted room cost based on the discount percentage
  const discountRate = 1 - discount;
  const discountedRoomCost = roomCost * discountRate;

  // Calculate the tax (12% of the discounted room cost)
  const tax = discountedRoomCost * 0.12;

  // Calculate the total cost of the stay
  const totalCost = discountedRoomCost + tax;

  return {
    roomCost,
    discountedRoomCost,
    tax,
    totalCost
  };
}

function estimateStayCost() {
  const checkInDate = new Date(document.getElementById("in-date").value);
  const roomTypeElement = document.querySelector('input[name="flexRadioDefault"]:checked + label');
const roomType = roomTypeElement ? roomTypeElement.innerText : "";
  const nightlyRate = getRoomRate(checkInDate, roomType);
  const totalNights = Math.ceil((new Date(document.getElementById("out-date").value) - checkInDate) / (1000 * 60 * 60 * 24));
  const totalAdults = parseInt(document.getElementById("total-adults").value);
  const totalChildren = parseInt(document.getElementById("total-children").value);
  const discount = getSelectedDiscount();

  const messageDiv = document.getElementById("messageDiv");
  const roomCostElement = document.getElementById("room-cost");
  const discountElement = document.getElementById("discount");
  const discountedRoomCostElement = document.getElementById("discounted-room-cost");
  const taxElement = document.getElementById("tax");
  const totalCostElement = document.getElementById("total-cost");

  // Check if the room type can accommodate the number of guests
  if ((roomType === "Queen" && totalAdults + totalChildren > 5) ||
      (roomType === "King" && totalAdults + totalChildren > 2) ||
      (roomType === "2-Bedroom Suite" && totalAdults + totalChildren > 6)) {
    messageDiv.innerText = "The room you selected will not hold your party";
    return false;
  }

  const { roomCost, discountedRoomCost, tax, totalCost } = calculateStayCost(nightlyRate, totalNights, totalAdults, totalChildren, discount);

  // Display the calculated values on the page
  roomCostElement.textContent = `Original Room Cost: $${roomCost.toFixed(2)}`;
  discountElement.textContent = `Discount: ${(discount * 100).toFixed(0)}%`;
  discountedRoomCostElement.textContent = `Discounted Room Cost: $${discountedRoomCost.toFixed(2)}`;
  taxElement.textContent = `Tax: $${tax.toFixed(2)}`;
  totalCostElement.textContent = `Total Cost of Stay: $${totalCost.toFixed(2)}`;

  messageDiv.innerText = ""; // Clear any previous error message

  return false; // Prevent form submission
}

function getSelectedDiscount() {
  const discountRadios = document.getElementsByName("discount");

  for (const radio of discountRadios) {
    if (radio.checked) {
      switch (radio.value) {
        case "none":
          return 0; // No discount
        case "aaa":
        case "senior":
          return 0.1; // 10% discount for AAA/Senior
        case "military":
          return 0.2; // 20% discount for military
      }
    }
  }

  return 0; // Default to no discount if none is selected
}
