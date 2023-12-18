// Import necessary modules
import React, { useState, useEffect } from 'react';
import { useSession } from './session';
import axios from 'axios';

function MonthlyAllowance() {
  const { session } = useSession();
  const [description, setDescription] = useState('');
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    document.title = "Monthly Allowance | Solo Parent";
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmitAllowance = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/create-user-ticket', {
        userId: session.userId,
        type: 'Monthly Allowance',
        description: description,
        clientName: session.name,
      }, { withCredentials: true });

      console.log('Ticket submission successful:', response.data);
      setTicketData(response.data);

      // Add logic to handle successful submission (e.g., show a success message)
    } catch (error) {
      console.error('Error submitting ticket:', error);

      // Add logic to handle the error (e.g., show an error message)
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmitAllowance} className='ticketing-modal'>
        <div className='ticketing'>
          <fieldset>
            <legend>Ticketing Monthly Allowance</legend>
            <div>
              <label htmlFor='description'>Description:</label>
              <input
                type='text'
                id='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Description'
              />
            </div>
          </fieldset>
          <button type='submit'>Submit</button>
        </div>
      </form>

      {/* Display the created ticket data */}
      {ticketData && (
        <div className='ticketing'>
          <fieldset>
            <legend>Created Ticket Details</legend>
            <div>
              <strong>Ticket ID: <span>{ticketData.ticketId}</span></strong>
              <strong>Type: <span>{ticketData.type}</span></strong>
              <strong>Status: <span>{ticketData.status}</span></strong>
              <strong>Description:</strong>
              <p className='result'>{ticketData.description}</p>
              {/* Add other ticket data fields as needed */}
            </div>
          </fieldset>
        </div>
      )}
    </>
  );
}

export default MonthlyAllowance;
