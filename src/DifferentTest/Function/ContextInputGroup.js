import React, { Fragment, useContext } from 'react';
import ContextInput from './ContextInput';
import { TestContext } from '../../context/test-context';

const ContextInputGroup = props => {
    const testContext = useContext(TestContext);

    const nameChangeHandler = event => {
        testContext.setUserName(event.target.value);
    }
    const ageChangeHandler = event => {
        testContext.setUserAge(event.target.value);
    }

    return (
        <Fragment>
            <p /><p /><b /><b /> Name
            <ContextInput change = {nameChangeHandler.bind() } ></ContextInput>
            <p /><p /><b /><b /> Age
            <ContextInput change = {ageChangeHandler.bind()} ></ContextInput>
        </Fragment>
        
    );
}

export default ContextInputGroup;