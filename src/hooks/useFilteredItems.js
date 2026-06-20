import { useState } from 'react';

export const useFilteredItems = ({ items, initialFilter, allFilter, getFilterValue }) => {
  const [filter, setFilter] = useState(initialFilter);
  const filteredItems = filter === allFilter
    ? items
    : items.filter((item) => getFilterValue(item) === filter);

  return { filter, setFilter, filteredItems };
};

