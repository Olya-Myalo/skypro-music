import * as S from './App.styles';
import AppRoutes from './routes';
import { GlobalStyle } from './createGlobalStyle';
import { useEffect, useState } from 'react';
import { getTodos } from './api';

function App( {user} ) {
  const [todos, setTodos] = useState([null])
  useEffect(() => {
    getTodos().then((todos) => 
    setTodos(todos.todos));
  }, []);
  return (
    <S.App>
        <GlobalStyle/>
          <AppRoutes todos={todos} setTodos={setTodos} user={user} />
    </S.App>
  );
}

export default App;
