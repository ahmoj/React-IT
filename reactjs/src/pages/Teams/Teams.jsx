/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import teamsJSON from "../../common/teams.json";
import TeamCard from "../../components/Cards/TeamCards/TeamCard";
import "./Teams.css";

export default function Teams() {
  const [teams, setTeams] = useState(teamsJSON);
  const [extended, setExtended] = useState(null)

  // console.log(Math.random(0, 1));
  // console.log(new Date().getTime());

  const deleteTeam = (id) => {
    const filteredTeams = teams.filter((team) => team.id !== id);
    setTeams(filteredTeams);
  };

  useEffect(() => {
    const newTeams = teamsJSON.map((team) => {
      const teamId = Math.random(0, 100000000000);
      return {
        ...team,
        id: teamId,
      };
    });
    setTeams(newTeams);
  }, []);
  return (
    <>
      <div className="list">
        {teams.map((team, index) => {
          return (
            <TeamCard
              key={index}
              name={team["team_name"]}
              points={`${team["points"]}pts`}
              wins={team.wins}
              loses={team.loses}
              draws={team.draws}
              losses={team.losses}
              matches={team.matches_played}
              deleteTeam={() => deleteTeam(team.id)}
              extended = {extended}
              setExtended = {setExtended}
            />
          );
        })}
      </div>
    </>
  );
}