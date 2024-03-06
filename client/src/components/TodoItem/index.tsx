// React
import { memo } from 'react'

// Types
import { TodoItemProps } from './types'

const TodoItem = memo(
  ({ title, completed, onCheck, onDelete }: TodoItemProps) => {
    return (
      <li>
        <div className='title-wrapper'>
          <input
            type='checkbox'
            checked={completed}
            onChange={onCheck}
            style={{ cursor: 'pointer' }}
          />

          <p className={completed ? 'done' : undefined}>{title}</p>
        </div>

        <div className='actions-wrapper'>
          <button className='delete' onClick={onDelete}>
            ❌
          </button>
        </div>
      </li>
    )
  }
)

TodoItem.displayName = 'TodoItem'

export default TodoItem
