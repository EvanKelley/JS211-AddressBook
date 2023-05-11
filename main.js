let arrayOfUsers
const list = document.getElementById("usersList")
const getUsers = () => {
  fetch("https://randomuser.me/api/?results=5").then((res) => res.json())
  // .then(data => arrayOfUsers.push(data.results[0]))
  .then(users => users.results.forEach(user => {
    // console.log(user)
    const li = document.createElement("li")
    // const userImg = document.createElement("img")
    // userImg.src = user.picture.medium
    //userListItem.innerHTML = user.name.first
    //userListItem.appendChild(userImg)
    //usersList.appendChild(userListItem)
    const p = document.createElement('p');
    let info = `
        Name: ${user.name.first} ${user.name.last}
    `
    p.innerText = info;
    li.appendChild(p);
    list.appendChild(li);
  }))
  // console.log(arrayOfUsers)
}

window.onload = getUsers()

// const getUsers = (numUsers) => {
//   const userPromises = [];

//   for (let i = 0; i < numUsers; i++) {
//     userPromises.push(
//       fetch("https://randomuser.me/api/").then((res) => res.json())
//     );
//   }

//   Promise.all(userPromises).then((users) => {
//     arrayOfUsers = users;
//     console.log(arrayOfUsers);
//   });
// };
// getUsers(5);
