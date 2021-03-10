import moment from 'moment';

export default (lhsDate, rhsDate, currentDate) => {
  currentDate = currentDate ? moment(currentDate) : moment();

  if (lhsDate && rhsDate) {
    lhsDate = moment(lhsDate);
    rhsDate = moment(rhsDate);

    const dateIsBetween = currentDate.isBetween(lhsDate, rhsDate);

    if (dateIsBetween) {
      const total = rhsDate - lhsDate;
      const progress = currentDate - lhsDate;
      const percent = Math.floor((progress / total) * 100) / 100;
      const remained = rhsDate.diff(currentDate, 'minutes');
      const passed = currentDate.diff(lhsDate, 'minutes');

      return { percent, passed, remained };
    }
  }

  return {};
};
