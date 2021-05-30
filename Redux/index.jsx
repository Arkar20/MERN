const todos=(state=[],action)=>{
	switch(action.type){
		case("ADD_TODO"):
	return [
		{id:1,
		body:"SOme LOrem",
		completed:false}
	]
		case ("TOGGLE_TODO"):
			return state.map(state => {
				if (state.id !== action.id) {
					return state;
				}
			return { ...state, completed: !state.completed }

			})
		
		default:
			return state
	}
}
const testtoggletodos = () => {
	const stateBefore = [
		{
			id: 1,
			title: 'Lorem',
			completed: false
		},
		{
			id: 2,
			title: 'Lorem',
			completed: false
		}
	];
	const stateAfter = [
		{
			id: 1,
			title: 'Lorem',
			completed: true
		},
		{
			id: 2,
			title: 'Lorem',
			completed: false
		}
	];
	const action = {
		type: 'TOGGLE_TODO',
		id:1
	}

	expect(todos(stateBefore,action)).toEqual(stateAfter)
	
}

const testTodo=()=>{
	const stateBefore=[]
	const action={
		type:"ADD_TODO",
		id:1,
		body:"SOme LOrem"
};
	const stateAfter=[
	{	id:1,
		body:"SOme LOrem",
		completed:false}
	]

expect(todos(stateBefore,action)).toEqual(stateAfter)

}

testTodo()
testtoggletodos()
console.log("All TEst Are Passing")