import React from 'react';
import styled from 'styled-components/native';
import ErrorMessage from '../ErrorMessage';

export default ({ render, errorMessage }) => {
  return (
    <Container>
      {render()}
      {errorMessage && (
        <ErrorMessage style={{ marginTop: 5 }}>{errorMessage}</ErrorMessage>
      )}
    </Container>
  );
};

const Container = styled.View`
  margin-vertical: 10px;
`;
