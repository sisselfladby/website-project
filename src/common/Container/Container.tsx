import React from 'react';
import './Container.scss';

interface Props {
    className?: string;
}

const Container: React.FunctionComponent<Props> = props => (
    <div className={"container " + props.className}>
        {props.children}
    </div>
);

export default Container;
