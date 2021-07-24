import Todo from './Todo'
import AddTodo from './AddTodo';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addTodo } from '../features/todo/todoSlice';


const Todos = () => {
    const { todos } = useSelector(state => state.todo);
    const [completedTask, setCompletedTask] = useState(0);
    const [pendingTask, setPendingTask] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [newTitle, setNewTitle] = useState('');
    const [newProject, setNewProject] = useState('');

    const dispatch = useDispatch();

    const updateCompletedTask = () => {
        const completedTaskLength = todos.filter(todo => {
            return todo.completed === true;
        }).length;
        setCompletedTask(completedTaskLength);
    }

    const updatePendingTask = () => {
        const pendingTaskLength = todos.filter(todo => {
            return todo.completed === false;
        }).length;
        setPendingTask(pendingTaskLength);
    }

    const turnOnActive = () => {
        setIsActive(false);
    }
    
    const turnOffActive = () => {
        setIsActive(true);
    }

    const handleNewTitle = (event) => {
        setNewTitle(event.target.value);
    }

    const handleNewProject = (event) => {
        setNewProject(event.target.value);
    }

    const handleSubmitAdd = (event) => {
        event.preventDefault();
        setIsActive(true);
        dispatch(
            addTodo({
                id: todos.length + 1,
                title: newTitle,
                project: newProject,
                completed: false
            })
        )
        setNewTitle('');
        setNewProject('');
    }
    
    useEffect(() => {
        updateCompletedTask();
        updatePendingTask();
    });

    return (
        <div className="todos">
            <div className="todos__info">
                <p className="todos__info--completed-task">completed task: { completedTask }</p> 
                <p className="todos__info--pending-task">pending task: { pendingTask }</p> 
            </div>
            <>
            {
                todos.map(todo => ( 
                    <Todo 
                        key={ todo.id } 
                        todo={ todo }
                    />
                    
                ))
            }
            </>
            {isActive 
                ?
            <div className="todos__add" onClick={ turnOnActive } >
                <span>+</span>
            </div >
                :
            <AddTodo
                handleSubmitAdd={ handleSubmitAdd }
                turnOffActive={ turnOffActive }
                newTitle={ newTitle }
                newProject={ newProject }
                handleNewTitle={ handleNewTitle }
                handleNewProject={ handleNewProject }
            />
            }
        </div >
    );
}

export default Todos;