// Handle form submission and display
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");
    const tableBody = document.getElementById("userTableBody");
  
    // Handle user registration
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const user = {
          name: document.getElementById("name").value.trim(),
          email: document.getElementById("email").value.trim(),
          contact: document.getElementById("contact").value.trim(),
          address: document.getElementById("address").value.trim(),
        };
  
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
  
        alert("User Registered Successfully!");
        form.reset();
      });
    }
  
    // Populate user table
    if (tableBody) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
  
      users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.contact}</td>
          <td>${user.address}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  });
  
