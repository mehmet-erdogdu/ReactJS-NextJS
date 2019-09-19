import React from "react";
import Link from "next/link";
import Router from "next/router";

const UserList = props => (
  <div>
    {props.users.map(user => (
      <div key={user.id}>
        <Link as={`/@/${user.username}`} href={`/user?name=${user.username}`}>
          <a
            onMouseEnter={() => {
              Router.prefetch(`/user?name=${user.username}`);
            }}
          >
            {user.username}
          </a>
        </Link>
      </div>
    ))}
  </div>
);

export default UserList;
