import { orderBy } from 'lodash';
import moment from 'moment';

export const useSortArrayByDate = (array) => {
  return orderBy(
    array,
    ({ date }) => {
      return moment(date).format('YYYYMMDD');
    },
    ['asc'],
  );
};

export const useFillGroupLessons = (lessons) => {
  return lessons.reduce((acc, item, index, array) => {
    const intermediateItems = [];

    if (index !== array.length - 1) {
      const nextItem = array[index + 1];
      const itemDate = moment(item.date);
      const nextItemDate = moment(nextItem.date);
      const diff = nextItemDate.diff(itemDate, 'd', false);
      if (diff > 1) {
        for (let i = 1; i < diff; i++) {
          intermediateItems.push({
            date: itemDate.clone().add(i, 'days').toISOString(),
            items: null,
          });
        }
      }
    }

    acc.push(item);

    if (intermediateItems.length > 0) {
      acc.push(...intermediateItems);
    }

    return acc;
  }, []);
};

export const useExtremumDatesGroupLessons = (lessons) => {
  const dates = lessons.map(({ date }) => moment(date));
  const minDate = moment.min(dates);
  const maxDate = moment.max(dates);
  return [minDate, maxDate];
};

export const useGroupLessons = (lessons) => {
  lessons = lessons.reduce((acc, item) => {
    const appointedDate = moment(item.appointedDate);
    const appointedISODate = appointedDate
      .startOf('day')
      .set('hour', 12)
      .toISOString();

    if (!acc[appointedISODate]) {
      acc[appointedISODate] = [];
    }

    acc[appointedISODate].push(item);

    return acc;
  }, {});

  lessons = Object.keys(lessons).map((key) => ({
    date: key,
    items: lessons[key],
  }));

  return useFillGroupLessons(useSortArrayByDate(lessons));
};
