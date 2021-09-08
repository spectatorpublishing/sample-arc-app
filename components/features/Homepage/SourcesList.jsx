import React from 'react';
import Source from './Source';

const SourcesList = ({authorData}) => {
    return(
        <>
        {/* {console.log(authorData)} */}
        {/* {console.log(authorData[0])} */}
        {/* {console.log(authorData.q_results)} */}
        {authorData && authorData.q_results.map((author, index)=>(
           <Source
            number={index+1}  
            name={`${author.firstName} ${author.lastName}`}
            email= {author.email}
           /> 
        ))}
        </>
    )
}
export default SourcesList;