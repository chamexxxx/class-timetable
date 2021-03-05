import React from 'react';
import Validation from './Validation';
import Form from './Form';
import Field from './Field';
import TextInput from './elements/TextInput';

export default class TimetableForm extends Validation {
  constructor(props) {
    super(props);
    this.state = { ...this.state, name: null };
  }

  rules = {
    name: { required: true, message: 'Введите название расписания' },
  };

  _onSubmit = () => {
    const errors = this.validate(this.rules);

    if (Object.keys(errors).length === 0) {
      this.props.onSubmit({ ...this.state });
    }
  };

  render() {
    return (
      <Form onSubmit={this._onSubmit}>
        <Field
          render={() => (
            <TextInput
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
              placeholder="Название расписания"
              autoFocus={true}
            />
          )}
          errorMessage={
            this.state.errors.name && this.state.errors.name[0].message
          }
        />
      </Form>
    );
  }
}
