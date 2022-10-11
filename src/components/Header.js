import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({  nav_list }) => {
  function addNav() {
    let menu = {}
    // for (let index = 0; index < nav_list.length; index++) {
    //   const element = nav_list[index];
    //   menu[index] = element
    // }

    ///map
    nav_list.map((item, index) =>
      <li ><Link to="/" />fsdfsdfs</li>
    )

  }
  return (

    <div>
      {/* <h1>{title}</h1> */}
      <div className=' pr-8 w-96 float-right  '>
        <nav>
          <ul className='flex fixed gap-9 pt-6 uppercase  '>
            {nav_list.map((item, index) =>
              <li ><Link to={item?.link} >{item.title}</Link></li>
            )}
            {/* <li><Link to="/" /></li> */}
          </ul>
        </nav>
              

      </div>

    </div>

  )
}

export default Header
