import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}){
    return (
        <ul className="list">
            {todos.length === 0 && "All todos done!"}
            {todos.map((todo) => {
                return (
                    <TodoItem
                        /*
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        */
                        {...todo}

                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        />
                )
            })}
      </ul>
    )
}