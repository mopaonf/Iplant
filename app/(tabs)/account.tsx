import React from 'react';
import { View, Text } from 'react-native';

const AccountScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold">Account Screen</Text>
      <Text>This is the account screen of the application.</Text>
    </View>
  );
};

export default AccountScreen;
