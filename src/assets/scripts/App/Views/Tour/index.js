import React from "react";
import Ticket from "../../Components/Card/ticket";
import Contact from "../../Components/Contact";
export default () => {
  return (
    <div className="view view-tour">
      <div className="container title-container">
        <h1>Tour 2021</h1>
        <div className="container d-md-none">
          {appoints.map((appoint, index) => {
            return <Ticket key={index} appoint={appoint} />;
          })}
        </div>
        <div className="container d-none d-md-block">
          <table className="table">
            <thead></thead>
            <tbody>
              {appoints.map((appoint, index) => {
                let date = `${appoint.date.month} ${appoint.date.day} ${appoint.date.dayWeek}`;
                let country = `${appoint.location[1].region}`;
                let time = `${appoint.hour}`;
                let place = `${appoint.location[0].place}`;
                let event = `${place} | ${time}`;
                return (
                  <tr key={index}>
                    <td>
                      <i className="fas fa-ticket-alt text-primary"></i>
                    </td>
                    <td>{date}</td>
                    <td>{event}</td>
                    <td>{country}</td>
                    <td>
                      <button className="btn btn-primary text-white">
                        Tickets
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const appoints = [
  {
    id: 1,
    date: {
      month: "Jun",
      day: 2,
      dayWeek: "Thu",
    },
    location: [
      { place: "Charles Krug Winery" },
      { region: "St. Helena, CA, United States" },
    ],
    hour: "19:30",
  },
  {
    id: 1,
    date: {
      month: "Jun",
      day: 2,
      dayWeek: "Thu",
    },
    location: [
      { place: "Charles Krug Winery" },
      { region: "St. Helena, CA, United States" },
    ],
    hour: "19:30",
  },
  {
    id: 1,
    date: {
      month: "Jun",
      day: 2,
      dayWeek: "Thu",
    },
    location: [
      { place: "Charles Krug Winery" },
      { region: "St. Helena, CA, United States" },
    ],
    hour: "19:30",
  },
  {
    id: 1,
    date: {
      month: "Jun",
      day: 2,
      dayWeek: "Thu",
    },
    location: [
      { place: "Charles Krug Winery" },
      { region: "St. Helena, CA, United States" },
    ],
    hour: "19:30",
  },
  {
    id: 1,
    date: {
      month: "Jun",
      day: 2,
      dayWeek: "Thu",
    },
    location: [
      { place: "Charles Krug Winery" },
      { region: "St. Helena, CA, United States" },
    ],
    hour: "19:30",
  },
  {
    id: 1,
    date: {
      month: "Jun",
      day: 2,
      dayWeek: "Thu",
    },
    location: [
      { place: "Charles Krug Winery" },
      { region: "St. Helena, CA, United States" },
    ],
    hour: "19:30",
  },
  {
    id: 1,
    date: {
      month: "Jun",
      day: 2,
      dayWeek: "Thu",
    },
    location: [
      { place: "Charles Krug Winery" },
      { region: "St. Helena, CA, United States" },
    ],
    hour: "19:30",
  },
];
