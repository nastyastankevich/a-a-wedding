import React from 'react'
import style from './Spinner.module.css'
const Spinner = () => (
  <div className="w-full h-screen flex items-center justify-center bg-[#68483a]">
    <span className={style.loader}></span>
  </div>
)

export default Spinner
