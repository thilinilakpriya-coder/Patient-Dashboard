import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AppointmentCard from "./components/AppointmentCard";
import PatientInfo from "./components/PatientInfo";
import AppointmentHistory from "./components/AppointmentHistory";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="container">
        <h2>Welcome Back Pasan!</h2>
        <button className="view-btn">View doctor details</button>

        <div className="top-cards">
          <AppointmentCard />
          <PatientInfo />
        </div>

        <AppointmentHistory />
      </div>

      <Footer />
    </div>
  );
}
