import React from 'react'

function Alert({message}:AlertProps) {
    return (
        <>
            <span className="my-2 text-sm text-red-800 rounded-lg " role="alert">{message}</span>
        </>
    )
    
}

export default Alert