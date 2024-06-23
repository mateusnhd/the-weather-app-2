import { Input, Search, Icon } from './styles';
import { CiSearch } from 'react-icons/ci';

export const SearchInput = ({ fn, setValue, value }) => {
  const handleSearch = async () => {
    await fn(value);
  };

  return (
    <Search>
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
    </Search>
  );
};
