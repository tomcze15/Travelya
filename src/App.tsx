import React from 'react';
import tw from 'twin.macro';

import './App.css';
import TopSection from './components/TopSection';

const AppContainer = tw.div`
  flex
  w-full
  h-full
`;

function App() {
  return (
    <AppContainer>
      <TopSection></TopSection>
    </AppContainer>
  );
}

export default App;
