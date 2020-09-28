import React, {Component, Fragment} from 'react';
import ContextInputGroup from './ContextInputGroup';
import ContextLabelGroup from './ContextLabelGroup';

export default class ContextPage extends Component {
    render() {
        return (
            <Fragment>
                <ContextInputGroup></ContextInputGroup>
                <ContextLabelGroup></ContextLabelGroup>
            </Fragment>
        );
    }
}