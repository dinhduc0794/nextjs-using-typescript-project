const InputTodo = (props) => {
    console.log("check props >>>", props)
    // jsx 
    return (
        <div>
            <div>
                age = {props.age}
            </div>
            <div>Add new task todo</div>
            <input type="text" />
            &nbsp; &nbsp; 
             {/* non-breaking space */}
            <button>Save</button>
        </div>
    )
}

export default InputTodo;