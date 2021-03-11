import React from 'react';
import styled from 'styled-components/native';
import ErrorMessage from 'components/ErrorMessage';

export default ({ children, errorMessage }) => {
  return (
    <Container>
      {children}
      {errorMessage && (
        <ErrorMessage style={{ marginTop: 5 }}>{errorMessage}</ErrorMessage>
      )}
    </Container>
  );
};

const Container = styled.View`
  margin-vertical: 10px;
`;
