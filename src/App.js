import * as S from './App.styles';
import AppRoutes from './routes';
import { GlobalStyle } from './createGlobalStyle';
import { UserContext, UserDispatchContext, reducer } from './contex';
import { useReducer } from 'react';

function getInitialState() {
  const user = JSON.parse(localStorage.getItem('user'));
  return { user };
}

function App() {
  const [state, dispatch] = useReducer(reducer, getInitialState) 

return (
  <UserContext.Provider value={state}>
    <UserDispatchContext.Provider value={dispatch}>
      <S.App>
        <GlobalStyle/>
        <AppRoutes />
      </S.App>
    </UserDispatchContext.Provider>
  </UserContext.Provider>
);
}

export default App;
