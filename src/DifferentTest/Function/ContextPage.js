import React, { Fragment } from 'react';
import ContextInputGroup from './ContextInputGroup';
import ContextLabelGroup from './ContextLabelGroup';

const ContextPage = props => {
    return (
        <Fragment>
            <ContextInputGroup></ContextInputGroup>
            <ContextLabelGroup></ContextLabelGroup>
        </Fragment>
    );
}

export default ContextPage;