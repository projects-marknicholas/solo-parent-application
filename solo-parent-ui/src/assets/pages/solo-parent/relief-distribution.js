import React, { useState, useEffect } from 'react';

function ReliefDistribution() {
  useEffect(() => {
    document.title = "Relief Distribution | Solo Parent";
    window.scrollTo(0, 0);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Pass setIsMenuOpen to Navbar
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Set initial data for the table
  const data = [
    {
      createdDate: '13/12/2023',
      clientName: 'John Doe',
      ticketNumber: '098754321',
      ticketType: 'Relief Distribution',
      status: 'On Process',
      result: 'Result here...',
      notes: 'This is just a sample notes'
    }
  ];

  return (
    <>
      <form method='post' action='/submit' className='ticketing-modal'>
        <div className='ticketing'>
          <fieldset>
            <legend>Ticketing Relief Distribution</legend>
            {/* Display data from the data array */}
            {data.map((user, index) => (
              <div key={index} className='left'>
                <strong>Ticket ID: <span>{user.ticketNumber}</span></strong>
                <strong>Client Name: <span>{user.clientName}</span></strong>
                <strong>Ticket Status: <span>{user.status}</span></strong>
                <strong>Ticket Type: <span>{user.ticketType}</span></strong>
                <strong>Result:</strong>
                <p className='result'>
                  {user.result}
                </p>
              </div>
            ))}
            <div className='right'>
              <strong>Notes</strong>
              <p className='result'>{selectedUser?.notes || 'Select a user to view notes'}</p> {/*put max height*/}
              <i>Contact Information: <span><a href='mailto:'>put here</a></span></i>
            </div>
          </fieldset>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  );
}

export default ReliefDistribution;
