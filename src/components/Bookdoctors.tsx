// import React from 'react'
import { useLocation } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Bookdoctors = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [lockeddate, setLockeddate] = useState<boolean>(false);
  const [booked, setBooked] = useState<boolean>(false);
  const handlechange = (startDate: Date) => {
    if (lockeddate == false) {
      setStartDate(startDate);
      setLockeddate(true);
    }
  };
  const location = useLocation();
  const doctor = location.state?.doctor;
  if (!doctor) return <p>No doctors Selected</p>;
  return (
    <div className="items-center justify-center flex  h-screen">
      <div className="w-full">
        <div className="bg-white shadow-md rounded-md ml-10 justify-center flex mt-2 w-[900px] items-center">
          <div className="w-full p-4">
            <h2 className="font-bold text-3xl text-center">Booking Details</h2>
            <div className="mt-3  w-full grid grid-cols-2 justify-between ml-24">
              <p>
                <strong>Name: </strong> {doctor.name}
              </p>
              <p>
                <strong>Speciallity: </strong> {doctor.speciality}
              </p>
            </div>

            <div className="mt-3  w-full grid grid-cols-2 justify-between ml-24">
              <p>
                <strong>Hospital: </strong> {doctor.hospital}
              </p>
              <p>
                <strong>Experience: </strong> {doctor.experience}
              </p>
            </div>

            <p className="ml-24 mt-3">
              <strong>Degree: </strong> {doctor.degree}
            </p>
            <p className="ml-24 mt-3">
              <strong>About the doctor: </strong> {doctor.message}
            </p>
            <div className="flex items-center gap-2">
              <DatePicker
                className="ml-24 mt-3"
                selected={startDate}
                onChange={handlechange}
                dateFormat="MM/DD/YYYY"
                customInput={
                  <button style={{ background: "none", border: "none" }}>
                    <FaCalendarAlt size={25} />
                  </button>
                }
              />

              <div
                className={`flex mt-3 text-center ${
                  startDate ? "bg-[#ff4757]" : "bg-red-300"
                }  w-fit px-4 py-2  rounded-md text-white cursor-pointer`}
              >
                <button
                  className="cursor-pointer"
                  onClick={startDate ? () => setBooked(true) : undefined}
                  disabled={!lockeddate}
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="ml-24 mt-3">
              {booked ? (
                <h3>
                  You have an appointement with {doctor.name} on{" "}
                  {startDate?.toString()}
                </h3>
              ) : (
                <h3>
                  Please select date above to book an appointement with{" "}
                  {doctor.name}
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdoctors;
