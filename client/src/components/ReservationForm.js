import React from 'react';
import { Form } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';


class ReservationForm extends Components {
  State = {
    start_date: '',
    end_date:'',
    adults: '',
    child: '',
    user_id: '',

  }

  state = { ...this.initialState }

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state);
    this.setState({ ...this.initialState });
  }

  render() {
    const { start_date, end_date, adults, child, user_id } = this.state
    return (
      <Form>
        <DatePicker
          selected={start_date}
          selectsStart
          startDate={start_date}
          endDate={end_date}
          onChange={handleChangeStart}
        />

        <DatePicker
          selected={end_date}
          selectsEnd
          startDate={start_date}
          endDate={end_date}
          onChange={handleChangeEnd}
        />

        <Form.Input
          name='adults'
          required
          value={adults}
          onChange={this.handleChange}
          label='Adults'
        />

        <Form.Input
          name='child'
          required
          value={child}
          onChange={this.handleChange}
          label='Children'
        />

        <Form.Input
          name='user_id'
          required
          value={user_id}
          onChange={this.handleChange}
          label='User'
        />

        <Form.Button>Save</Form.Button>
      </Form >

    )
  }
}

export default ReservationForm;
