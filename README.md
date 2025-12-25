ইংরেজীতে লিখার জন্য দুঃখিত!(বাংলায় লিখতে হলে আমার কয়েক ঘণ্টা সময় লাগবে)

What are some differences between interfaces and types in TypeScript?
1. Interfaces supports declaration merging, we can declare same interface multiple times and all of them will be merged, but types don't.
2. Interfaces can't represent primitives, unions, tuples but types can.
3. Interfaces  use extends for extending/inheriting but types use intersections.
4. Interfaces are more suitable for defining objects, types are more suitable when working with primitive and when union, intersection operations are needed. 

Explain the difference between any, unknown, and never types in TypeScript.
- Using any as a type of a variable means it can be of any valid types which is essentially turning off types. It provides no type safety and defeats the purpose of using TS. But when unknown is used, it must be used with type narrowing beforehand. For example, if we don't know the response type of an api we can define it's type as unknown. But before we do any operation on it, we need to use type check. It's a safer alternative of any, when the type of a variable is impossible to know beforehand. never type represent values that never occur. For example a recursive function with no base case never returns any value, we can define it's return type as never. It means impossible values. This is commonly used with function that throws errors. 