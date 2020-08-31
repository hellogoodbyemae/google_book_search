import React from 'react';

function Save(props) {

        return <button className="save-btn btn-primary btn" onClick={() => props.saveBook(props)}>Save</button>
}

export default Save;