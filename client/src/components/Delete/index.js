import React from "react";

function Delete(props) {
  return (
    <button className="delete-btn btn-danger btn" onClick={() => props.deleteSaved(props)}>
      Delete
    </button>
  )
}

export default Delete;
