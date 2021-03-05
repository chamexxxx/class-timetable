import { Component } from 'react';

export default class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  validate(rules) {
    const errors = Object.entries(rules).reduce((acc, [name, rule]) => {
      const value = this.state[name];

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

    this.setState({ errors });

    return errors;
  }
}
