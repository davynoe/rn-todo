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
    <View className="flex-row space-x-2 py-4">
      <TextInput 
        placeholder="What needs to be done?"
        className="grow border border-gray-400 bg-white p-2 rounded-xl text-base"
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity 
        className="w-20 rounded-e-xl bg-slate-500 flex justify-center rounded-xl items-center" 
        onPress={handleSubmit}
      >
        <Text className="text-white text-lg">Add</Text>
      </TouchableOpacity>
    </View>
  );
}