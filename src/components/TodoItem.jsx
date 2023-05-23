import React, {useContext} from 'react'
import { TodoContext } from '../App'

const TodoItem = ({todo}) => {
  // Definisikan function getTodoTitleStyle di sini
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
  }

  const {toggleCompleted, deleteTodo} = useContext(TodoContext)

  return (
    <div style={styles.todoItem}>
      <input 
      type="checkbox" 
      style={styles.checkbox} 
      onChange={() => toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button
        style={styles.button}
        onClick={() => {deleteTodo(todo.id)}}
      >x</button>
    </div>
  )

}

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  // Tambahkan styles di bawah ini
  checkbox: {
    marginRight: '10px',
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
}

export default TodoItem