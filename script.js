document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("divisionForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      const numerator = parseFloat(document.getElementById("numerator").value);
      const denominator = parseFloat(document.getElementById("denominator").value);

      try {
          const result = divideNumbers(numerator, denominator);
          resultDiv.textContent = "Result: " + result;
      } catch (err) {
          resultDiv.textContent = "Error: " + err.message;
      }
  });
});

function divideNumbers(numerator, denominator) {
  if (denominator && numerator === 0) {
      throw new Error("Division by zero is not allowed.");
  }
  return numerator / denominator;
}
