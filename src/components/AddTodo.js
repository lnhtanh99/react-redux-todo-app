const AddTodo = ({ 
    handleSubmitAdd, 
    turnOffActive, 
    newTitle,
    newProject,
    handleNewTitle, 
    handleNewProject }) => {
    return (
        <form className="form" onSubmit={ handleSubmitAdd }>
            <div className="form__content">
                <label htmlFor="title" className="form__label">Title</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    className="form__input" 
                    value={ newTitle } 
                    onChange={ handleNewTitle }
                />
            </div>
            <div className="form__content">
                <label htmlFor="project" className="form__label">Project</label>
                <input 
                    type="text" 
                    id="project" 
                    name="project" 
                    className="form__input" 
                    value= { newProject } 
                    onChange={ handleNewProject }
                />
            </div>
            <div className="form__buttons">
                <button 
                    type="submit" 
                    className="form__buttons--create"
                >
                    Create
                </button>
                <button 
                    type="button"
                    className="form__buttons--cancel"
                    onClick={ turnOffActive }
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default AddTodo;