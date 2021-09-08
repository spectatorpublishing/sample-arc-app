import React from 'react';
import Source from './Source';

const SourcesList = (props) => {
    return(
        <>
            <Source
                number={1}  
                name="Presbo"
                email= "presbo@columbia.edu"
            />
            <Source
            number={2}
            name="John Jay Mouse"
            email= "mouse@columbia.edu"
            />
            <Source
            number={3}
            name="Water bottle man"
            email= "bottleflipper@columbia.edu"
            />
         </>
    )
}
export default SourcesList;