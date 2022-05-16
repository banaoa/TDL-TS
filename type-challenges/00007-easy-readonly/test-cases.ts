import type { Equal, Expect } from "@type-challenges/utils";

type MyReadonly<T> = {
  readonly [M in keyof T]: T[M];
};

type aa = keyof Todo1;

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
