import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import TextInput from './TextInput';

const { DATE, TIME } = moment.HTML5_FMT;

export default ({ mode, value, onChangeValue, containerStyle, ...props }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const input = useRef(null);

  useEffect(() => {
    if (value && moment(value).isValid()) {
      setInputValue(formatDate(value));
    }
  }, [value, formatDate]);

  const formatDate = useCallback(
    (date) => {
      const momentDate = moment(date);

      if (mode === 'date') {
        return momentDate.format(DATE);
      } else if (mode === 'time') {
        return momentDate.format(TIME);
      } else if (mode === 'datetime') {
        return momentDate.format(DATE + ' ' + TIME);
      }
    },
    [mode],
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const momentDate = moment(date);
    setInputValue(formatDate(momentDate));
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
