import React, { useState, useRef } from 'react';
import { Modal, Text, View, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

export default ({
  items,
  onChangeValue,
  placeholder,
  containerStyle,
  ...props
}) => {
  const [modalVisible, setModalVisible] = useState(null);
  const [inputValue, setInputValue] = useState(null);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={containerStyle}>
      <Input
        value={inputValue}
        placeholder={placeholder || 'Выберите значение из списка'}
        onPress={showModal}
      />
      <Modal visible={modalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={hideModal}>
          <ModalOverlay />
        </TouchableWithoutFeedback>
        <ModalContainer>
          <ModalContent>
            <Text
              style={{
                marginBottom: 10,
                paddingLeft: 10,
                color: '#4d4d4d',
              }}>
              {placeholder || 'Выберите значение из списка'}
            </Text>
            {items.map(({ label, value }, index) => (
              <ListItem
                key={index}
                onPress={() => {
                  setInputValue(label);
                  onChangeValue(value);
                  hideModal();
                }}>
                <Text>{label}</Text>
              </ListItem>
            ))}
          </ModalContent>
        </ModalContainer>
      </Modal>
    </View>
  );
};

const InputContainer = styled.View`
  padding: 15px;
  background: #ffffff;
  border-radius: 10px;
`;

const Input = ({ placeholder, value, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <InputContainer>
      <Text style={{ color: value ? '#000000' : '#4d4d4d' }}>
        {value || placeholder || 'Выберите значение из списка...'}
      </Text>
    </InputContainer>
  </TouchableWithoutFeedback>
);

const ModalOverlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: 30px;
`;

const ModalContent = styled.View`
  padding-horizontal: 20px;
  padding-top: 25px;
  padding-bottom: 15px;
  background: #ffffff;
  border-radius: 15px;
`;

const ListItem = styled.TouchableOpacity`
  padding: 15px 10px;
`;
