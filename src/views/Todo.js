const Todo = (props) => {
    let todos = props.todos;
    // console.log('prop', props);

    const handleDelete = (todo) => {
        console.log('todo', todo);
        props.handleDeleteTodo(todo)
    }

    return (
        <div>
            <ol>
                {todos && todos.length &&
                    todos.map(item => {
                        return (
                            <li key={item.id}>{item.title}<span onClick={() => handleDelete(item)}> X</span></li>
                        )
                    })
                }
            </ol>
            <hr />
        </div>
    )
}

export default Todo