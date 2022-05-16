import type { Alike, Expect } from "@type-challenges/utils";

// K extends keyof T = keyof T他的意思是给K提供一个默认值，如果没有提供K，就使用默认值keyof T
// &是交叉类型
type MyReadonly2<T, K extends keyof T = keyof T> = {
  [R in Exclude<keyof T, K>]: T[R];
} & { readonly [R in K]: T[R] };

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>
];

type aa = { a: string } & { readonly a?: string; b?: string };

let bb: aa = { a: "123" };
bb.a = "123";

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}
