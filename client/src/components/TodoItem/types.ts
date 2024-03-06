export type TodoItemProps = {
  title: string
  completed: boolean
  onCheck: () => void
  onDelete: () => void
}
