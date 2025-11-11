import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-gradient-to-br from-blue-50 to-blue-200 items-center justify-center px-6">
      <View className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md items-center">
        <Text className="text-2xl font-bold text-blue-700 mb-2">
          Welcome to Starter App
        </Text>
        <Text className="text-base text-gray-600 mb-4 text-center">
          Edit <Text className="font-mono text-blue-500">app/src/index.tsx</Text> to get started.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
