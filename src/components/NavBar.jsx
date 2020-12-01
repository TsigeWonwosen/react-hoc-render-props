import React from "react";

const NavBar = () => {
  console.log("NavBar Component");

  return (
    <div className='nav-bar'>
      <div className='log'>
        <h3>Wonde</h3>
      </div>
      <ul>
        <li>Home</li>
        <li>Post</li>
        <li>Log In</li>
        <li className='flag'>
          <img src='//s.svgbox.net/flags-ld.svg?ic=et' alt='flag' />
        </li>
      </ul>
    </div>
  );
};

export default React.memo(NavBar);
