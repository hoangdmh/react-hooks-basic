const Todo = (props) => {
    let { todos } = props;
    // console.log('prop', props);
    return (
        <div>
            <ol>
                {todos && todos.length &&
                    todos.map(item => {
                        return (
                            <li key={item.id}>{item.title}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Todo