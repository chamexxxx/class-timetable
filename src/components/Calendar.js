import React from 'react';
import moment from 'moment';
import locale from 'moment/locale/ru';
import CalendarStrip from 'react-native-calendar-strip';

const isToday = (comparedDate, currentDate = moment()) => {
  return comparedDate.isSame(currentDate, 'day');
};

const customDatesStylesFunc = (date) => {
  if (isToday(date)) {
    return {
      dateContainerStyle: {
        borderColor: '#678eff',
        borderWidth: 2,
      },
    };
  }
};

export default React.forwardRef((props, ref) => (
  <CalendarStrip
    scrollable
    ref={ref}
    selectedDate={moment()}
    style={{
      height: 100,
      paddingTop: 10,
      paddingBottom: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    }}
    calendarColor="#545454"
    calendarHeaderStyle={{
      marginBottom: 5,
      color: 'white',
      fontSize: 15,
      textTransform: 'uppercase',
    }}
    dayContainerStyle={{ borderRadius: 10 }}
    dateNumberStyle={{ color: 'white' }}
    dateNameStyle={{ color: 'white', fontSize: 13 }}
    highlightDateContainerStyle={{
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }}
    highlightDateNumberStyle={{ color: '#fff' }}
    highlightDateNameStyle={{ color: '#fff', fontSize: 13 }}
    iconContainer={{ flex: 0.12 }}
    leftSelector={[]}
    rightSelector={[]}
    locale={{
      name: 'ru',
      config: locale,
    }}
    customDatesStyles={customDatesStylesFunc}
    {...props}
  />
));
