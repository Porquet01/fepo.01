document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const pickup = document.getElementById("pickup").value.trim();
    const dropoff = document.getElementById("dropoff").value.trim();
    const payment = document.getElementById("payment").value;

    if (!name || !phone || !pickup || !dropoff || !payment) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const rideData = {
      name,
      phone,
      pickup,
      dropoff,
      payment,
      time: new Date().toLocaleString(),
    };

    const allRides = JSON.parse(localStorage.getItem("fepoRides")) || [];
    allRides.push(rideData);
    localStorage.setItem("fepoRides", JSON.stringify(allRides));

    alert("✅ Ride request submitted successfully!");
    form.reset();
    window.location.href = "index.html";
  });
});
