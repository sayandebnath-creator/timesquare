function startCountdown() {
  // Set the date for the next Durga Puja (adjust the year as needed)
  const durgaPujaDate = new Date("September 29, 2025 00:00:00").getTime();

  function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = durgaPujaDate - now;

      if (timeLeft > 0) {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

          document.querySelector("#countdown9400 .countdown-section:nth-child(1) .countdown-amount").innerText = days;
          document.querySelector("#countdown9400 .countdown-section:nth-child(2) .countdown-amount").innerText = hours;
          document.querySelector("#countdown9400 .countdown-section:nth-child(3) .countdown-amount").innerText = minutes;
          document.querySelector("#countdown9400 .countdown-section:nth-child(4) .countdown-amount").innerText = seconds;
      } else {
          document.getElementById("countdown9400").innerHTML = "<h2>Durga Puja Has Begun!</h2>";
      }
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
}

// Start the countdown when the page loads
startCountdown();
