ইংরেজীতে লিখার জন্য দুঃখিত!(বাংলায় লিখতে হলে আমার কয়েক ঘণ্টা সময় লাগবে)

What are some differences between interfaces and types in TypeScript?
1. Interfaces supports declaration merging, we can declare same interface multiple times and all of them will be merged, but types doesn't.
2. Interface can't represent primitives, unions, tuples but types can.
3. Interface  uses extends for extending/inheriting but types uses intersections.
4. Interface is more suitable for defining objects, types are more suitable when working with primitive and when unions, intersection operations are needed. 

Explain the difference between any, unknown, and never types in TypeScript.
- Using any as a type of a variable means it can be of any valid type which is essentially like turning off types. It provides no type safety and defeats the purpose of using TS in the first place. But when unknown is used, it must be used with type narrowing before using. For example, if we don't know the response type of an api we can use it's type as unknown. But before we do any type based operation, we need type check it. It's a safer alternative of any, when the type is impossible to know beforehand. never type represent values that never occur. For example a recursive function with no base case never returns any value, we can define it's return type as never. It means impossible values.