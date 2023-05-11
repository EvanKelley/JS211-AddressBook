let arrayOfUsers = [];

const getUsers = (numUsers) => {
  const userPromises = [];

  for (let i = 0; i < numUsers; i++) {
    userPromises.push(
      fetch("https://randomuser.me/api/").then((res) => res.json())
    );
  }

  Promise.all(userPromises).then((users) => {
    arrayOfUsers = users;
    console.log(arrayOfUsers);
  });
};

getUsers(5);
