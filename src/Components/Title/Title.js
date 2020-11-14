import React from 'react';


const Title = ({ title, subtitle }) => {
    return (
        <div>
            <h1 className="display-1">{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    );
};

export default Title;