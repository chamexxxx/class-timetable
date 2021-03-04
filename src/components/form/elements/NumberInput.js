import React, { useState } from 'react';
import { isFinite, toNumber } from 'lodash';
import TextInput from './TextInput';

export default React.forwardRef(({ onChangeValue, ...props }, ref) => {
  const [number, setNumber] = useState(null);

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
