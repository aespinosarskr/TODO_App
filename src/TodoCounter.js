import './TodoCounter.css';
function TodoCounter({total, completed}){
    return(
        <h1 className="TodoCounter" >Haz completado <span>{completed}</span> de <span>{total}</span> TODOS</h1>
    );
  }

  export {TodoCounter};