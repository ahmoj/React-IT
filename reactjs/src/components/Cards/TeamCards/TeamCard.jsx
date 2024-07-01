/* eslint-disable react/prop-types */
import "./TeamCard.css";
import { useEffect, useState } from "react";


export default function TeamCard({
  name,
  points,
  matches,
  losses,
  wins,
  draws,
  deleteTeam,
  extended,
  setExtended,
  id
}) {
  const [closed, setClosed] = useState(true);
  const [teamDescription, setTeamDescription] = useState("");

  useEffect(() => {
    if (!closed) {
      setTeamDescription(
        "Ovaj tim je osnovan 1886. godine. Najtrofejniji je klub u engleskoj..."
      );
    } else {
      setTeamDescription("");
    }
  }, [!closed]);

  useEffect(() => {
    if (extended !== null && extended !== id) {
      setClosed(true)
    }
  }, [extended, id])

  useEffect(() => {
    if (!closed) {
      setExtended(id)
    } else {
      setExtended(null)
    }
  }, [closed, id ])

  return (
    <div  
      className={!closed ? `team-card` : `team-card`}
      style={{ height: !closed ? 170 : 80 }}
    >
      <h2 className="h2">{name}</h2>
      <p className="p">{points}</p>
      <p className="p">{matches}</p>
      <p className="p">{wins}</p>
      <p className="p">{draws}</p>
      <p className="p">{losses}</p>
      <p className="p" onClick={onclick}>
        <button onClick={deleteTeam} className="delete-btn show">
          Remove
        </button>
      </p>
      <p className="p">
        <button onClick={() => setClosed(!closed)} className="show">
          {!closed ? "Show less" : "Show more"}
        </button>
      </p>
      {/* {showMore ? (
        <p className="p text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          eveniet, sequi consectetur doloribus dicta eos! Iste obcaecati alias
          repudiandae asperiores quia quo nihil optio necessitatibus ipsa
          laudantium? Blanditiis sapiente nam maxime delectus eveniet totam
          dolorum? Iusto voluptatibus repellendus mollitia, delectus corrupti
          odio sapiente praesentium assumenda consequatur, aut quaerat rerum
          neque!
        </p>
      ) : null} */}
      {!closed && <p className="p text">{teamDescription}</p>}
    </div>
  );
}