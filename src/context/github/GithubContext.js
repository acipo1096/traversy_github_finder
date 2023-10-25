import { createContext, useReducer } from "react";
// Because we are now using reducers, we no longer need useState
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state, // spreads across the state values. Replaces -

        /*
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        */

        dispatch,
      }}
      // Now we can access these values from ANYWHERE we want
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;