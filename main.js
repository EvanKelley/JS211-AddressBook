let arrayOfUsers;

const getUsers = () => 
{
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(users => arrayOfUsers = users)
}

const consoleUsers = () =>
{
  console.log(arrayOfUsers)
}