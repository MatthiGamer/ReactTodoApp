import { useState } from "react"

export function NewTodoForm(/* props */ { addTodo }){    
    const [itemNameInput, setItemNameInput] = useState("")
    
    function handleInput(event){
        event.preventDefault()
        if (itemNameInput === "") return

        //props.addTodo(itemNameInput)
        addTodo(itemNameInput)

        setItemNameInput("")
    }

    return (
        <form onSubmit={handleInput} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={itemNameInput}
            onChange = {event => setItemNameInput(event.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}