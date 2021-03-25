import React from 'react';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import Form from 'components/form/TimetableForm';

export default ({ navigation }) => {
  const database = useDatabase();

  const onSubmit = async ({ name }) => {
    await database.action(async () => {
      const collection = database.get('timetables');
      const { id } = await collection.create((item) => {
        item.name = name;
      });

      navigation.replace('Timetable', { id });
    });
  };

  return <Form onSubmit={onSubmit} />;
};
