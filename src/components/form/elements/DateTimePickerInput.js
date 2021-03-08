import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import TextInput from './TextInput';

const { DATE, TIME } = moment.HTML5_FMT;

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
    const momentDate = moment(date);

    if (mode === 'date') {
      setInputValue(momentDate.format(DATE));
    } else if (mode === 'time') {
      setInputValue(momentDate.format(TIME));
    } else if (mode === 'datetime') {
      setInputValue(momentDate.format(DATE + ' ' + TIME));
    }

    onChangeValue(momentDate);

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
        is24Hour={true}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
