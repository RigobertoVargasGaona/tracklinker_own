import React from 'react'

export const Input = ({type="text", name, id, placeholder,labelText}) => {
  return (
    
    <div className="relative w-full mb-6">
    <label
        htmlFor={labelText}
        className="absolute left-2 px-1 bg-white text-gray-500 text-sm transition-all duration-200 
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-400 
                 peer-focus:text-sm peer-focus:text-blue-500"
    >
        {labelText}
    </label>
    <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="peer w-96 h-14 border-2 border-gray-300 rounded px-3 pt-5 text-sm text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 z-50"
    />
    </div>
  )
}
