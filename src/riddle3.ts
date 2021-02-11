namespace riddle3 {
  /*
    Extract the type of an array
  */

  const array1 = [1, "2", true, "4"];
  const primitive: string = "string";

  /*
    Solution: extends array with infer 
  */
  type ArrayTypes<T> = T extends Array<infer U> ? U : never; // Could be (infer U)[]
  type TypeArray1 = ArrayTypes<typeof array1>; // string, number, boolean
  type TypePrimitive = ArrayTypes<typeof primitive>; // never
}
