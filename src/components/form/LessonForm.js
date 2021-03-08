import React, { useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Form from './Form';
import Field from './Field';
import TextInput from './elements/TextInput';
import SelectInput from './elements/SelectInput';
import NumberInput from './elements/NumberInput';
import DateTimePickerInput from './elements/DateTimePickerInput';

export default ({ onSubmit }) => {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [type, setType] = useState(null);
  const [color, setColor] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [location, setLocation] = useState(null);
  const [appointedDate, setAppointedDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const _onSubmit = () => {
    if (startDate && endDate) {
      const diff = endDate.diff(startDate, 'minutes');
      if (diff < 0) {
        Alert.alert(
          'Неверные данные',
          'Время начала не должно быть меньше времени окончания!',
        );
        return;
      }
    }

    onSubmit({
      number,
      name,
      type,
      color,
      teacher,
      location,
      appointedDate,
      startDate,
      endDate,
    });
  };

  return (
    <Form
      onSubmit={_onSubmit}
      buttonTitle="Создать"
      buttonDisabled={!(name && appointedDate)}>
      <Field>
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder="Название предмета"
          required
        />
      </Field>

      <Field>
        <TextInput
          onChangeText={setType}
          value={type}
          placeholder="Тип предмета"
        />
      </Field>

      <Field>
        <NumberInput onChangeValue={setNumber} placeholder="Номер занятия" />
      </Field>

      <Field>
        <TextInput
          onChangeText={setTeacher}
          value={teacher}
          placeholder="Преподаватель"
          prependComponent={
            <Icon name="school-outline" size={20} color="#000" />
          }
        />
      </Field>

      <Field>
        <TextInput
          onChangeText={setLocation}
          value={location}
          placeholder="Место"
          prependComponent={
            <Icon name="location-outline" size={20} color="#000" />
          }
        />
      </Field>

      <Field>
        <SelectInput
          items={[
            { label: 'Зеленый', value: 'green' },
            { label: 'Красный', value: 'red' },
            { label: 'Жёлтый', value: 'yellow' },
            { label: 'Синий', value: 'blue' },
          ]}
          onChangeValue={setColor}
          placeholder="Цвет"
        />
      </Field>

      <Field>
        <DateTimePickerInput
          onChangeValue={setAppointedDate}
          mode="date"
          placeholder="Дата занятия"
          required
        />
      </Field>

      <Field>
        <DateTimePickerInput
          onChangeValue={setStartDate}
          mode="time"
          placeholder="Время начала"
        />
      </Field>

      <Field>
        <DateTimePickerInput
          onChangeValue={setEndDate}
          mode="time"
          placeholder="Время окончания"
        />
      </Field>
    </Form>
  );
};
