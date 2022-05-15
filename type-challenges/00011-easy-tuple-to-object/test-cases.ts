import type { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type r = typeof tuple;

let a: r = ["tesla", "model 3", "model X", "model Y"];

tuple.forEach((item) => {
  return { item: item };
});

type TupleToObject<T extends readonly (string | symbol)[]> = {
  [P in T[number]]: P;
};

type c = TupleToObject<typeof tuple>;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;
