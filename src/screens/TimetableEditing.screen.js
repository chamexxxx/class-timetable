import React from 'react';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import Form from 'components/form/TimetableForm';

export default ({ navigation, route }) => {
  const database = useDatabase();
  const values = route.params;

  const onSubmit = async (data) => {
    const { id } = values;
    const timetablesCollection = database.get('timetables');

    await database.action(async () => {
      const timetable = await timetablesCollection.find(id);
      await timetable.update((record) => {
        record.name = data.name;
      });
    });

    navigation.goBack();
  };

  return <Form onSubmit={onSubmit} {...values} buttonTitle="Сохранить" />;
};
