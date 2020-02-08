import React, { Component } from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm'
import uuid from 'react-uuid'

class BoxList extends Component {
    state = {
        boxes: [],
        width: '',
        height: '',
        color: ''
    }

    deleteBox = (id) => {
        this.setState(
            {
                ...this.state,
                boxes: this.state.boxes.filter(b => b.id !== id)
            });
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { width, height, color, boxes } = this.state
        if (!width || !height || !color) return
        let box = {
            id: uuid(),
            width,
            height,
            color
        }
        this.setState({
            boxes: [...boxes, box],
            width: '',
            height: '',
            color: '',
        })
    }

    render() {
        return (
            <div>
                <NewBoxForm
                    width={this.state.width}
                    height={this.state.height}
                    color={this.state.color}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />

                <Box boxes={this.state.boxes} deleteBox={this.deleteBox} />
            </div>
        )
    }
}

export default BoxList;