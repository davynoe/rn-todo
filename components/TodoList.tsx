import { ScrollView, View, Text } from "react-native";
import TodoItem from "./TodoItem";

export default function TodoList({todos, onCompletedChange, onDelete} : TodoListProps) {
  return (
    <>
      {todos.length === 0 
        ? (
          <View className="flex grow items-center justify-center p-3 bg-slate-600 rounded-xl">
            <Text className="text-center text-xl text-gray-300">Nothing to do</Text>
          </View>
        )
        : (
          <ScrollView className="flex p-3 bg-slate-600 rounded-xl">
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} onCompletedChange={onCompletedChange} onDelete={onDelete}/>)}
          </ScrollView>
        )
      }
    </>
  );
}