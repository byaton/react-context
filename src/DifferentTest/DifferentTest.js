import React, { Component, Fragment } from 'react';

export default class DifferentTest extends Component {
    state = {
        stoCkPrice: ''
    };

    onChangeHandler = (event) => {
        const nbr = event.target.value;
        this.setState({stoCkPrice: nbr});
        console.log(event.target.value, this.state.stoCkPrice);
    }

    render() {
        return (
            <Fragment>
                <p /><p /><b /><b />
                <input value = {this.state.stoCkPrice} onChange = {this.onChangeHandler.bind(this)}/>
                <p /><p /><b /><b />
                <input value = {this.state.stoCkPrice * 0.6}/>   
            </Fragment>
        );
    }
}

