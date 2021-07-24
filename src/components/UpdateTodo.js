const UpdateTodo = ({ 
  todoTitle, 
  todoProject, 
  handleSubmitUpdate, 
  handleTitle, 
  handleProject }) => {

    return ( 
        <form className="form" onSubmit={ handleSubmitUpdate }>
          <div className="form__content">
            <label htmlFor="title" className="form__label">Title</label>
            <input 
                type="text" 
                id="title" 
                name="title" 
                className="form__input" 
                value={ todoTitle }
                onChange={ handleTitle }
            />
          </div>
          <div className="form__content">
            <label htmlFor="project" className="form__label">Project</label>
            <input 
                type="text" 
                id="project" 
                name="project" 
                className="form__input"
                value={ todoProject }
                onChange={ handleProject }
            />
          </div>
          <div className="form__buttons">
            <button className="form__buttons--close">close X</button>
          </div>
        </form>
     );
}
 
export default UpdateTodo;