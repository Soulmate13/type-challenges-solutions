//https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md


type Concat<FirstArray extends Array<unknown>, SecondArray extends Array<unknown>> = [...FirstArray, ...SecondArray];

type Result11 = Concat<[1], [2]> // expected to be [1, 2]

