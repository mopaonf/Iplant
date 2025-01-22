import React from 'react';
import { View, Text, Image } from 'react-native';

interface ReferenceCardProps {
   title: string;
   author: string;
   imageUrl?: string;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({ 
   title, 
   author, 
   imageUrl = "https://placeholder.com/150" 
}) => {
   return (
      <View className="h-[150px] bg-white rounded-xl p-4 flex-row shadow-sm">
         {/* Text Content Section (75%) */}
         <View className="flex-[0.65] pr-4 justify-center">
            <Text className="text-lg font-semibold mb-2" numberOfLines={2}>
               {title}
            </Text>
            <Text className="text-gray-500 text-sm">
               by {author}
            </Text>
         </View>

         {/* Image Section (25%) */}
         <View className="flex-[0.35] justify-center">
            <View className="bg-gray-200 rounded-lg overflow-hidden h-[120px]">
               <Image 
                  source={{ uri: imageUrl }}
                  className="w-full h-full"
                  resizeMode="cover"
               />
            </View>
         </View>
      </View>
   );
};

export default ReferenceCard;
