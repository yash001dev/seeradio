export const initialState ={
    step:0
};

export function StepperReducer(state,action){
    switch(action.type){
        case 'increment':
            return {step:state.step+1};
        case 'decrement':
            return{step:state.step-1};
        default:
            throw new Error();
    }
}

// export default StepperReducer;