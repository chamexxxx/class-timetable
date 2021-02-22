import React, { useRef } from 'react';
import Swiper from 'react-native-swiper';
import Calendar from '../components/Calendar.js';
import Lessons from '../components/Lessons.js';
import lessons from '../api/lessons.js';

const TimetableScreen = () => {
  const calendar = useRef(null);
  return (
    <>
      <Calendar
        ref={calendar}
        onDateSelected={(date) => {
          console.log(calendar.current.getSelectedDate());
        }}
      />
      <Swiper showsPagination={false}>
        <Lessons
          data={lessons}
          style={{ paddingVertical: 10, paddingHorizontal: 15 }}
        />
        <Lessons
          data={lessons}
          style={{ paddingVertical: 10, paddingHorizontal: 15 }}
        />
        <Lessons
          data={lessons}
          style={{ paddingVertical: 10, paddingHorizontal: 15 }}
        />
      </Swiper>
    </>
  );
};

export default TimetableScreen;
