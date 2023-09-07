import * as S from './App.styles';
import AppRoutes from './routes';
import { GlobalStyle } from './createGlobalStyle';

function App() {

  return (
    <S.App>
        <GlobalStyle/>
          <AppRoutes />
    </S.App>
  );
}

export default App;
