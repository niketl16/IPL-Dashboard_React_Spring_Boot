import { React, useEffect, useState } from "react";
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";


export const TeamPage = () => {
    
    const [team, setTeam] = useState();
    //setTeam({});


    useEffect( () => {
    const fetchMatches = async () => {
        const response = await fetch('http://localhost:8080/team/Mumbai Indians ');
    
        const data = await response.json();
        console.log(data);
        setTeam(data);

    };
    fetchMatches();
});

    
    return (
        <div className="TeamPage">
            <h1>  nik { team.teamName} </h1>
            <MatchDetailCard />
            <MatchSmallCard />
            <MatchSmallCard />
            <MatchSmallCard />
        </div>
        
    );
};

export   default TeamPage;