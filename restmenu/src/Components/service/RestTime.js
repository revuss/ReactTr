const now = new Date();
const hour = now.getHours();
const openHour = 10;
const closeHour = 22;
const isOpen = hour >= openHour && hour < closeHour;

let remainingTime = null;

if (!isOpen) {
  const openingTime = new Date(now);
  if (hour >= closeHour) {
    openingTime.setDate(openingTime.getDate() + 1);
  }
  openingTime.setHours(openHour, 0, 0, 0);

  const timeDifference = openingTime - now;
  const hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutesLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );

  remainingTime = `${hoursLeft} hours and ${minutesLeft} minutes`;
}

export { isOpen, remainingTime };
