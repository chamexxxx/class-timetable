import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

export default ({ onClose, onEdit, onCopy, onDelete, style }) => (
  <Container style={style}>
    <Header>
      <Icon name="close" size={20} color="#000" onPress={onClose} />
    </Header>
    <Content>
      <Action>
        <Icon name="edit" size={20} color="#fff" onPress={onEdit} />
      </Action>
      <Action style={{ marginLeft: 10 }}>
        <Icon name="content-copy" size={20} color="#fff" onPress={onCopy} />
      </Action>
      <Action style={{ marginLeft: 10 }}>
        <Icon name="delete-outline" size={25} color="#fff" onPress={onDelete} />
      </Action>
    </Content>
  </Container>
);

const Container = styled.View`
  padding-vertical: 30px;
  padding-horizontal: 10px;
  background: #6396d4;
  border-radius: 7px;
`;

const Header = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Action = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  justify-content: center;
  align-items: center;
  min-height: 40px;
  min-width: 40px;
  background: #87b9f6;
  border-radius: 30px;
`;
