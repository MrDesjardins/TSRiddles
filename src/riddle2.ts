namespace riddle2 {
  /*
    Extract the type of a generic base class
  */
  class BaseClass<T> {
    t: T; // Must be present in the base class, otherwise will be unknown when using infer
  }

  class Child1 extends BaseClass<string> {} // String
  class Child2 extends BaseClass<number> {} // Number
  class Child3 extends Object {} // Won't work

  /*
   Extract the type using the keyword infer
  */
  type GenericType1 = Child1 extends BaseClass<infer I> ? I : never; // String
  type GenericType2 = Child2 extends BaseClass<infer I> ? I : never; // Number
  type GenericType3 = Child3 extends BaseClass<infer I> ? I : never; // Never
}
