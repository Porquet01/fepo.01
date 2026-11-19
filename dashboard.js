document.addEventListener("DOMContentLoaded", function () {
  const ridesTableBody = document.querySelector("#ridesTable tbody");
  const rides = JSON.parse(localStorage.getItem("fepoRides")) || [];

  if (rides.length === 0) {
    ridesTableBody.innerHTML = `<tr><td colspan="7" class="text-center">No ride requests found.</td></tr>`;
    return;
  }

  rides.forEach((ride, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${ride.name}</td>
      <td>${ride.phone}</td>
      <td>${ride.pickup}</td>
      <td>${ride.dropoff}</td>
      <td>${ride.payment}</td>
      <td>${ride.time}</td>
    `;
    ridesTableBody.appendChild(row);
  });
});
