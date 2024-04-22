import './App.css'
function Todo() {
  return (
    <>
      <div>
        <form>
          <input type="text" name="Type a new todo" />
        </form>
        <button>Add a new todo</button>
        <hr />
      </div>
      <div>
        <h2>Todos</h2>
      {/* Label avec la checkbox */}
      <label>
        <input type="checkbox" />
        Learn React
      </label>
      <label>
        <input type="checkbox" />
        Be Awesome
      </label>
    </div>
    </>
  );
}
export default Todo