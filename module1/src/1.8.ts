{
  //destructure
  // for object
  const users = {
    id: 124,
    name: {
      firstName: "Hasan",
      lastName: "Ali",
    },
    contactNo: 123998,
    country: "uganda",
  };

  const {
    country,
    name: { lastName },
  } = users;

  // array destructure
  const myFriends = ["chandler", "joey", "ross", "monica", "phoebe"];

  const [, , bestFriend, ...rest] = myFriends;
}
