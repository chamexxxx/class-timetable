import React, { useState, useEffect } from 'react';
import { isFinite, toNumber } from 'lodash';
import TextInput from './TextInput';

export default React.forwardRef(({ value, onChangeValue, ...props }, ref) => {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    setNumber(String(value));
  }, [value]);

  const onChangeText = (text) => {
    if (isFinite(toNumber(text))) {
      setNumber(text);
      onChangeValue(text);
    }
  };

  return (
    <TextInput
      ref={ref}
      value={number}
      onChangeText={onChangeText}
      {...props}
    />
  );
});
