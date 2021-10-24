import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'inversify-react';
import { InjectContainer } from './src/providers/InjectContainer';
import { MainNav } from './src/router';

const App = () => {
  return (
    <NativeBaseProvider>
      <Provider container={InjectContainer}>
        <MainNav />
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
