const Reducer = (state,action)=>{
   switch (action) {
       case 'up':           
        return {
            ...state,
            value1: state.value1+10
        } 
        case 'up2':           
        return {
            ...state,
            value2: state.value2+10
        }           
       default:
          return state
   }
}

export default Reducer;