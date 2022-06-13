import React from 'react';

import * as S from './styled';

type SearchType = {
  id?: string;
  name?: string;
  search: (e: string) => void;
};

const SearchInput = ({ id, name, search }: SearchType) => {
  const [term, setTerm] = React.useState('');

  return (
    <S.Form name="form-search" onSubmit={() => search(term)}>
      <S.InputSearch
        value={term}
        onChange={(ev) => setTerm(ev.target.value)}
        type="search"
        data-testid="search-component"
        id={id || 'search'}
        name={name || 'search'}
      />
    </S.Form>
  );
};

export default SearchInput;

