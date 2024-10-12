import { Text, ScrollView, KeyboardAvoidingView, StyleSheet } from "react-native"; 
import useHideNavigationBar from "@/hooks/useHideNavigationBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { dummyData } from "@/data/todos";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";
import AddTodoForm from "@/components/AddTodoForm";

export default function Index() {
  useHideNavigationBar();

  const [todos, setTodos] = useState(dummyData);
  
  function setTodoCompleted(id: number) {
    setTodos((prevTodos) => 
      prevTodos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  }

  function addTodo(title: string) {
    setTodos(prevTodos => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos
    ]);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "rgb(50,50,50)"}}>
      <Text className="text-3xl font-bold text-white text-center pt-10">
        Your Todos
      </Text>
        <KeyboardAvoidingView className="grow rounded-xl flex-1 p-5 justify-between" behavior="padding" keyboardVerticalOffset={10}>
          <ScrollView contentContainerStyle={styles.scrollView} >
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} onCompletedChange={setTodoCompleted}/>
            ))}
          </ScrollView>
          <AddTodoForm onSubmit={addTodo}/>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor:"rgb(70,70,70)",
    borderRadius: 20,
  }
})