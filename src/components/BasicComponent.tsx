import React from 'react';

function BasicComponent(props: {titleString: string, paragraphOneString: string, paragraphTwoString:string, imageURL: string}) {
    return (
        <section>
            <h1>{props.titleString}</h1>
            <p>{props.paragraphOneString}</p>
            <p>{props.paragraphTwoString}</p>
            <img src={props.imageURL} alt={"missing"}/>
        </section>


    )
}

export default BasicComponent