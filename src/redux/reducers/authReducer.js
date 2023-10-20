// authReducer.js
const initialState = {
    token: null,
    userId: null,
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          token: action.payload,
          isAuthenticated: true,
        };
  
      case 'LOGOUT':
        return {
          ...state,
          token: null,
          isAuthenticated: false,
        };
  
      case 'SET_USER_AUTH_ID':
        return {
          ...state,
          userId: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  