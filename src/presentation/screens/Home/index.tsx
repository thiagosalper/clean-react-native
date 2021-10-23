import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GetUser, ListProducts } from '../../../data/protocols';

const HomeScreen: React.FC<{getUser: GetUser; listProducts: ListProducts}> = ({ getUser, listProducts }) => {

  const user = getUser();
  const products = listProducts();

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Welcome {user.name}</Text>
        <Text fontSize={'3xl'}>Little Store</Text>

        {products.map((product, index) => (
          <View key={index}>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
          </View>
        ))}

        <Button>Go to Cart</Button>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
