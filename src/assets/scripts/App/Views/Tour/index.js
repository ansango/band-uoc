import React from "react";
import Ticket from "../../Components/Card/ticket";
import Table from "../../Components/Table";
import Gallery from "../../Components/Gallery";
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
          <Table appoints={appoints} />
        </div>
      </div>
      <div className="container">
        <Gallery />
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
