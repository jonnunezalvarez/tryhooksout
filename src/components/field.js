import React from 'react';

export default (props) => (
    <React.Fragment>
        <input
            type="text"
            onChange={props.onChange}
            placeholder={props.value}
        />
    </React.Fragment>
);
