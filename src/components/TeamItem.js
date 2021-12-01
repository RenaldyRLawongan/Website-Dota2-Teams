import React from 'react';
import { Link } from 'react-router-dom';

const TeamItem = (props) => { 
    return(
        <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={props.teams.logo_url} alt={props.teams.name} />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{props.teams.name}</h5>
                                    {props.teams.tag}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    <Link className="btn btn-outline-dark mt-auto" to={`/details/${props.teams.team_id}`}>Team Details
                                    </Link></div>
                            </div>
                        </div>
                    </div>
    );
}

export default TeamItem;