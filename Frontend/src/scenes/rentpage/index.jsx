import React, { useEffect } from 'react';

function CarBookingForm() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((element, index) => {
      const delay = index * 100; 
      setTimeout(() => {
        element.classList.add('fade-in');
      }, delay);
    });
  }, []);

  return (
    <div className="login-pageee">
      <div className="login-containerrr">
        <h2 className="login-titleee fade-in-element">Book Car</h2>
        <form className="login-formmm">
          <div className="form-grouppp fade-in-element">
            <label htmlFor="fullName" className="form-labelll">Full Name</label>
            <input type="text" id="fullName" className="form-inputtt" name="fullName" />
          </div>
          <div className="form-groupp fade-in-element">
            <label htmlFor="email" className="form-labelll">Email</label>
            <input type="email" id="email" className="form-inputtt" name="email" />
          </div>
          <div className="form-groupp fade-in-element">
            <label htmlFor="phone" className="form-labelll">Phone Number</label>
            <input type="tel" id="phone" className="form-inputtt" name="phone" />
          </div>
          <div className="form-groupp fade-in-element">
            <label htmlFor="pickupDate" className="form-labelll">Pickup Date</label>
            <input type="date" id="pickupDate" className="form-inputtt" name="pickupDate" />
          </div>
          <div className="form-groupp fade-in-element">
            <label htmlFor="returnDate" className="form-labelll">Return Date</label>
            <input type="date" id="returnDate" className="form-inputtt" name="returnDate" />
          </div>
          <div className="form-groupp fade-in-element">
            <label htmlFor="comments" className="form-labelll">Comments</label>
            <textarea id="comments" className="form-inputtt" name="comments"></textarea>
          </div>
          <button type="submit" className="login-buttonnn fade-in-element">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CarBookingForm;
