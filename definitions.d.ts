interface Todo {
  id: number,
  title: string,
  completed: boolean,
}

interface TodoItemProps {
  todo: Todo,
  onCompletedChange: (id: number) => void,
  onDelete: (id: number) => void,
}

interface TodoListProps {
  todos: Todo[],
  onCompletedChange: (id: number) => void,
  onDelete: (id: number) => void,
}

interface AddTodoFormProps {
  onSubmit: (title: string) => void,
}