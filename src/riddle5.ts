namespace riddle5 {
  /*
    How to type a const that is structurally similar to an interface
  */
  interface MyType<T> {
    m1: T;
  }
  const var1 = { m1: 1 }; // NOT typed of MyType<T>

  /*
    Solution 1: Use a function that use the interface
  */
  function convert<T>(obj: MyType<T>): MyType<T> {
    return obj;
  }
  const var2 = convert({ m1: 1 }); // MyType<number>

  /*
    Solution 2: Set the type explicitly
  */
  const v3: MyType<number> = { m1: 123 };
}
