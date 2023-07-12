import {useEffect, useState} from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App(){
    const [todos,setTodos] = useState(()=>{
        const localValue = localStorage.getItem("item")
        if(localValue == null) return []

        return JSON.parse(localValue)
    })
    //第一個為執行函數，第二個為監聽數值，每當todos發生變化都會調用這個useEffect
    useEffect(()=>{
        //儲存到本地localstorage
        localStorage.setItem("item",JSON.stringify(todos))
    },[todos])
    console.log(todos)
    function toggleTodo(id,complete){
        setTodos(currentTodo=>{
            return currentTodo.map(todo=>{
                if(todo.id === id){
                 //todo.complete = complete 這樣會報錯， react狀態最重要的一點就是沒辦法更改他
                 return {...todo,complete}//重新創建一個屬性已做更改
                }
                return todo
            })
        })
    }
    function newTodo(title){
        setTodos((currentTodo)=>{
            return [...currentTodo,{title,complete:false,id:crypto.randomUUID()}]
        })
    }
    function deleteTodo(id){
        setTodos(currentTodo =>{
            return currentTodo.filter(todo=>todo.id !== id)
        })
    }
    return (
        //react return 只能返回一個，需要用到類似vue的父元素概念
        //代表空標籤，專門拿來返回的
        <>
            {/*將newTodo這個函數傳給組建，onSubmit為自定義命名*/}
            <NewTodoForm onSubmit={newTodo}/>
            <h1 className="header">Todo List</h1>
            {/*當為true時會顯示&&後面的值*/}
            {todos.length === 0 && "NO TODO"}
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        </>
    )
}