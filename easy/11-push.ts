// https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md

type Push<Arr extends Array<unknown>, ElementToAdd> = [...Arr, ElementToAdd];

type Result = Push<[1, 2], '3'> // [1, 2, '3']
