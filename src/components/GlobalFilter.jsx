import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

  return (
    <span>
      Search:{' '}
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};

// If you get "Uncaught ReferenceError: regeneratorRuntime is not defined" error.

// 1 - npm i regenerator-runtime
// 2 - import "regenerator-runtime" at the top of  in App.jsx file
