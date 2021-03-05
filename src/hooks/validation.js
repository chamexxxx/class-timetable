import { useState } from 'react';

export default (rules, data) => {
  const [errors, setErrors] = useState({});

  return {
    errors,
    validate() {
      const errs = Object.entries(rules).reduce((acc, [name, rule]) => {
        const value = data[name];

        const ruleErrors = [];

        switch (true) {
          case rule.required === true:
            const isFilled = !!value;

            if (!isFilled) {
              ruleErrors.push({
                rule: 'required',
                message: rule.message || `${name} is required`,
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
