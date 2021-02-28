import React from 'react';

const Country = (props) => {
    const { name, population, flag, region} = props.country;
    const flagStyle = { height:'50px'}
    const countryStyle = {
        border:'5px solid lightblue',
        margin:'15px',
        borderRadius:'5px'
    } 
    
    const handleAddCountry = props.handleAddCountry;

    return(
        <div style={countryStyle}>
            <h2>This is {name}</h2>
            <img style={flagStyle} src={flag} />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add country</button>

        </div>

    );
};

export default Country;