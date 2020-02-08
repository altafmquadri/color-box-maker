import React from 'react';
import './NewBoxForm.css'

const NewBoxForm = (props) => {
    return (
        <div className="NewBoxForm">
            <form onSubmit={props.handleSubmit}>
                <div className="form-row">
                    <label>Box Width</label>
                    <input type="text"
                        name="width"
                        value={props.width}
                        onChange={props.handleChange} />
                </div>

                <div className="form-row">
                    <label>Box Height</label>
                    <input type="text"
                        name="height"
                        value={props.height}
                        onChange={props.handleChange} />
                </div>

                <div className="form-row">
                    <label>Box Color</label>
                    <input type="text"
                        name="color"
                        value={props.color}
                        onChange={props.handleChange} />
                </div>

                <div className="submit">
                    <button>Add Box</button>
                </div>
            </form>
        </div>
    )
}

export default NewBoxForm