import React from 'react'

function Loader() {
  return (
    <div className="box w-full h-full absolute flex justify-center items-center bg-black backdrop-blur-2xl z-9999999999">
        <div className="loader"></div>
    </div>
  )
}

export default Loader