import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import Empty from './Empty';

export default ({
  items = [],
  filterString = '',
  emptyText,
  onPress,
  style,
}) => {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(
      items.filter(({ name }) =>
        name.toLowerCase().includes(filterString.toLowerCase()),
      ),
    );
  }, [items, filterString]);

  return (
    <Container style={style}>
      {filteredItems.length > 0 ? (
        <ScrollView style={{ paddingHorizontal: 15, paddingVertical: 5 }}>
          {filteredItems.map((item, index) => (
            <View
              style={{
                paddingBottom: index === items.length - 1 ? 10 : 0,
              }}
              key={index}>
              <Item
                title={item.name}
                onPress={() => onPress && onPress(item)}
              />
            </View>
          ))}
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Empty
            text={
              items.length === 0
                ? emptyText
                : 'По вашему запросу ничего не найдено'
            }
          />
        </View>
      )}
    </Container>
  );
};

const Container = styled.View`
  background: #f1f5f9;
  border-radius: 15px;
`;

const Item = ({ title, appendComponent, ...props }) => (
  <ItemContainer {...props}>
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
