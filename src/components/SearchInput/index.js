import { useState } from 'react';
import { Input, Search, Icon } from './styles';
import { CiSearch } from 'react-icons/ci';
import { CgSearchLoading } from "react-icons/cg";

export const SearchInput = ({ fn, setValue, value }) => {
  const [isLoading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    await fn(value);
    setLoading(false);
  };

  return (
    <Search>
      {isLoading ? (
        <CgSearchLoading size={26} />
      ) : (
        <>
          <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') handleSearch();
            }}
            placeholder="Digite a localidade"
            type="text"
          />
          <Icon onClick={handleSearch}>
              <CiSearch size={26} />
          </Icon>
        </>
       )}
    </Search>
  );
};
