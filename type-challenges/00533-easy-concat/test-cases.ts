import type { Equal, Expect } from "@type-challenges/utils";

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >
];

type First<T extends unknown[]> = T[0];

type cases2 = [
  Expect<Equal<First<[1, 2, 3]>, 1>>,
  Expect<Equal<First<[111]>, 111>>
];
