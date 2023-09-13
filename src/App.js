import * as S from './App.styles';
import AppRoutes from './routes';
import { GlobalStyle } from './createGlobalStyle';

function App( {user} ) {
  return (
    <S.App>
        <GlobalStyle/>
          <AppRoutes user={user} />
    </S.App>
  );
}

export default App;
