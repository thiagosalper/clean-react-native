import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'inversify-react';
import { InjectContainer } from './src/providers/InjectContainer';
import { MainNav } from './src/router';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <NativeBaseProvider>
      <Provider container={InjectContainer}>
        <RecoilRoot>
          <MainNav />
        </RecoilRoot>
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
