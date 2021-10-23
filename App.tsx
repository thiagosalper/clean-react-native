import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { ListProductsImpl, GetUserImpl } from './src/data/usecases';
import { HomeScreen } from './src/presentation/screens';
import { Provider } from 'inversify-react';
import { InjectContainer } from './src/providers/InjectContainer';

const App = () => {
  return (
    <NativeBaseProvider>
      <Provider container={InjectContainer}>
        <HomeScreen />
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
