// src/App.jsx
import React from 'react';
import { Container, LeftSide, RightSide } from './styled';
import LeftNavbar from './components/LeftNavbar';
import ContentComponent from './components/Content';
import RightSidebar from './components/RightSidebar'; // RightSidebar bileşeni daha sonra oluşturulacak

const App = () => (
  <Container>
    <LeftSide>
      <LeftNavbar />
    </LeftSide>
    <ContentComponent />
    <RightSide>
      <RightSidebar />
    </RightSide>
  </Container>
);

export default App;
