// React
import { useCallback, useState, useEffect } from 'react'

// Types
import { Todo } from './types/todo.type'

// API
import * as todoApi from './api/todo.api'

// Components
import TodoItem from './components/TodoItem'

const App = () => {
  // Common State
  const [title, setTitle] = useState<string>('')
  const [todoList, setTodoList] = useState<Todo[]>([])

  /**
   * @description Fetch todo list
   *
   * @return {Promise<void>} Promise<void>
   */
  const fetchTodoList = useCallback(async (): Promise<void> => {
    try {
      const response = await todoApi.getList()

      setTodoList(response.data)
    } catch (_) {
      //
    }
  }, [])

  /**
   * @description Create todo
   *
   * @param {string} form.title
   *
   * @return {Promise<void>} Promise<void>
   */
  const createTodo = useCallback(
    async (form: { title: string }): Promise<void> => {
      try {
        const response = await todoApi.store({
          body: { title: form.title, completed: false }
        })

        setTodoList(prev => [response.data, ...prev])
      } catch (_) {
        //
      }
    },
    []
  )

  /**
   * @description Update todo
   *
   * @param {string} form.completed
   * @param {string} form.id
   *
   * @return {Promise<void>} Promise<void>
   */
  const updateTodo = useCallback(
    async (form: { completed: boolean; id: string }): Promise<void> => {
      try {
        await todoApi.update({
          params: { id: form.id },
          body: { completed: form.completed }
        })

        setTodoList(prev =>
          prev.map(todo =>
            todo._id === form.id
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        )
      } catch (_) {
        //
      }
    },
    []
  )

  /**
   * @description Update todo
   *
   * @param {string} form.id
   *
   * @return {Promise<void>} Promise<void>
   */
  const deleteTodo = useCallback(
    async (form: { id: string }): Promise<void> => {
      try {
        await todoApi.destroy({
          params: { id: form.id }
        })

        setTodoList(prev => prev.filter(todo => todo._id !== form.id))
      } catch (_) {
        //
      }
    },
    []
  )

  /**
   * @description Load data when came first to this component
   *
   * @return {void} void
   */
  useEffect(() => {
    fetchTodoList()
  }, [fetchTodoList])

  return (
    <div id='app'>
      {/* Title */}
      <h1>Todos</h1>
      {/* End Title */}

      {/* Form */}
      <input
        type='text'
        placeholder='✎ What needs to be done'
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={async event => {
          if (event.code === 'Enter') {
            await createTodo({ title })
            setTitle('')
          }
        }}
      />
      {/* End Form */}

      {/* Todo List */}
      <ul>
        {todoList.map(todo => (
          <TodoItem
            key={todo._id}
            title={todo.title}
            completed={todo.completed}
            onCheck={() => {
              updateTodo({ completed: !todo.completed, id: todo._id })
            }}
            onDelete={async () => {
              await deleteTodo({ id: todo._id })

              fetchTodoList()
            }}
          />
        ))}
      </ul>

      {/* End Todo List */}
    </div>
  )
}

export default App
