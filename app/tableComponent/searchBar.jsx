import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import { useAsyncDebounce } from 'react-table';

export default function SearchBar({ filterTerm, setFilterTerm }) {
  const [value, setValue] = useState(filterTerm);

  const onChange = useAsyncDebounce((value) => {
    setFilterTerm(value || undefined);
  }, 1000);

  return (
    <Box display="flex" alignItems="center" marginTop="2vh">
      <span>Search as Global Filter: {' '}</span>
      <TextField
        value={value || ''}
        placeholder="Filter keyword"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        variant="outlined"
        size="small"
        style={{ marginLeft: '8px' }}
      />
    </Box>
  );
}
