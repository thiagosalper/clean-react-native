import { useRoute } from '@react-navigation/core';
import React from 'react';
import { Button, ScrollView, Text } from 'native-base';
import { ProductRouteProp } from '../../../router';
import { Bar, Safe, Scene, Content } from './styles';
import { useSetRecoilState } from 'recoil';
import { cartState } from '../../../repository/state';
import { Product } from '../../../data/models';

const ProductScreen: React.FC = () => {
  const { product } = useRoute<ProductRouteProp>().params;
  const setCart = useSetRecoilState(cartState);

  function addProduct(newProduct: Product) {
    setCart((list) => [...list, newProduct]);
  }

  return (
    <Safe>
      <Scene>
        <Text fontSize={'3xl'} color={'white'}>{product.name}</Text>
      </Scene>
      <Bar.flex>
        <Bar.price>${product.price}</Bar.price>
        <Button colorScheme={'secondary'} onPress={() => addProduct(product)}>Add to cart</Button>
      </Bar.flex>
      <Content>
        <ScrollView>
          <Text>{product.description}</Text>
        </ScrollView>
      </Content>
    </Safe>
  );
};

export default ProductScreen;
