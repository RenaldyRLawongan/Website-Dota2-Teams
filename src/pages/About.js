import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
    return(
        <>
        <Navigation />

        <div className="container">
        <h1>About Page</h1>
        <p>This is about page.</p>
        </div>

        <Footer />
        </>
    );
}

export default About;