import React from "react";
import { Link } from './styled'


export default function RepoNavbar() {
  let lightGrey = "rgba(0,0,0,0.1)";
  let spanStyle = {
    backgroundColor: lightGrey,
    borderRadius: "50%",
    fontSize: "12px",
    padding: "5px"
  };
  return (
    <div style={{ borderBottom: `1.5px solid ${lightGrey}`, margin: '0 20px' }}>
      <nav style={{ display: "flex" }}>
        <Link href="#" active>Overview</Link>
        <Link href="#">
          Repositories <span style={spanStyle}>12</span>
        </Link>
        <Link href="#">Projects</Link>
        <Link href="#">
          Stars <span style={spanStyle}>7</span>
        </Link>
        <Link href="#">Followers</Link>
        <Link href="#">Following</Link>
      </nav>
    </div>
  );
}
