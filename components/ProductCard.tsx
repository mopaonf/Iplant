import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import Product_Banana from '../assets/images/Product_Banana.jpg';

interface ProductCardProps {
   name: string;
   isAvailable?: boolean;
   returnRate: number;
   investmentAmount: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
   name,
   isAvailable = true,
   returnRate,
   investmentAmount,
}) => {
   return (
      <TouchableOpacity className="w-[150px] h-[230px] relative ml-[10px] mr-14 mb-4">
         {/* Main Card Container */}
         <View
            style={{ backgroundColor: Colors.light.primary }}
            className="rounded-xl p-3 shadow-sm h-full"
         >
            {/* Status Badge */}
            <View className="absolute left-[-8] top-10 z-10">
               <Text
                  className="text-lg font-medium text-white"
                  style={{ transform: [{ rotate: '270deg' }] }}
               >
                  {isAvailable ? 'Available' : 'Sold Out'}
               </Text>
            </View>

            {/* Product Image Card */}
            <View className="absolute -right-2 -top-2 bg-transparent w-32 h-32 rounded-xl overflow-hidden">
               <Image
                  source={Product_Banana}
                  className="w-full h-full"
                  resizeMode="cover"
               />
            </View>

            {/* Product Details (positioned at bottom) */}
            <View className="mt-36 pt-2">
               <Text className="text-lg font-medium text-white">
                  {name} Invest
               </Text>
               <Text className="text-white font-semibold mt-0.5">
                  {returnRate}% annually
               </Text>
               <Text className="text-white/80 text-sm mt-0.5">
                  {investmentAmount}
               </Text>
            </View>
         </View>
      </TouchableOpacity>
   );
};

export default ProductCard;
