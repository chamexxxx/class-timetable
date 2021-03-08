import { useState } from 'react';
import moment from 'moment';

const defaultMessages = {
  required: 'Обязательно к заполнению',
  moreDate: 'Некорректная дата',
};

export default (rules, data) => {
  const [errors, setErrors] = useState({});

  return {
    errors,
    validate() {
      const errs = Object.entries(rules).reduce((acc, [name, rule]) => {
        const propertyValue = data[name];

        const ruleErrors = [];
        switch (true) {
          case rule.required === true:
            const isFilled = !!propertyValue;

            if (!isFilled) {
              ruleErrors.push({
                rule: 'required',
                message: rule.message || defaultMessages.required,
              });
            }
            break;
          case !!rule.moreDate:
            const { value, unit } = rule.moreDate;
            const rDate = moment(propertyValue); // end date
            const lDate = moment(value); // start date
            const diff = rDate.diff(lDate, unit);

            if (diff < 0) {
              ruleErrors.push({
                rule: 'moreDate',
                message: rule.message || defaultMessages.moreDate,
              });
            }
            break;
        }

        if (ruleErrors.length > 0) {
          acc[name] = ruleErrors;
        }

        return acc;
      }, {});

      setErrors(errs);

      return [Object.keys(errs).length > 0, errs];
    },
  };
};
