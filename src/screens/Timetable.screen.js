import React, { useState, useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import withObservables from '@nozbe/with-observables';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import { useGroupLessons } from 'hooks';
import moment from 'moment';
import CreationButton from 'components/CreationButton';
import Calendar from 'components/Calendar';
import Lessons from 'components/Lessons';

const useCurrentLessons = (lessons, date) => {
  const data = lessons.find((item) => item.date === date);
  return data && data.items ? data.items : [];
};

const TimetableScreen = ({ timetable, lessons, navigation, route }) => {
  const [activeDate, setActiveDate] = useState(
    moment().startOf('day').set('hour', 12).toISOString(),
  );
  const calendar = useRef(null);

  useEffect(() => {
    navigation.setOptions({ title: timetable.name });
  });

  const groupedLessons = useGroupLessons(lessons);
  const currentLessons = useCurrentLessons(groupedLessons, activeDate);

  const onDateSelected = (date) => {
    setActiveDate(date.toISOString());
  };

  return (
    <>
      {lessons.length > 0 ? (
        <>
          <Calendar ref={calendar} onDateSelected={onDateSelected} />
          <View style={{ paddingVertical: 10, paddingHorizontal: 15 }}>
            {currentLessons.length > 0 ? (
              <Lessons data={currentLessons} />
            ) : (
              <Text>empty</Text>
            )}
          </View>
          <CreationButton
            label="Создать занятие"
            isFloating
            onPress={() =>
              navigation.navigate('LessonCreation', {
                timetableId: timetable.id,
              })
            }
          />
        </>
      ) : (
        <Text>Empty</Text>
      )}
    </>
  );
};

const enhance = withObservables(['timetable'], ({ timetable }) => ({
  timetable,
  lessons: timetable.lessons,
}));

const EnhancedTimetableScreen = enhance(TimetableScreen);

export default (props) => {
  const database = useDatabase();
  const [timetable, setTimetable] = useState(null);
  const { id } = props.route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await database.get('timetables').find(id);
        setTimetable(data);
      } catch (e) {
        console.log('ERROR:find', e);
      }
    };

    fetchData();
  }, [id, database]);

  return (
    timetable && <EnhancedTimetableScreen timetable={timetable} {...props} />
  );
};
