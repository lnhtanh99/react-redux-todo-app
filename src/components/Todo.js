import { FaTrash, FaEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { toggleCompleted, updateTodo, deleteTodo } from '../features/todo/todoSlice';
import { useState } from 'react';
import UpdateTodo from './UpdateTodo'

const Todo = ({ todo }) => {
    const {
        id,
        title,
        project,
        completed
    } = todo;

    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [todoTitle, setTodoTitle] = useState(title);
    const [todoProject, setTodoProject] = useState(project);

    
    const handleTitle = (event) => {
        setTodoTitle(event.target.value);
    }

    const handleProject = (event) => {
        setTodoProject(event.target.value);
    }

    const toggleUpdate = () => {
        setIsEditing(true);
    }

    const handleSubmitUpdate = (event) => {
        event.preventDefault();
        setIsEditing(false);
        dispatch(
            updateTodo({
            ...todo,
            title: todoTitle,
            project: todoProject,
            })
        )
    }

    return (
        <div className="todo__container">
            {!isEditing ?
                <>
                    <div className="todo">
                        <div className="todo__description">
                            <h3 className="todo__title">{ title }</h3>
                            <p className="todo__project">{ project }</p>
                        </div>
                        <div className="todo__icon">
                            <span>
                                <FaTrash onClick={() => dispatch(deleteTodo(id))}/>
                            </span>
                            <span>
                                <FaEdit onClick={ toggleUpdate } />
                            </span>
                        </div>
                    </div>
                    <div onClick={() => dispatch(toggleCompleted(id))}>
                        {completed
                            ?
                            <div className="todo__status todo__completed">
                                <p>completed</p>
                            </div>
                            :
                            <div className="todo__status todo__pending">
                                <p>pending</p>
                            </div>
                        }
                    </div>
                </>
                :
                <UpdateTodo 
                    todoTitle={ todoTitle } 
                    todoProject={ todoProject }
                    handleSubmitUpdate={ handleSubmitUpdate }
                    handleTitle={ handleTitle }
                    handleProject={ handleProject }
                />
            }
        </div>
    );
}

export default Todo;