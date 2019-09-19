import React from "react";
import Layout from "../components/Layout";

const user = props => {
  return (
    <Layout>
      <h1>Kullanıcı Detayları</h1>
      {JSON.stringify(props)}
      <h1>{props.url.query.name}</h1>
    </Layout>
  );
};

export default user;
