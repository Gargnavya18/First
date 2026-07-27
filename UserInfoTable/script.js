function addUser() {
    // Get values from input fields
    let name = document.getElementById("userName").value;
    let age = document.getElementById("userAge").value;
    let email = document.getElementById("userEmail").value;

    // Check if any field is empty
    if (name === "" || age === "" || email === "") {
        alert("Please fill all fields!");
        return;
    }

    // Select table body
    let table = document.getElementById("userTable");

    // Add new row
    table.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>${age}</td>
            <td>${email}</td>
        </tr>
    `;

    // Clear input fields
    document.getElementById("userName").value = "";
    document.getElementById("userAge").value = "";
    document.getElementById("userEmail").value = "";
}
