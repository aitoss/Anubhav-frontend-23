import React from 'react'
import kd from "../../../assets/images/kd.jpg";
 
const author = () => {
  return (
<div className="author flex items-center py-2">
  <img src={kd} className="rounded-full w-8 h-8 mr-2" alt="User Avatar" />
  <div className="flex items-center gap-2">
    <a href="#" className="text-md font-bold hover:text-gray-600 text-gray-700">
      Kamakshi Dixit
    </a>
    <span className="text-gray-700">|</span>
    <a href="#" className="text-md text-gray-500">
      Company
    </a>
  </div>
</div>


  )
}

export default author