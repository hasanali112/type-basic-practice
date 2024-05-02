{
  //null type
  const searching = (value: string | null) => {
    if (value) {
      console.log({ value });
    } else {
      console.log("Not searching");
    }
  };

  searching(null);

  //unknown type of
  const convertSpreedPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertSpreed = (value * 1000) / 3600;
      console.log({ convertSpreed });
    }
  };
  convertSpreedPerSecond(1000);
}
