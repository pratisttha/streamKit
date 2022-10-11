import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'



const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "DASHBOARD", icon: <FontAwesomeIcon icon={solid('burger')} /> },
    { title: "title1", icon: <FontAwesomeIcon icon={solid('burger')} /> },
    { title: "title1", icon: <FontAwesomeIcon icon={solid('burger')} /> },
    { title: "title2", icon: <FontAwesomeIcon icon={solid('burger')} />, gap: true },
    { title: "title2", icon: <FontAwesomeIcon icon={solid('burger')} /> },
    { title: "title2", icon: <FontAwesomeIcon icon={solid('burger')} /> },
    { title: "title3", icon: <FontAwesomeIcon icon={solid('burger')} />, gap: true },
    { title: "title3", icon: <FontAwesomeIcon icon={solid('burger')} /> },
    { title: "title3", icon: <FontAwesomeIcon icon={solid('burger')} /> },
  ]

  return (
    <div className="flex bg-gradient-to-r from-orange-200 via-fuchsia-200 to-sky-200" >
      <div className={`${open ? "w-40" : "w-10"} duration-300 h-screen   relative`}>
        <div className=' items-center '>
          <h1 className={`text-black font-medium text-xl duration-200  pt-9 pl-4 pb-6 ${!open && "scale-0"}`}> LOGO </h1>
        </div>
        <div className={`absolute cursor-pointer  text-center text-2xl -right-3 top-9 w-7   `} onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={solid('burger')} />
        </div>
        <div>
          <ul className='pt-3 '>
            {Menus.map((Menus, index) => (
              <li key={index}
                className={`flex uppercase  rounded-md p-2 cursor-pointer  hover:bg-black hover:text-orange-200 text-black text-lg items-center gap-x-4 
            ${Menus.gap ? "mt-9" : "mt-2"}   `} >
                <div className={`${!open && "scale-20"} pl-3`}> {Menus.icon} </div>
                <span className={`${!open && "scale-0"} origin-left duration-300`}>{Menus.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    
    </div>

  )
}
export default Sidebar
