import React,{Fragment} from 'react';
import { Form, Header } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



class ReservationForm extends React.Component {
  state = {
    start_date: '',
    end_date:'',
    adults: '',
    child: '',
    user_id: '',

}


  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleStartDate = (e) => {
    this.setState({ start_date: e })
  }

  handleEndDate = (e) => {
    this.setState({ end_date: e })
  }

  handleChange = (e) => {
    const{name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state);
    this.setState({ ...this.initialState });
  }

  render() {
    const { start_date, end_date, adults, child, user_id } = this.state
    return (
      <Fragment>
      <Header>Reservation Form</Header>
      <Form>
        
        <p>Start Date</p>
        <DatePicker
          selected={start_date}
          selectsStart
          startDate={start_date}
          endDate={end_date}
          onChange={this.handleStartDate}
          label='Dates'
        />
        <p>End Date</p>
        <DatePicker
          selected={end_date}
          selectsEnd
          startDate={start_date}
          endDate={end_date}
          onChange={this.handleEndDate}
          label='Dates'
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
      </Fragment>
    )
  }
}

export default ReservationForm;
