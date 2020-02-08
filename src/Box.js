import React from 'react';
import './Box.css'


const renderBox = (props) => {
    return props.boxes.map(b => {
        return (
            <React.Fragment key={b.id}>
                <div
                    className="Box"
                    style={
                        {
                            backgroundColor: b.color,
                            width: b.width + 'px',
                            height: b.height + 'px'
                        }}>
                </div>
                <div>
                    <button onClick={() => props.deleteBox(b.id)}>X</button>
                </div>
            </React.Fragment>)

    })
}

const Box = (props) => {
    console.log(props.boxes)

    return (
        <div className="Box-container">
            {renderBox(props)}
        </div>
    )
}


export default Box