// https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md

interface Todo {
  title: string
  description: string
}

type MyReadonly<Object> = {
  readonly [property in keyof Object]: Object[property]
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello"
todo.description = "barFoo"
