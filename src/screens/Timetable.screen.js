import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import withObservables from '@nozbe/with-observables';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import { useGroupLessons } from 'hooks';
import moment from 'moment';
import CreationButton from 'components/CreationButton';
import Calendar from 'components/Calendar';
import Lessons from 'components/Lessons';
import Empty from 'components/Empty';

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

  const isEmpty = lessons.length === 0 || currentLessons.length === 0;

  return (
    <>
      <Calendar
        ref={calendar}
        onDateSelected={onDateSelected}
        style={
          !isEmpty && {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }
        }
      />
      {currentLessons.length > 0 && (
        <>
          <View style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 15 }}>
            {currentLessons.length > 0 && <Lessons data={currentLessons} />}
          </View>
        </>
      )}
      {isEmpty && (
        <Empty text="Занятий нет" style={{ backgroundColor: '#ffffff' }} />
      )}
      <CreationButton
        label="Создать занятие"
        isFloating
        style={{ backgroundColor: '#000', color: '#fff' }}
        onPress={() =>
          navigation.navigate('LessonCreation', {
            timetableId: timetable.id,
          })
        }
      />
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
