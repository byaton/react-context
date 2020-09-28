import React, {Component, Fragment} from 'react';
import ContextLabel from '../Function/ContextLabel';
import { TestContext } from '../../context/test-context';


export default class ContextLabelGroup extends Component {

    static contextType = TestContext;

    render() {
        return (
            <Fragment>
                <p /><p /><b /><b />Name
                <ContextLabel labelText = {this.context.userName}></ContextLabel>
                <p /><p /><b /><b /> age
                <ContextLabel labelText = {this.context.userAge}></ContextLabel>
            </Fragment>
        );
    }
}