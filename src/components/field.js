import React from 'react';

const Field = (props) => (
    <React.Fragment>
        <input
            type="text"
            onChange={props.onChangeFallback}
        />
        <label className="fancylabel">{props.fieldname}</label>
    </React.Fragment>
);

export default Field;