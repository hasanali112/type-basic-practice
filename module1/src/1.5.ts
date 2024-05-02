{
  //reference type data

  const users: {
    readonly company: "Programming hero"; // literal type ----> readonly -- access modifier
    firstName: string;
    middleName?: string; //oprional type
    lastName: string;
    isMarried: boolean;
  } = {
    company: "Programming hero",
    firstName: "Hasan",
    middleName: "ali",
    lastName: "khan",
    isMarried: false,
  };

  users.firstName;
}
