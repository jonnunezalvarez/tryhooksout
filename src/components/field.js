import React from 'react';

const Field = (props) => (
    <React.Fragment>
        <input
            type="text"
            onChange={props.onChangeFallback}
            placeholder='Write to update the label'
        />
        <label className="fancylabel">{props.fieldname}</label>
    </React.Fragment>
);

export default Field;