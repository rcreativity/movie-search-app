import { SearchContainer, SearchForm, Input, Select } from './styled'

export default function Search({values: {search, type}, handleChange, submitForm}) {
  return (
    <SearchContainer>
      <SearchForm onSubmit={submitForm}>
        <Input type="text" name="search" value={search} onChange={handleChange} />
        <Select name="type" id="type" value={type} onChange={handleChange}>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </Select>
        <Input type="submit" value="search" />
      </SearchForm>
    </SearchContainer>
  )
}
