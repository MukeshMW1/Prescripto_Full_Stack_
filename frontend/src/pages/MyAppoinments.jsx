import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div className="max-w-[80vw] mx-auto mt-20 mb-40">
      <h1 className="text-[18px] text-gray-500 border-b pb-4">
        My Appointments
      </h1>
      <div className="flex flex-col gap-6">
        {doctors.slice(0, 4).map((doctor, index) => (
          <div className="flex gap-10 border-b py-4" key={index}>
            <img src={doctor.image} alt="" className="w-40 h-40 bg-blue-100" />
            <div className="flex md:flex-row w-full gap-10 justify-between flex-col">
              <div className="">
                <h1 className=" text-[14px] md:text-[16px] font-semibold">
                  {doctor.name}
                </h1>
                <p className=" text-[12px] md:text-[14px] text-gray-500">
                  {doctor.speciality}
                </p>
                <div className="">
                  <p className="text-[14px] md:text-[16px] text-gray-500 font-semibold">
                    Address:
                  </p>
                  <p className="text-[14px] text-gray-500">
                    {doctor.address.line1}
                    <br />
                    {doctor.address.line2}
                  </p>
                </div>
                <div className="flex items-baseline">
                  <p className="text-[14px] md:text-[16px] text-gray-500 font-semibold">
                    Date & Time:
                  </p>
                  <p className=" text-[12px] md:text-[14px] text-gray-500">
                    22 Nov 2024 | 22:22:22
                  </p>
                </div>
              </div>
              <div className="flex flex-col  justify-center gap-2">
                <button className=" text-gray-600 border px-4 md:px-6 py-2 hover:bg-primary hover:text-white text-[12px] transition-all transform duration-300">
                  Pay Online
                </button>
                <button className="text-gray-600 border px-4   py-2 hover:bg-red-500 hover:text-white text-[12px] transition-all transform duration-300">
                  Cancel Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
