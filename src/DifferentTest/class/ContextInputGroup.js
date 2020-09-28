import React, { Fragment, Component } from 'react';
import ContextInput from '../Function/ContextInput';
import { TestContext } from '../../context/test-context';

export default class ContextInputGroup extends Component {
    static contextType = TestContext;

    nameChangeHandler = event => {
        this.context.setUserName(event.target.value);
    };

    ageChangeHandler = event => {
        this.context.setUserAge(event.target.value);
    }

    render() {
        return (
        <Fragment>
            <p /><p /><b /><b /> Name
            <ContextInput change = { this.nameChangeHandler.bind()}></ContextInput>
            <p /><p /><b /><b /> Age
            <ContextInput change = {this.ageChangeHandler.bind()}></ContextInput>
        </Fragment>
        )
    }
}
