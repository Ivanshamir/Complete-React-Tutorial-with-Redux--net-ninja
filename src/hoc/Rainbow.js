import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'green', 'blue', 'pink', 'yellow', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const colorClass = randomColor + '-text';
    
    return (props) => {
        return(
            <div className={colorClass}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
    
}

export default Rainbow