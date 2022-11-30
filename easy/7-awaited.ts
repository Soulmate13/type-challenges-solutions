//https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md

type ExampleType = Promise<string>

type MyAwaited<Type> = Type extends Promise<infer InnerType> ? MyAwaited<InnerType> : Type;

type Result = MyAwaited<ExampleType> // string
