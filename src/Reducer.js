const Reducer = (state,action)=>{
   switch (action) {
       case 'popupForm':           
        return {
            ...state,
            quickform: true
        } 
        case 'popupFormClose':           
        return {
            ...state,
            quickform: false
        }           
       default:
          return state
   }
}

export default Reducer;