import React, { useEffect, useState } from "react";

const ReservationForm = ({
  date,
  avaiableTimes,
  dispatch,
  onFormSubmit,
  reservetionConfirmed,
}) => {
  const [reservation, setReservation] = useState({
    date: date,
    time: "",
    guests: 1,
    occasion: "Birthday",
    status: "pending",
  });

  useEffect(() => {
    if (reservetionConfirmed === "success") {
      setReservation({
        ...reservation,
        status: `Your reservation for ${reservation.date} at ${reservation.time} is confirmed.`,
      });
    }
    if (reservetionConfirmed === "failure") {
      setReservation({
        ...reservation,
        status: "Sorry, your reservation could not be confirmed.Try again.",
      });
    }
  }, [reservetionConfirmed]);

  useEffect(() => {
    setReservation({ ...reservation, time: avaiableTimes[0] });
  }, [avaiableTimes]);

  const onChange = (e) => {
    setReservation({ ...reservation, [e.target.id]: e.target.value });
    if (e.target.id === "date") {
      dispatch({ type: "DATE_UPDATE", payload: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(reservation);
  };

  return (
    <section className="reservation-form">
      <div className="center-column">
        <div className="reserve-layout">
          <h2>Reserve a Table</h2>
          <h4>Fill the following details to reserve a table:</h4>
          <form onSubmit={onSubmit}>
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
          <aside className="form-feedback">
            {reservation.status !== "pending" && <h4>{reservation.status}</h4>}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
