import React, { useRef, useState, useEffect } from 'react';
import { Text, useWindowDimensions, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Lessons from 'components/Lessons.js';

const wp = (percentage, viewportWidth) => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};

const useCarouselDimensions = () => {
  const viewportWidth = useWindowDimensions().width;
  const slideWidth = wp(90, viewportWidth);
  const itemHorizontalMargin = wp(2, viewportWidth);
  const sliderWidth = viewportWidth;
  const itemWidth = slideWidth + itemHorizontalMargin * 2;
  return { sliderWidth, itemWidth };
};

export default ({ lessons = [], date, onSnap }) => {
  const { sliderWidth, itemWidth } = useCarouselDimensions();
  const [snappedDate, setSnappedDate] = useState(null);
  const carousel = useRef(null);

  useEffect(() => {
    if (date !== snappedDate) {
      setSnappedDate(date);
    }
  }, [date]);

  const snapToDate = (date) => {
    const lessonIndex = lessons.findIndex((item) => item.date === date);
    if (lessonIndex !== -1) {
      carousel.current.snapToItem(lessonIndex);
    }
  };

  const renderItem = ({ item, index }) => {
    const { items, date } = item;
    return (
      <>
        <Text>{date}</Text>
        <Lessons data={items} style={{ paddingVertical: 10 }} />
      </>
    );
  };

  return (
    <Carousel
      ref={carousel}
      data={lessons}
      renderItem={renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      onBeforeSnapToItem={() => console.log('on before snap to item')}
      onSnapToItem={() => console.log('on snap to item')}
    />
  );
};
