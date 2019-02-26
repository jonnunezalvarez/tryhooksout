import React from 'react';

export default (props) => (
    <React.Fragment>
        <input
            type="text"
            onChange={props.onChangeFallback}
            placeholder={props.placeholder}
        />
    </React.Fragment>
);
