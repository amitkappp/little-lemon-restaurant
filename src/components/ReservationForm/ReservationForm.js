import React, { useEffect, useState } from "react";

const ReservationForm = () => {
  const [reservation, setReservation] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const avaiableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  useEffect(() => {
    console.log(reservation);
  }, [reservation]);

  const onChange = (e) => {
    setReservation({ ...reservation, [e.target.id]: e.target.value });
  };

  return (
    <section className="reservation-form">
      <div className="center-column">
        <div className="reserve-layout">
          <h2>Reserve a Table</h2>
          <h4>Fill the following details to reserve a table:</h4>
          <form>
            <div className="form-item">
              <label htmlFor="res-date">Choose date</label>
              <input
                type="date"
                id="date"
                onChange={onChange}
                value={reservation.date}
                required
              ></input>
            </div>
            <div className="form-item">
              <label htmlFor="res-time">Choose time</label>
              <select id="time" onChange={onChange} value={reservation.time}>
                {avaiableTimes.map((time, index) => {
                  return <option key={index}>{time}</option>;
                })}
              </select>
            </div>
            <div className="form-item">
              <label htmlFor="guests">Number of guests</label>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                onChange={onChange}
                value={reservation.guests}
              ></input>
            </div>
            <div className="form-item">
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                onChange={onChange}
                value={reservation.occasion}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-item primary-btn">
              <input type="submit" value="Reserve Now"></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
