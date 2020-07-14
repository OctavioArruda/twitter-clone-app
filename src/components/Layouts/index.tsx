import React from 'react';

import Main from '../Main';
import MenuBar from '../MenuBar';

import { Container, Wrapper } from './styles';

const layouts: React.FC = () => {
  return (
      <Container>
          <Wrapper>
              <MenuBar />
              <Main />
              {/* <Sidebar /> */}
          </Wrapper>
      </Container>
  );
}

export default layouts;