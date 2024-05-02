{
  //union type-- | -- or
  type FronendDeveloper = "fakibazDeveloper" | "juniorDeveloper"; //------ use as value so that it name is string type literal
  type FullstackDeveloper = "fakibazDeveloper" | "fullstackDeveloper"; //------ use as value so that it name is string type literal

  type Developer = FronendDeveloper | FullstackDeveloper;

  const newDeveloper: Developer = "juniorDeveloper";

  type Users = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+";
  };

  const user: Users = {
    name: "Hasan",
    gender: "male",
    bloodGroup: "A+",
  };

  //intersection type
  type FronendDev = {
    skills: string[];
    designation1: "FronendDeveloper";
  };

  type BackendDev = {
    skills: string[];
    designation2: "BackendDeveloper";
  };

  type FullstackDev = FronendDev & BackendDev;

  const users: FullstackDev = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "FronendDeveloper",
    designation2: "BackendDeveloper",
  };
}
