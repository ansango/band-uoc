import React from "react";
import Card from "../../Components/Card";
import Quote from "../../Components/Quote";
import braxton from "../../../../images/card/Braxton.jpg";
import camille from "../../../../images/card/Camille.jpg";
import carla from "../../../../images/card/Carla.jpg";
import peter from "../../../../images/card/Peter.jpg";
import ryan from "../../../../images/card/Ryan.jpg";
import shannon from "../../../../images/card/Shannon.jpg";

export default () => {
  return (
    <div className="view view_band">
      <div className="container title-container">
        <h1>HELLO WE ARE...</h1>
      </div>
      <div className="container notes-container">
        {quotes.map((quote, index) => {
          return (
            <Quote
              key={index}
              url={quote.url}
              content={quote.content}
              author={quote.author}
              cite={quote.cite}
              position={quote.position}
            />
          );
        })}
      </div>
      <div className="container title-container text-center">
        <h2>
          <code className="text-primary fw-bold">!==</code>
        </h2>
      </div>
      <div className="cards-container">
        {members.map((member, index) => {
          return (
            <Card
              key={index}
              name={member.name}
              position={member.position}
              thumb={member.thumb}
              love={member.love}
              twitter={member.twitter}
              icon={member.icon}
              emoji={member.emoji}
            />
          );
        })}
      </div>
      <div className="container py-5">
        <h3 className="py-3">
          We were born in Berlin, we make noise, we like noise, we can't stop
          making noise. Sometimes we do quieter things, but only when we have a
          hangover on Fridays.
        </h3>
        <h3 className="py-3">
          Covid has kept us from touring, but when it's over, you can find us in
          basements, garages, churches, abandoned churches, discotheques,
          country bars, posh places, punk places and wherever there's a plug and
          wifi.
        </h3>
        <h3 className="py-3">
          We like books, ipa punk beer, bikes, skateboarding and busting
          tympani.
        </h3>
        <h3 className="py-3">We hope to see you soon. xxx</h3>
      </div>
    </div>
  );
};

const members = [
  {
    name: "Shannon",
    position: "Singer",
    thumb: shannon,
    love: "Reading",
    twitter: "https://twitter.com/",
    icon: "fas fa-music",
    emoji: "far fa-laugh",
  },
  {
    name: "Ryan",
    position: "Guitars",
    thumb: ryan,
    love: "Photography",
    twitter: "https://twitter.com/",
    icon: "fas fa-guitar",
    emoji: "far fa-surprise",
  },
  {
    name: "Peter",
    position: "Beats",
    thumb: peter,
    love: "Wild life",
    twitter: "https://twitter.com/",
    icon: "fas fa-heartbeat",
    emoji: "far fa-grin-beam-sweat",
  },
  {
    name: "Carla",
    position: "Synth",
    thumb: carla,
    love: "Skating",
    twitter: "https://twitter.com/",
    icon: "fas fa-robot",
    emoji: "far fa-grin kiss-wink-heart",
  },
  {
    name: "Camille",
    position: "Content Creator",
    thumb: camille,
    love: "Jazz",
    twitter: "https://twitter.com/",
    icon: "fas fa-video",
    emoji: "far fa-grin-stars",
  },
  {
    name: "Braxton",
    position: "Drums",
    thumb: braxton,
    love: "Science",
    twitter: "https://twitter.com/",
    icon: "fas fa-drum",
    emoji: "far fa-grin-tongue",
  },
];

const quotes = [
  {
    url: "https://pitchfork.com/",
    content:
      "Not Undefined is generous with moments like this tracks gather steam and reveal fresh layers as they move forward and they're what make the record a captivating listen. ",
    author: "Joe Colly",
    cite: "Pitchfork",
    position: "end",
  },
  {
    url: "https://www.theguardian.com/",
    content:
      "Fusing elements of free jazz, breakbeat, acid house, dub, ambient, and more, the Not Undefined first full-length album is simultaneously comforting and destabilizing.",
    author: "Nathan Smith",
    cite: "The Guardian",
    position: "end",
  },
  {
    url: "https://www.theguardian.com/",
    content:
      "The percussionist and composer explores the minutiae of a break-up via a robotic text-to-speech program on her quietly devastating new album. ",
    author: "Jonathan Williger",
    cite: "The New Yorker",
    position: "end",
  },
];
