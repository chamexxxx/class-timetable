import React, { useRef } from 'react';
import moment from 'moment';
import locale from 'moment/locale/ru';
import CalendarStrip from 'react-native-calendar-strip';

const isToday = (comparedDate, currentDate = moment()) => {
  return comparedDate.isSame(currentDate, 'day');
};

const defaultStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
};

const customDatesStylesFunc = (date) => {
  if (isToday(date)) {
    return {
      dateContainerStyle: {
        ...defaultStyles,
        borderColor: '#857cbd',
        borderWidth: 2,
      },
    };
  }
  return {
    dateContainerStyle: defaultStyles,
  };
};

export default React.forwardRef(({ date, onDateSelected, ...props }, ref) => {
  const calendar = useRef(null);

  return (
    <CalendarStrip
      scrollable
      ref={calendar}
      onDateSelected={onDateSelected}
      selectedDate={moment()}
      style={{
        height: 120,
        paddingTop: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
      calendarColor="#ffffff"
      calendarHeaderStyle={{
        marginBottom: 5,
        color: '#000000',
        fontSize: 15,
        textTransform: 'uppercase',
      }}
      dayComponentHeight={50}
      dayContainerStyle={{
        borderRadius: 10,
      }}
      dateNumberStyle={{ color: '#000000' }}
      dateNameStyle={{ color: '#000000', fontSize: 13 }}
      highlightDateContainerStyle={{
        backgroundColor: '#857cbd',
      }}
      highlightDateNumberStyle={{ color: '#fff' }}
      highlightDateNameStyle={{ color: '#fff', fontSize: 13 }}
      iconContainer={{ flex: 0.12 }}
      calendarAnimation={{ type: 'sequence', duration: 0 }}
      locale={{
        name: 'ru',
        config: locale,
      }}
      customDatesStyles={customDatesStylesFunc}
      {...props}
    />
  );
});
