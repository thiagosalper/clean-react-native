import React from 'react';
import { Button, FlatList, Text } from 'native-base';
import { useInjection } from 'inversify-react';
import { TYPES } from '../../../domain/protocols/types';
import { HomeProps } from '../../../domain/protocols/HomeProps';
import { 
  Safe,
  Container,
  Header,
  ProductView,
} from './styles';
import { Product } from '../../../data/models';
import { useNavigation } from '@react-navigation/core';
import { MainNavProps } from '../../../router';
import { useRecoilValue } from 'recoil';
import { cartCountState } from '../../../repository/state';

const HomeScreen: React.FC = () => {
  const homeVM: HomeProps = useInjection(TYPES.HomeProps);
  const navigation = useNavigation<MainNavProps>();

  function navigateToProduct(product: Product) {
    homeVM.chooseProduct(product, () => navigation.navigate('ProductRoute', { product }));
  }

  const cartCount = useRecoilValue(cartCountState);

  return (
    <Safe>
      <Header>
        <Text fontSize={'3xl'} color={'white'}>welcome {homeVM.getUser().name}!</Text>
        <Button>go to your cart [{cartCount}]</Button>
      </Header>
      <Container>  
        <Text fontSize={'3xl'}>new products</Text>

        <ProductView.list>
          <FlatList
            ItemSeparatorComponent={() => <ProductView.separator />}
            data={homeVM.listProducts()}
            renderItem={({item}) => (
            <ProductView.item onPress={() => navigateToProduct(item)}>
              <Text color={'black'} fontWeight={'bold'}>{item.name}</Text>
              <Text color={'red'}>${item.price}</Text>
            </ProductView.item>
            )}  
            />
        </ProductView.list>
      </Container>
    </Safe>
  );
};

export default HomeScreen;
