import styles from '../styles/PageButtons.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function PagesButtons({ count, pageNumber, setSearchParams, setPageNumber }) {
  const [arrayPages, setArrayPages] = useState([]);

  useEffect(() => {
    const PRODUCTS_PER_PAGE = 10;
    const totalPages = Math.ceil(count / PRODUCTS_PER_PAGE);
    const pagesArray = Array(totalPages).fill(1).map((x, y) => x + y);
    console.log(pagesArray);
    setArrayPages(pagesArray);
  }, []);

  const handleClick = (page) => {
    setPageNumber(page);
    setSearchParams({ pageNumber: page });
  };

  return (
    <div>
      <button>
        Anterior
      </button>
      {arrayPages.map((page) => (
        <button
          key={ page }
          disabled={ (page === pageNumber) }
          className={ styles['numbered-button'] }
          onClick={ () => handleClick(page) }
        >
          {page}
        </button>
      ))}
      <button>
        Próximo
      </button>
    </div>
  );
}

PagesButtons.propTypes = {
  count: PropTypes.number,
}.isRequired;

export default PagesButtons;
