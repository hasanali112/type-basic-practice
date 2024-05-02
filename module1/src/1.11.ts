{
  //ternary operator || optional chaining || nullish coalescing
  const age: number = 18;

  if (age > 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "adult" : "Not adult";

  console.log({ isAdult });

  //nullish
  const isAutheticate = null;

  const auth = isAutheticate ?? "Gust";
  console.log({ auth });
}
