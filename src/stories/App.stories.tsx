import React from 'react';
import styled from 'styled-components';
import { App } from '../index';

const Container = styled.div`
  width: 250px;
  height: 208px;
`;

export default {
  title: 'Iot885 Plugin',
  component: App,
};

export const Default = () => (
  <Container>
    <App />
  </Container>
);
