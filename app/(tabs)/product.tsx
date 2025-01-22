import React from 'react';
import { View, Text } from 'react-native';

const ProductScreen: React.FC = () => {
  return (
    <View className="flex-1 justify-center items-center bg-red-500">
      <Text className="text-2xl font-bold">Product Screen</Text>
      <Text>This is the product screen of the application.</Text>
    </View>
  );
};

export default ProductScreen;
