import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { ListProductsImpl, GetUserImpl } from './src/data/usecases';
import { HomeScreen } from './src/presentation/screens';

const App = () => {
  return (
    <NativeBaseProvider>
      <HomeScreen
        getUser={GetUserImpl}
        listProducts={ListProductsImpl} />
    </NativeBaseProvider>
  );
};

export default App;
