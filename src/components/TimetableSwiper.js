import React, { useRef, useImperativeHandle } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import Lessons from 'components/Lessons.js';

export default React.forwardRef(({ lessons, value, onChanged }, ref) => {
  const swiper = useRef();

  useImperativeHandle(ref, () => ({
    scrollTo,
    isScrolling: () => swiper.current.internals.isScrolling,
  }));

  const scrollTo = (date) => {
    const lessonIndex = lessons.findIndex((item) => item.date === date);
    const currentLessonIndex = swiper.current.state.index;
    const scrollToIndex = lessonIndex - currentLessonIndex;
    swiper.current.scrollBy(scrollToIndex, true);
  };

  const onIndexChanged = (index) => {
    /** setTimeout is needed to avoid warning:
        Cannot update a component from inside the function body of a different component
        https://github.com/leecade/react-native-swiper/issues/1209 */
    setTimeout(() => {
      if (onChanged) {
        const date = lessons[index].date;
        onChanged(date);
      }
    }, 1);
  };

  const getInitialIndex = () => {
    const currentDate = moment().startOf('day').set('hour', 12).toISOString();
    return lessons.findIndex(({ date }) => currentDate === date);
  };

  return (
    <Swiper
      ref={swiper}
      showsPagination={false}
      loadMinimal={true}
      loadMinimalSize={3}
      index={getInitialIndex()}
      onIndexChanged={onIndexChanged}
      loadMinimalLoader={<ActivityIndicator size="large" color="steelblue" />}>
      {lessons.map(({ date, items }, index) => (
        <View key={index}>
          {items ? (
            <Lessons
              key={index}
              data={items}
              style={{ paddingVertical: 10, paddingHorizontal: 15 }}
            />
          ) : (
            <Image
              source={{ uri: 'https://reactjs.org/logo-og.png' }}
              style={{ width: 400, height: 400 }}
            />
          )}
        </View>
      ))}
    </Swiper>
  );
});
