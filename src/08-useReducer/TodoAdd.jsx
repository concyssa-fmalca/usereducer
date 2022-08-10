export const TodoAdd = () => {
  return (
    <form>
        <input
            type="text"
            placeholder="¿Qué hay que hacer?"
            className="form-control"
            />
        <button 
            type="submit"
            className="btn btn-outline-primary mt-1"
            onClick = {onNewTodo}
            >
            Agregar tarea
        </button> 
    </form>
  )
}
