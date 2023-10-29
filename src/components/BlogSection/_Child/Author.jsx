import React from 'react'

const author = () => {
  return (
    <div className="author flex py-2">
        <img src="/src/assets/images/user1.png" className="rounded-full w-[30px] h-[30px]" alt="" />
        <div className="flex gap-2 flex-row justify-center px-4">
        <a href="" className="text-md font-bold hover:text-gray-600 text-gray-700 ">Kamakshi Dixit</a>
        <span className="text-gray-700">|</span>
        <a className="text-md text-center gap-2 text-gray-500">Company</a>
        </div>
    </div>
  )
}

export default author