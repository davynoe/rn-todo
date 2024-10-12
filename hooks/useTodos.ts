import { useState } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([{
    id: 1,
    title: "Add todos here",
    completed: false,
  }]);
  
  function changeTodoCompleted(id: number) {
    setTodos((prevTodos) => 
      prevTodos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  }

  function addTodo(title: string) {
    setTodos(prevTodos => [
      {
        id: Date.now(),
        title,
        completed: false,
      },
      ...prevTodos
    ]);
  }

  function deleteTodo(id: number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }

  return {
    todos,
    changeTodoCompleted,
    addTodo,
    deleteTodo,
  };
}