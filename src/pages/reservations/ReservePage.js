import React, { useEffect, useReducer } from "react";
import ReservationForm from "../../components/ReservationForm";
import { fetchAPI, submitAPI } from "../../fakeAPI/fakeAPI";
import { useNavigate } from "react-router-dom";

const reservePageStyle = {
  display: "flex",
  flexDirection: "column",
};

const updateTimes = (avaiableTimes, action) => {
  if (action.type === "DATE_UPDATE") {
    const response = fetchAPI(action.payload);
    avaiableTimes = [...response];
  }
  if (action.type === "TIMES_UPDATE") {
    avaiableTimes = [...action.payload];
  }

  return avaiableTimes;
};

const ReservePage = () => {
  const initDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const [avaiableTimes, dispatch] = useReducer(updateTimes, []);
  const navigate = useNavigate();

  const onFormSubmit = (formData) => {
    console.log("Form submitted", formData);
    const response = submitAPI(formData);
    if (response) {
      console.log("Reservation successful");
      navigate("/reservation-success");
    }
  };

  useEffect(() => {
    const response = fetchAPI(initDate);
    dispatch({ type: "TIMES_UPDATE", payload: response });
  }, []);

  return (
    <section style={{ reservePageStyle }}>
      <ReservationForm
        date={initDate}
        avaiableTimes={avaiableTimes}
        dispatch={dispatch}
        onFormSubmit={onFormSubmit}
      />
    </section>
  );
};

export default ReservePage;
