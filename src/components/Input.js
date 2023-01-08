import React from 'react'

function Input({inputChange, onSubmit}) {
    return (
        <div className='input'>
            <input className='input-todo' 
            type='text' 
            placeholder='Add todo' 
            onChange={inputChange} 
            id='input'/>

            <input className='add-todo' 
            type='submit' 
            value='Add' onClick={onSubmit} />

        </div>
    )
}

export default Input
