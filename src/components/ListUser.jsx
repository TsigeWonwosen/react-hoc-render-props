import React from "react";

function ListUser({ title, body, userId }) {
  return (
    <li>
      <h4>
        <span>{userId}</span> - {title}{" "}
      </h4>
      <p> {body}</p>
    </li>
  );
}

export default ListUser;
