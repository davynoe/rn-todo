import { TouchableOpacity, Text, View } from "react-native";
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function TodoItem({ todo, onCompletedChange, onDelete }: TodoItemProps) {
  return (
    <TouchableOpacity className="my-3 flex-row w-full items-center justify-between border rounded-xl p-4 bg-slate-500 border-slate-500 space-x-3" onPress={() => onCompletedChange(todo.id)}>
      <View className="flex flex-row items-center justify-center gap-x-5">
        <Checkbox value={todo.completed} pointerEvents="none" style={{ borderColor: "white", height: 24, width: 24, borderRadius: 8 }}/>
        <Text className={`text-base text-slate-50 w-36 ${todo.completed && "line-through"}`}>
          {todo.title}
        </Text>
      </View>
      <TouchableOpacity className="my-0 bg-red-400 p-2 rounded-md" onPress={() => onDelete(todo.id)}>
        <Icon name="trash" color={"white"} size={23} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}