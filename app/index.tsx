import { Text, KeyboardAvoidingView } from "react-native"; 
import useHideNavigationBar from "@/hooks/useHideNavigationBar";
import { SafeAreaView } from "react-native-safe-area-context";
import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import useTodos from "@/hooks/useTodos";

export default function Index() {
  useHideNavigationBar();

  const {
    todos,
    changeTodoCompleted,
    addTodo,
    deleteTodo
  } = useTodos();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#334155"}}>
      <Text className="text-3xl font-bold text-white text-center pt-10">
        Your Todos
      </Text>
      <KeyboardAvoidingView className="grow rounded-xl flex-1 p-5 justify-between" behavior="padding" keyboardVerticalOffset={10}>
        <TodoList todos={todos} onCompletedChange={changeTodoCompleted} onDelete={deleteTodo}/>
        <AddTodoForm onSubmit={addTodo}/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}