import type { Equal, Expect } from "@type-challenges/utils";

type aa = Exclude<"a" | "b" | "c", "a">;

type bb = "a" | "b" | "c";

// union extends union = 循环
type MyExclude<T, U> = T extends U ? never : T;

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
  Expect<
    Equal<
      MyExclude<"a" | "b" | "c", "a" | "b">,
      Exclude<"a" | "b" | "c", "a" | "b">
    >
  >,
  Expect<
    Equal<
      MyExclude<string | number | (() => void), Function>,
      Exclude<string | number | (() => void), Function>
    >
  >
];
