// authActions.js
export const login = (newToken) => {
    return {
      type: 'LOGIN',
      payload: newToken,
    };
  };
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  
  export const setUserAuthId = (id) => {
    return {
      type: 'SET_USER_AUTH_ID',
      payload: id,
    };
  };
  