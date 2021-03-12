import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import Form from './Form';
import Field from './Field';
import TextInput from './elements/TextInput';
import SelectInput from './elements/SelectInput';
import NumberInput from './elements/NumberInput';
import DateTimePickerInput from './elements/DateTimePickerInput';

export default (props) => {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [type, setType] = useState(null);
  const [color, setColor] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [location, setLocation] = useState(null);
  const [appointedDate, setAppointedDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { onSubmit, buttonTitle } = props;

  useEffect(() => {
    setName(props.name);
    setNumber(props.number);
    setType(props.type);
    setColor(props.color);
    setTeacher(props.teacher);
    setLocation(props.location);
    setAppointedDate(moment(props.appointedDate));
    setStartDate(moment(props.startDate));
    setEndDate(moment(props.endDate));
  }, [props]);

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
      buttonTitle={buttonTitle || 'Создать'}
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
        <NumberInput
          value={number}
          onChangeValue={setNumber}
          placeholder="Номер занятия"
        />
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
          value={color}
          onChangeValue={setColor}
          placeholder="Цвет"
        />
      </Field>

      <Field>
        <DateTimePickerInput
          mode="date"
          value={appointedDate}
          onChangeValue={setAppointedDate}
          placeholder="Дата занятия"
          required
        />
      </Field>

      <Field>
        <DateTimePickerInput
          mode="time"
          value={startDate}
          onChangeValue={setStartDate}
          placeholder="Время начала"
        />
      </Field>

      <Field>
        <DateTimePickerInput
          mode="time"
          value={endDate}
          onChangeValue={setEndDate}
          placeholder="Время окончания"
        />
      </Field>
    </Form>
  );
};
