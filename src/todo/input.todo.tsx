// type script = javascript + type checking / code recommendation

// compile-time: dich code : typescript -> javascript (check type)
// run-time: chay code

export interface IProps {   //export de tai su dung o file khac
    name: string;
    age: number;
    dinhduc: {
        gender: string;
        address: string;
    };
    abc? : string;      // optional
}

const InputTodo = (props: IProps) => {     // keyword any -> off type checking
    const {age, name} = props;  // object destructuring
    const handleClick = () => {
        alert("Save task todo")
    }

    console.log("check props >>>", props)
    // jsx 
    return (
        <div>
            <div>age = {age}</div>
            <div>name = {name}</div>
            <div>
                location = {props.dinhduc.address}
            </div>
            <div>Add new task todo</div>
            <input 
            type="text" 
            onChange={(event) => {
                console.log("event >>>", event.target.value)
            }}
            />
            &nbsp; &nbsp; 
             {/* non-breaking space */}
            <button onClick={() => handleClick()}>Save</button>    {/* su dung arrow function anh huong tot den hieu nang*/}
        </div>  
    )
}

export default InputTodo;