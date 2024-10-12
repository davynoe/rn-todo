import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

interface AddTodoFormProps {
  onSubmit: (title: string) => void
}

export default function AddTodoForm({onSubmit} : AddTodoFormProps) {
  const [input, setInput] = useState("");

  function handleSubmit() {
    if(!input.trim()) return;
    onSubmit(input);
    setInput("");
  }

  return(
    <View className="flex-row space-x-2 py-4 justify-between w-full">
      <TextInput placeholder="What needs to be done?"className="border border-gray-400 bg-white p-2 pl-3 rounded-xl w-[75%]" value={input} onChangeText={setInput}/>
      <TouchableOpacity className="w-[23%] rounded-e-xl bg-slate-500 flex justify-center rounded-xl items-center" onPress={handleSubmit}>
        <Text className="text-white text-lg">Add</Text>
      </TouchableOpacity>
    </View>
  );
}