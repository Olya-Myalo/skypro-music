import * as S from './Search.styles';

const InputSearch = () => {
  return (
    <S.CenterblockSearch>
        <S.SearchSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
    <S.SearchText type="search" placeholder="Поиск" name="search"/>
  </S.CenterblockSearch>
  );
}

export default InputSearch;