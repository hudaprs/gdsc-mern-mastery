// Axios
import axios from 'axios'
import type { AxiosResponse } from 'axios'

// Types
import {
  Todo,
  TodoCreateAttrs,
  TodoDeleteAttrs,
  TodoUpdateAttrs
} from '../types/todo.type'

/**
 * @description Get todo list
 *
 * @return {Promise<AxiosResponse<Todo[]>>} Promise<AxiosResponse<Todo[]>>
 */
export const getList = (): Promise<AxiosResponse<Todo[]>> =>
  axios.get('http://localhost:8000/api/todos')

/**
 * @description Store todo
 *
 * @param {TodoCreateAttrs} payload
 *
 * @return {Promise<AxiosResponse<Todo>>} Promise<AxiosResponse<Todo[]>>
 */
export const store = (payload: TodoCreateAttrs): Promise<AxiosResponse<Todo>> =>
  axios.post('http://localhost:8000/api/todos', payload.body)

/**
 * @description Update todo
 *
 * @param {TodoUpdateAttrs} payload
 *
 * @return {Promise<AxiosResponse<Todo>>} Promise<AxiosResponse<Todo[]>>
 */
export const update = (
  payload: TodoUpdateAttrs
): Promise<AxiosResponse<Todo>> =>
  axios.patch(
    `http://localhost:8000/api/todos/${payload.params.id}`,
    payload.body
  )

/**
 * @description Delete todo
 *
 * @param {TodoDeleteAttrs} payload
 *
 * @return {Promise<AxiosResponse<Todo>>} Promise<AxiosResponse<Todo[]>>
 */
export const destroy = (
  payload: TodoDeleteAttrs
): Promise<AxiosResponse<Todo>> =>
  axios.delete(`http://localhost:8000/api/todos/${payload.params.id}`)
