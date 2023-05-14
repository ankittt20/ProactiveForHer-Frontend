import { useState } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consultation, setConsultation] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [activeIndex, setActiveIndex] = useState(false);

  const handleClick = () => {
    setActiveIndex(!activeIndex);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointment = { name, email, phone, consultation, day, time };

    const response = await fetch("/api/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    });
    const json = await response.json();

    if (!response.ok) {
      alert(json.error || "Something went wrong!");
    }
    if (response.ok) {
      alert("Your appointment has been booked successfully!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-[#FDF4F5] shadow-md rounded-md p-7"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="consultation-type"
        >
          Consultation Type
        </label>
        <div onClick={() => handleClick()} className="relative">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            id="consultation-type"
            defaultValue=""
            name="consultation"
            value={consultation}
            onChange={(event) => setConsultation(event.target.value)}
          >
            <option value="" disabled hidden>
              I’d like to Consult
            </option>
            <option value="Gynaecologist">Gynaecologist</option>
            <option value="Physiotherapist">Physiotherapist</option>
            <option value="Nutritionist">Nutritionist</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className={`w-4 h-4 transition-transform ${
                activeIndex ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between space-x-3">
        <div className="mb-4 w-full">
          <label htmlFor="day" className="block text-gray-700 font-bold mb-2">
            Day
          </label>
          <div className="relative">
            <select
              id="day"
              name="day"
              value={day}
              onChange={(event) => setDay(event.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="" disabled selected>
                Select a day
              </option>
              {/* Add options for each day of the week */}
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className={`w-4 h-4 transition-transform ${
                  activeIndex ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-4 w-full">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Time
          </label>
          <div className="relative">
            <select
              id="time"
              name="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="" disabled selected>
                Select a time
              </option>
              {/* Add options for each hour */}
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className={`w-4 h-4 transition-transform ${
                  activeIndex ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 font-bold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        Book Appointment
      </button>
    </form>
  );
}

export default Contact;
