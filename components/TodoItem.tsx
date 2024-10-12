import { Todo } from "@/types/todos";
import { TouchableOpacity, Text, View } from "react-native";
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number) => void;
}

export default function TodoItem({ todo, onCompletedChange }: TodoItemProps) {
  return (
    <View className="flex-row items-center">
      <TouchableOpacity 
      className="my-3 flex-row grow items-center border rounded-xl p-4 bg-slate-500 border-slate-500 space-x-3" 
      onPress={() => onCompletedChange(todo.id)}
      >
      <Checkbox 
        value={todo.completed} 
        pointerEvents="none" 
        style={{ borderColor: "white", height: 24, width: 24, borderRadius: 8 }} 
      />
      <Text className={`text-base text-slate-50 ${todo.completed ? "line-through" : ""}`}>
        {todo.title}
      </Text>
      <TouchableOpacity className="my-0 bg-red-400 p-2" onPress={() => console.log(`Delete todo with id ${todo.id}`)}>
      <Icon name="trash" color={"white"} size={23} />
    </TouchableOpacity>
    </TouchableOpacity>
    </View>
  );
}
