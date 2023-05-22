import React, {useRef} from 'react';
import { Pagination } from '@mantine/core';
import Item from '../Content/Item';

function Favorite() {
  const pageSize = useRef(4);

  const [favorites, setFavorites] = React.useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const getCurrentPageFavorites = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return favorites.slice(startIndex, endIndex);
  };

  const addToFavorites = (vacancy) => {
    setFavorites((prevFavorites) => [...prevFavorites, vacancy]);
  };

  const removeFromFavorites = (vacancy) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== vacancy.id)
    );
  };

  if (!favorites.length) {
    return <p>Нет сохраненных вакансий.</p>;
  }

  return (
    <div>
      {getCurrentPageFavorites().map((vacancy) => (
        <Item
          key={vacancy.id}
          vacancyItem={vacancy}
          isFavorite={true}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      ))}
      <Pagination
        total={Math.ceil(favorites.length / pageSize)}
        value={currentPage}
        onChange={setCurrentPage}
        position="center"
      />
    </div>
  );
}

export default Favorite;
