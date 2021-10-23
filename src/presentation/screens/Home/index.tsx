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

const HomeScreen: React.FC = () => {
  const homeVM: HomeProps = useInjection(TYPES.HomeProps);

  return (
    <Safe>
      <Header>
        <Text fontSize={'3xl'} color={'white'}>welcome {homeVM.getUser().name}!</Text>
        <Button>go to your cart [0]</Button>
      </Header>
      <Container>  
        <Text fontSize={'3xl'}>new products</Text>

        <ProductView.list>
          <FlatList
            ItemSeparatorComponent={() => <ProductView.separator />}
            data={homeVM.listProducts()}
            renderItem={({item}) => (
            <ProductView.item>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>{item.price}</Text>
            </ProductView.item>
            )}  
            />
        </ProductView.list>
      </Container>
    </Safe>
  );
};

export default HomeScreen;
