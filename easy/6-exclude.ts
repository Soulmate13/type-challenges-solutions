// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

type MyExclude<Type, ExcludedElements> = Type extends ExcludedElements ? never: Type;

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
