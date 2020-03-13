import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, eveniet? Corrupti quae dicta soluta iusto perferendis, aspernatur dolores atque sapiente magnam dignissimos harum, fugiat quo facere tempore porro illo nostrum?</p>
        </div>
    )
}

export default Rainbow(About)