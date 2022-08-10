import { TodoItem } from "./TodoItem"


export const TodoList = ({todos}) => {
  return (
    <ul className="list-group">
        { todos.map( (item) =>
                <TodoItem item = {item} />
        ) 
        }
    </ul>
  )
}
