const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = getDegrees(seconds);
  const minutesDegrees = getDegrees(minutes);
  const hoursDegrees = ((hours / 12) * 360) + 90;

  moveHand(secondHand, secondsDegrees);
  moveHand(minuteHand, minutesDegrees);
  moveHand(hourHand, hoursDegrees);
}

setInterval(setDate, 1000);

function getDegrees(x) {
  return ((x / 60) * 360) + 90;
}

function moveHand(hand, degrees) {
  return hand.style.transform = `rotate(${degrees}deg)`;
}