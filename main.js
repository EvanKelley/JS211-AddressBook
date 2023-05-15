let arrayOfUsers;
const list = document.getElementById("usersList");
const getUsers = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((users) =>
      users.results.forEach((user) => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = user.picture.large;

        const p = document.createElement("p");
        let info = `
        Name: ${user.name.first} ${user.name.last}
    `;
        p.innerText = info;

        const button = document.createElement("button"); // create button element
        button.innerText = "Reveal Thyself";

        button.addEventListener("click", () => {
          // add an event listener to button
          const details = document.createElement("ul"); // create new ul element for the details

          const dob = document.createElement("li"); // create new li element for DOB
          dob.innerText = `Date of Birth: ${user.dob.date}`;
          details.appendChild(dob); // append DOB li element to ul element

          const address = document.createElement("li"); // create a new li element for the address
          address.innerText = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}, ${user.location.country}`;
          details.appendChild(address); // append address li element to ul element

          const email = document.createElement("li"); // create a new li element for the email
          email.innerText = `Email: ${user.email}`;
          details.appendChild(email); // append the email li element to ul element

          li.appendChild(details); // append ul element to the li element
        });

        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(button); // append button element to the list element
        list.appendChild(li);
      })
    );
};

window.onload = getUsers();
