const textForms = {
  seconds: ['секунда', 'секунды', 'секунд'],
  minutes: ['минута', 'минуты', 'минут'],
  hours: ['час', 'часа', 'часов'],
  days: ['день', 'дня', 'дней'],
  weeks: ['неделя', 'недели', 'недель'],
  months: ['месяц', 'месяца', 'месяцев'],
  years: ['год', 'года', 'лет'],
};

export default (n, textForm = 'minutes') => {
  const form = textForms[textForm];

  n = Math.abs(n) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) {
    return form[2];
  }

  if (n1 > 1 && n1 < 5) {
    return form[1];
  }

  if (n1 === 1) {
    return form[0];
  }

  return form[2];
};
