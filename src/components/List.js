import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

export default ({ items = [], style, onPress }) => {
  return (
    <Container style={style}>
      <ScrollView style={{ paddingHorizontal: 15, paddingVertical: 5 }}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <View
              style={{
                paddingBottom: index === items.length - 1 ? 10 : 0,
              }}
              key={index}>
              <Item title={item.name} onPress={() => onPress(item)} />
            </View>
          ))
        ) : (
          <Text>Empty</Text>
        )}
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  background: #f1f5f9;
  border-radius: 15px;
`;

const Item = ({ title, onPress, appendComponent }) => (
  <ItemContainer onPress={onPress}>
    <ItemTitle>{title}</ItemTitle>
    {appendComponent || <Icon name="arrow-forward" size={25} color="#857cbd" />}
  </ItemContainer>
);

const ItemContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-vertical: 12px;
  padding-horizontal: 15px;
  background: #ffffff;
  border-radius: 5px;
  elevation: 1;
`;

const ItemTitle = styled.Text`
  flex: 0.95;
  font-size: 18px;
  color: #737b87;
  font-weight: bold;
`;
