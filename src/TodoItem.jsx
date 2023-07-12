export default function TodoItem({id, complete, title,toggleTodo,deleteTodo}){
    return (
        //再當成組建後可以不需要key
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={complete}
                    onChange={e=>toggleTodo(id,e.target.checked)}
                />
                {title}
            </label>
            {/*如果不使用箭頭函數，react會認為調用delete函數，所以一創建就會馬上刪掉，而不是點擊後才刪除*/}
            <button
                onClick={()=>deleteTodo(id)}
                    className="btn btn-danger"
            >Delete</button>
        </li>
    )
}