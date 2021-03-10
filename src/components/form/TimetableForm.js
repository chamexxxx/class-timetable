import React, { useState } from 'react';
import Form from './Form';
import Field from './Field';
import TextInput from './elements/TextInput';

export default ({ onSubmit }) => {
  const [name, setName] = useState(null);

  return (
    <Form
      onSubmit={() => onSubmit({ name })}
      buttonTitle="Создать"
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
