import React from 'react';
import styled from 'styled-components/native';

export default React.forwardRef(
  ({ prependComponent, containerStyle, ...props }, ref) => (
    <InputContainer style={containerStyle}>
      {prependComponent && (
        <PrependComponent>{prependComponent}</PrependComponent>
      )}
      <TextInput ref={ref} {...props} />
    </InputContainer>
  ),
);

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 15px;
  background: #ffffff;
  border-radius: 10px;
`;

const TextInput = styled.TextInput.attrs(({ required, placeholder }) => ({
  placeholderTextColor: '#4d4d4d',
  placeholder: required ? placeholder + ' *' : placeholder,
}))`
  flex: 1;
`;

const PrependComponent = styled.View`
  margin-right: 5px;
`;
