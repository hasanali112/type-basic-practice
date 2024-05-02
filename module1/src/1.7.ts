{
  //spread operator
  //rest operator-- cousin of spread operator
  //destructure

  // spread operator -- for array
  const bros1: string[] = ["a", "b", "c"];
  const bros2: string[] = ["r", "g", "f"];
  bros1.push(...bros2);

  //for object
  const mentor1 = {
    typescript: "Mezba",
    redux: "Mir",
    next: "Tonmoy",
  };

  const mentor2 = {
    prisma: "Firoz",
    cloud: "Nahid",
    dbms: "Mizan",
  };

  const mentorList = {
    ...mentor1,
    ...mentor2,
  };

  //learn rest operator
  const greetFriends = (...firends: string[]) => {
    firends.forEach((firend: string) => console.log(`Hi ${firend}`));
  };

  greetFriends("Hamin", "Krom", "Kalam");
}
