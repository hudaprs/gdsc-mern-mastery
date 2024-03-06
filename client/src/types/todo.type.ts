export type Todo = {
  _id: string
  title: string
  completed: boolean
}

export type TodoCreateAttrs = {
  body: {
    title: string
    completed: boolean
  }
}

export type TodoUpdateAttrs = {
  params: {
    id: string
  }
  body: {
    completed: boolean
  }
}

export type TodoDeleteAttrs = {
  params: {
    id: string
  }
}
