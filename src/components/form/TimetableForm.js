import React, { useState, useEffect } from 'react';
import Form from './Form';
import Field from './Field';
import TextInput from './elements/TextInput';

export default (props) => {
  const [name, setName] = useState(null);

  const { onSubmit, buttonTitle } = props;

  useEffect(() => {
    setName(props.name);
  }, [props]);

  return (
    <Form
      onSubmit={() => onSubmit({ name })}
      buttonTitle={buttonTitle || 'Создать'}
      buttonDisabled={!name}>
      <Field>
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder="Название расписания"
          required
          autoFocus
        />
      </Field>
    </Form>
  );
};
