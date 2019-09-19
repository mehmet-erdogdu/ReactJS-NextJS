import React, { Component } from "react";
import Layout from "../components/Layout";
import UserList from "../components/UserList";
import fetch from "isomorphic-fetch";

export default class Users extends Component {
  static async getInitialProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return { users };
  }

  render() {
    return (
      <Layout>
        <h1>Kullanıcılar</h1>
        <UserList users={this.props.users} />
      </Layout>
    );
  }
}
