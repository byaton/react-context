import React, { Fragment, useContext } from 'react';
import ContextLabel from './ContextLabel';
import { TestContext } from '../../context/test-context';

const ContextLabelGroup = props => {
    const testContext = useContext(TestContext);

    return (
        <Fragment>
            <p /><p /><b /><b />Name
            <ContextLabel labelText = {testContext.userName}></ContextLabel>
            <p /><p /><b /><b />Age
            <ContextLabel labelText = {testContext.userAge}></ContextLabel>
        </Fragment>
    );
}

export default ContextLabelGroup;