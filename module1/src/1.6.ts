{
  //function -- two type er hoi
  // normal and arrow function

  //normal function
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(1, 3);

  //arrow function
  const addArrow = (num1: number, num2: number) => num1 + num2;

  // object - function - method

  const poorUser = {
    name: "hasan",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
    },
  };

  poorUser.addBalance(8);

  const arr: number[] = [1, 2, 3];

  const newArr: number[] = arr.map((ele: number): number => ele * ele);
}
