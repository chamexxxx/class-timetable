import React, { useState } from 'react';
import useValidation from '../../hooks/validation';
import Form from './Form';
import Field from './Field';
import TextInput from './elements/TextInput';

export default ({ onSubmit }) => {
  const [name, setName] = useState(null);
  const { validate, errors } = useValidation(
    {
      name: { required: true, message: 'Введите название расписания' },
    },
    { name },
  );

  const _onSubmit = () => {
    const [isError] = validate();

    if (!isError) {
      onSubmit({ name });
    }
  };

  return (
    <Form onSubmit={_onSubmit}>
      <Field
        render={() => (
          <TextInput
            onChangeText={setName}
            value={name}
            placeholder="Название расписания"
            autoFocus={true}
          />
        )}
        errorMessage={errors.name && errors.name[0].message}
      />
    </Form>
  );
};
