import * as S from './App.styles';
import AppRoutes from './routes';
import { GlobalStyle } from './createGlobalStyle';
import { UserContext, UserDispatchContext, reducer } from './contex';
import { useReducer } from 'react';

function App() {
    const userState = {
      userName: JSON.parse(localStorage.getItem('user')) || ''
    };
    const [state, dispatch] = useReducer(reducer, userState)    
 
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
