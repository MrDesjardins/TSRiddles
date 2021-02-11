namespace riddle6 {
  type Callee<T extends Record<keyof T, (...a: any[]) => any>> = <K extends keyof T>(
    prop: K,
    ...payload: Parameters<T[K]>
  ) => any;

  class ClassWithFunctionCalls<TFunc extends Record<keyof TFunc, (...a: any[]) => any>> {
    private functions: TFunc;
    public call: Callee<TFunc> = (prop, ...payload) => {
      const func: TFunc[keyof TFunc] = this.functions[prop];
      return func(...payload);
    };

    constructor(functions: TFunc) {
      this.functions = functions;
    }
  }

  interface MyFunctions {
    stringParam(payload: string): string;
    numberParam(payload: number): number;
  }

  const myFunction: MyFunctions = {
    stringParam: (payload: string) => {
      return `[${payload}]`;
    },
    numberParam: (payload) => {
      return payload * 100;
    },
  };

  const functions = new ClassWithFunctionCalls(myFunction);
  const result1 = functions.call("stringParam", "bla");
  const result2 = functions.call("numberParam", 2);
}
