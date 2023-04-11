import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="p-7 mb-50">
      <div className="shadow-lg bg-black-100 rounded-xl navbar">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-20" fill="none" viewBox="0 0 0 0" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="10" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="p-5 mt-5 shadow menu menu-compact dropdown-content bg-base-30 rounded-box w-40">
              <li><Link to='/brands'>Brand</Link></li>
              <li><Link to='/categories'>Category</Link></li>
              <li>
                <Link to="/vehicles">Unit Ready</Link>
              </li>
              <li><Link to='/banks'>Dartar Rekening</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to={'/'} className="text-xl big-case btn btn-ghost">QitaTronic Store</Link>
        </div>
        <div className="navbar-end">
          {/* <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button> */}
        </div>
      </div>
    </div>
  )
}
