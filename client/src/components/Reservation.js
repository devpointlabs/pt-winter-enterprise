import React from 'react';
import ReservationForm from './ReservationForm';
import { Table, Button, Modal, } from 'semantic-ui-react';

const Reservation = ({ user_id, start_date, end_date, adults, child }) => (
  <Table.Row user_id={user_id}>
    <Table.Cell>{start_date}</Table.Cell>
    <Table.Cell>{end_date}</Table.Cell>
    <Table.Cell>
      <Button color="red" onClick={() => remove(user_id)}>
        Delete
      </Button>
      <Modal trigger={
        <Button color="yellow">
          Edit
        </Button>
      }>
        <Modal.Header>Edit Reservation</Modal.Header>
        <ReservationForm 
          user_id={user_id}
          start_date={start_date}
          end_date={end_date}
          adults={adults}
          child={child}
        />
      </Modal>
    </Table.Cell>
  </Table.Row>
)

export default Reservation;