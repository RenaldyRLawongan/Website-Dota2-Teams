import React, { useState, useEffect } from 'react';
import TeamItem from './TeamItem';


const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        //hit endpoint dota2 all team
        fetch('https://api.opendota.com/api/teams')
        .then(response => response.json())
        .then(data => setTeams(data));

        // islint-disable-next-line
    }, []);


    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h2>Search Team</h2>
                
                <form>
                    <input type="text" className="form-control"/>
                </form>

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
                    { teams.map((teams) => <TeamItem key={teams.team_id} teams={teams}/>) }
                </div>
            </div>
        </section>
    );
}

export default Teams;