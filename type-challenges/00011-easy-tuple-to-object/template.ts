type TupleToObject<T extends readonly (string | symbol)[]> = {
  [P in T[number]]: P;
};
