import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (

    <div className="fixed max-md:hidden">
      <div className="flex flex-col items-center w-10 py-10 ml-7 space-y-7 shadow-xl rounded-xl">
        <div className="space-y-30 rounded-md bg-white">
          <ul>
            <li className="p-7">
              <Link to='/brands' >
                <i className="text-3xl fa-solid fa-tag"></i>
              </Link>
            </li>
            <li className="p-7">
              <Link to='/categories' >
                <i className="text-3xl fa-solid fa-list"></i>
              </Link>
            </li>

            <li className="p-7">
              <Link to='/vehicles' >
                <i className="text-3xl fa-solid fa-car"></i>
              </Link>
            </li>
            <li className="p-7">
              <Link to='/banks' >
                <i className="text-3xl fa-solid fa-building-columns"></i>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}
