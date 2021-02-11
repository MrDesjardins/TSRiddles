namespace riddle4 {
  /*
    Extract the type of an object
  */
  const myObject1 = {
    m1: "TypeM1", // Note this is a string
    m2: "TypeM2", // Note this is a string
  };
  type TypesMyObject1 = typeof myObject1[keyof typeof myObject1]; // string
  /*
    Solution 1: Use "as const"
  */
  const myObject2 = {
    m1: "TypeM1",
    m2: "TypeM2",
  } as const;

  type TypesMyObject2 = typeof myObject2[keyof typeof myObject2]; // TypeM1 | TypeM2

  /*
    Solution 2: Use of Generic
  */

  function transform<FType extends string, TReturn extends { [k: string]: FType }>(t: TReturn) {
    return t;
  }
  const myObject3 = transform({
    m1: "TypeM1",
    m2: "TypeM2",
  });
  type TypesMyObject3 = typeof myObject3[keyof typeof myObject3]; // TypeM1 | TypeM2
}
