import React from 'react';
import Source from './Source';


const SourcesList = ({authorData}) => {
    return(
        <>
            {authorData && authorData.q_results.map((author, index) => (
                <Source
                    number={index + 1}
                    firstName={author.firstName}
                    lastName={author.lastName}
                    email={author.email}
                />
            ))}
        </>
    )
}

export default SourcesList;