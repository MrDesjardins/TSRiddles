namespace riddle1 {
  /*
    Extract the type when specifying a property of an object
  */
  interface IObject {
    m1: string;
    m2: number;
    m3: boolean;
  }

  const myObj: IObject = {
    m1: "m1",
    m2: 2,
    m3: true,
  };
  /*
    Solution Not Generic
  */
  function extractBasicPropertyNonGeneric<T extends keyof IObject>(obj: IObject, key: string) {
    const data = obj[key];
    return data;
  }
  const a1: string = extractBasicPropertyNonGeneric(myObj, "m1");
  const a2: number = extractBasicPropertyNonGeneric(myObj, "m2");
  const a3: boolean = extractBasicPropertyNonGeneric(myObj, "m3");
  /*
    Solution Half-Generic
  */
  function extractBasicProperty<T extends keyof IObject>(obj: IObject, key: T) {
    const data = obj[key];
    return data;
  }
  const b1: string = extractBasicProperty(myObj, "m1");
  const b2: number = extractBasicProperty(myObj, "m2");
  const b3: boolean = extractBasicProperty(myObj, "m3");
  /*
    Solution Generic
  */
  function extractProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    const data: T[K] = obj[key];
    return data;
  }
  const s1: string = extractProperty(myObj, "m1");
  const s2: number = extractProperty(myObj, "m2");
  const s3: boolean = extractProperty(myObj, "m3");
}
