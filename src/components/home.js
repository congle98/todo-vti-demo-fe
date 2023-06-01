import React, {Fragment} from 'react'
import {Link, Outlet} from "react-router-dom";

function Home() {
  return (
      <Fragment>
        <div>Đây là trang home</div>
      {/*  <div>*/}
      {/*  <nav>*/}
      {/*    <li>*/}
      {/*      <Link to="/todo">TodoList</Link>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <Link to="/create">CreateTodo</Link>*/}
      {/*    </li>*/}
      {/*  </nav>*/}
      {/*</div>*/}
        {/*<Outlet/>*/}
      </Fragment>
  )
}

export default Home