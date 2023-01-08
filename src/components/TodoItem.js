import React from 'react'

function TodoItem(props) {
    const completedSytle={
        fontStyle:'italic',
        color:'#cdcdcd',
        textDecoration:'line-through'
    }
    return (
        <div className='todo-item'>
            <label>
                <input type='checkbox' 
                checked={props.todo.completed} 
                onChange={props.onChange}  
                />
                 <span 
                    style={props.todo.completed? 
                    completedSytle:null}
                    >
                        {props.todo.text}
                </span>
            </label>
            <input type='button' 
            onClick={()=>props.handleDelete(props.todo.id)} 
            value='X' className='delete' />
    
     
        </div>
    )
}

export default TodoItem
