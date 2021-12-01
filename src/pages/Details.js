import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import TeamDetails from '../components/TeamDetails';

const Details = () => {
    const [team, setTeam] = useState([]);
    const { teamId } = useParams();

    useEffect(() => {
    fetch(`https://api.opendota.com/api/teams/${teamId}`)
      .then((response) => response.json())
      .then((data) => setTeam(data))
    }, []);

    return(
        <>
        <Navigation />
        <TeamDetails key={teamId} team={team}/>
        <Footer />
        </>
    );
}

export default Details;