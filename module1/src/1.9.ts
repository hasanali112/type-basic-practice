{
  //type alias --> use type define
  //object type define
  type Tuser = {
    name: string;
    age: number;
    contactNo: string;
    gender: string;
  };

  const user: Tuser = {
    name: "hasn",
    age: 50,
    contactNo: "540949",
    gender: "male",
  };

  //string type define
  type IsAdmin = boolean;
  const admin: IsAdmin = true;

  //for function

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
