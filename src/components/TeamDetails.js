import React from 'react';
import { Link } from 'react-router-dom';

const TeamDetails = (props) => {
    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={props.team.logo_url} alt="..." /></div>
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bolder">{props.team.name}</h1>
                        <div className="fs-5 mb-5">
                            <span>Rating: {props.team.rating}</span>
                        </div>
                        <p className="lead">Wins: {props.team.wins}</p>
                        <p className="lead">Lossess: {props.team.losses}</p>
                        <div className="d-flex">
                            <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                                <i className="bi-cart-fill me-1"></i>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamDetails;