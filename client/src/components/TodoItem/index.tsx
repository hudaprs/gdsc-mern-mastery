// TODO: Do some memoize in this component

// TODO: Add type definition for this component

const TodoItem = () => {
  return (
    <li>
      <div className='title-wrapper'>
        {/* TODO: Add event handler, and controlled value  */}
        <input type='checkbox' style={{ cursor: 'pointer' }} />

        {/* TODO: Add some dynamic class here */}
        <p>{/* TODO: Title Here */}</p>
      </div>

      <div className='actions-wrapper'>
        {/* TODO: Add event handler  */}
        <button className='delete'>❌</button>
      </div>
    </li>
  )
}

export default TodoItem
