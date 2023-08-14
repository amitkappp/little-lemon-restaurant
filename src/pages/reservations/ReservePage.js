import React from "react";
import ReservationForm from "../../components/ReservationForm";

const reservePageStyle = {
  display: "flex",
  flexDirection: "column",
};

const ReservePage = () => {
  return (
    <section style={{ reservePageStyle }}>
      <ReservationForm />
    </section>
  );
};

export default ReservePage;
