import React from 'react';
import { View, Text } from 'react-native';

const TransactionScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-yellow-500">
      <Text className="text-2xl font-bold">Transaction Screen</Text>
      <Text>This is the transaction screen of the application.</Text>
    </View>
  );
};

export default TransactionScreen;
