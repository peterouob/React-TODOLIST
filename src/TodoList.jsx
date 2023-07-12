import TodoItem from "./TodoItem";

export default function TodoList({todos,toggleTodo,deleteTodo}){
    return (
        <ul className="list">
            {/*大括號內為js*/}
            {todos.map(todo=>{
                return(
                    <TodoItem
                        {...todo} //取代下面
                        // id={todo.id}
                        // complete={todo.complete}
                        // title={todo.title}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}