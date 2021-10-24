import { useRoute } from '@react-navigation/core';
import React from 'react';
import { Button, ScrollView, Text } from 'native-base';
import { ProductRouteProp } from '../../../router';
import { Bar, Safe, Scene, Content } from './styles';

const ProductScreen: React.FC = () => {
  const { product } = useRoute<ProductRouteProp>().params;

  return (
    <Safe>
      <Scene>
        <Text fontSize={'3xl'} color={'white'}>{product.name}</Text>
      </Scene>
      <Bar.flex>
        <Bar.price>${product.price}</Bar.price>
        <Button colorScheme={'secondary'}>Add to cart</Button>
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
