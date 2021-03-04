import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import TextInput from './TextInput';

export default ({ mode, containerStyle, onChangeValue, ...props }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const input = useRef(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if (mode === 'date') {
      setInputValue(moment(date).format('DD.MM.YYYY'));
    } else if (mode === 'time') {
      setInputValue(moment(date).format('hh:mm'));
    } else if (mode === 'datetime') {
      setInputValue(moment(date).format('DD.MM.YYYY hh:mm'));
    }

    onChangeValue(date);

    hideDatePicker();
  };

  const onFocus = () => {
    input.current.blur();
    showDatePicker();
  };

  return (
    <View style={containerStyle}>
      <TextInput
        ref={input}
        value={inputValue}
        onFocus={onFocus}
        showSoftInputOnFocus={false}
        prependComponent={
          mode === 'time' ? (
            <Icon name="time-outline" size={20} color="#000" />
          ) : (
            <Icon name="calendar-outline" size={20} color="#000" />
          )
        }
        {...props}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
