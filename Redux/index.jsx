/*
 * Open the console
 * to see the state log.
 */

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
  

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const { combineReducers } = Redux;
const todoApp = combineReducers({
	todos: todos,
	visibilityFilter:visibilityFilter
})

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(
//       state.todos,
//       action
//     ),
//     visibilityFilter: visibilityFilter(
//       state.visibilityFilter,
//       action
//     )
//   };
// };

const { createStore } = Redux;
const store = createStore(todoApp);

const { Component } = React
let globalid=0
class TodoApp extends Component {
  render() {

    const filteredItems=FilterItems(this.props.todos,this.props.visibilityFilter)
    // console.log(this.props.todos)
    return (
      <div>
        <input ref={node =>this.input=node }/>
        <button onClick={() =>{
          store.dispatch({
            type: "ADD_TODO",
            id: globalid++, text: this.input.value, completed: false
          })
          this.input.value=''
        }}> Add To Do</button>
        <Filterlinks filter="SELECT_ALL" >
          All
        </Filterlinks>
        <Filterlinks filter="SHOW_COMPLETED" >
          Show COMPLETED
        </Filterlinks>
        <Filterlinks filter="SHOW_ONGOING" >
         Show Done
        </Filterlinks>
      
      
      </div>
    )
  }
}
const FilterItems = (todos, filter) => {
  
  switch (filter) {
    case ("SELECT_ALL"):
       todos;
    case ("SHOW_COMPLETED"):
      todos.filter(t => {
        t.completed==true
      })
    case ("SHOW_ONGOING"):
         todos.filter(t => {
            t.completed==false
         })
      
  }
  console.log(todos)
  return todos
  
}


const Filterlinks = ({filter,children}) => {
  return (

       <a href="#" onClick={(e) => {
          e.preventDefault();
          store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
          })
      }}>{children}</a>
      
   
   
  );
}
const render=() => {
  ReactDOM.render(
    <TodoApp
      {...store.getState()} />,
    document.getElementById('root')
  )
}

store.subscribe(render);
render()

console.log('Initial state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.')
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'Go shopping'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching TOGGLE_TODO.');
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(string);
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}
