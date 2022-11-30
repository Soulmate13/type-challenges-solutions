//https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md

type If<Condition extends boolean, TruthyType, FalsyType> = Condition extends true ? TruthyType : FalsyType

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
type error = If<null, 'a', 'b'>
