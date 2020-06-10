const initialState = null;
   
   export const authReducer = (state = initialState, action) => {
     switch (action.type) {
      case "GET_USER":
        console.log(action.payload)
        return action.payload.data;
         //default
       default:
         return state;
     }
   }