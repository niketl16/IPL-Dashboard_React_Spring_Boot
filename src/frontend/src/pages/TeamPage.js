import { React, useEffect, useState } from "react";
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";
import { useParams } from "react-router-dom";

export const TeamPage = () => {
    
    const [team, setTeam] = useState(  {matches: []} );
    //setTeam({});
    const { teamName } = useParams();


    useEffect( () => {
    const fetchMatches = async () => {
        const response = await fetch(`http://localhost:8080/team/${teamName}`);
        const data = await response.json();
        console.log(data);
        setTeam(data);

    };
    fetchMatches();
},[teamName]);

if(!team.teamName || !team){
    return <h1>Team Not found</h1>
}
    // {console.log(team)}
    return (
        <div className="TeamPage">
        cd
        <h1>  nik er {team.teamName}  </h1>
            <MatchDetailCard
                teamName = {team.teamName}
                match = {team.matches[0]}
            />
            {team.matches.slice(1).map(match=> <MatchSmallCard teamName = {team.teamName} match={match} />)}
            




        </div>
        
    );
};

export   default TeamPage;