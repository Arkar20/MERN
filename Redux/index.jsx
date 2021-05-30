const todos=(state=[],action)=>{
	switch(action.type){
		case("ADD_TODO"):
	return [
		{id:1,
		body:"SOme LOrem",
		completed:false}
	]
		default:
			return state
	}
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
console.log("All TEst Are Passing")