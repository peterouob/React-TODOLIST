import {useState} from "react";

//將app.jsx傳來的function解構，要和前面自定義的名稱一樣
export default function NewTodoForm({onSubmit}){
    const [newItem ,setNewItem] = useState("")
    function handleSubmit(e){
        //防止頁面刷新
        e.preventDefault()
        // setTodos((currentTodo)=>{
        //     return [...currentTodo,{title:newItem,complete:false,id:crypto.randomUUID()}]
        // })
        onSubmit(newItem)
        setNewItem("")
    }

    return(
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input
                    value={newItem}
                    //onchange監聽事件
                    onChange={e=>setNewItem(e.target.value)}
                    type="text"
                    id="item"/>
            </div>
            <button className="btn">Add</button>
        </form>
    )
}