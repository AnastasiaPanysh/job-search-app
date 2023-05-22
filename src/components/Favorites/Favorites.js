import React from 'react';
import { Pagination } from '@mantine/core';
import Item from '../Content/Item';
import storage from '../../storage/storage.json';

function Favorite({ favorites, removeFromFavorites }) {
  const pageSize = 4;
  const totalPages = Math.ceil(favorites.length / pageSize);
  const [currentPage, setCurrentPage] = React.useState(1);

  const getCurrentPageFavorites = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return favorites.slice(startIndex, endIndex);
  };

  const handleRemoveFromFavorites = (vacancy) => {
    removeFromFavorites(vacancy);
  };

  if (!favorites ) {
    return <p>Нет сохраненных вакансий.</p>;
  }

  return (
    <div>
      {getCurrentPageFavorites().map((vacancy) => (
        <Item
          key={vacancy.id}
          vacancyItem={vacancy}
          isFavorite={true}
          addToFavorites={() => {}}
          removeFromFavorites={handleRemoveFromFavorites}
        />
      ))}
      <Pagination
        total={totalPages}
        value={currentPage}
        onChange={setCurrentPage}
        position="center"
      />
    </div>
  );
}

export default Favorite;
