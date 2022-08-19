import React from 'react';

const AboutPage = ({info}) => {
    return (
        <>
            <h1>{info.title}</h1>
            <p>{info.body}</p>
        </>
    );
};

export default AboutPage;