import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link prefetch href="/">
        <a>Anasayfa</a>
      </Link>
      {" | "}
      <Link prefetch href="/users">
        <a>Kullanıcılar</a>
      </Link>
      <br />
      <br />
    </div>
  );
};

export default Navbar;
