let numbers = [5, 10, 15, 20, 25];
let currentIndex = 0;

function displayNextNumber() {
  if (currentIndex < numbers.length) {
    document.getElementById('numberDisplay').innerText = numbers[currentIndex];
    currentIndex++;
  } else {
    document.getElementById('numberDisplay').innerText = "End of numbers";
  }
}
