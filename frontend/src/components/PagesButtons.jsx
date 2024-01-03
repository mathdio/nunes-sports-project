import leftArrowIcon from '../assets/leftArrowIcon.svg';
import rightArrowIcon from '../assets/rightArrowIcon.svg';
import styles from '../styles/PageButtons.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function PagesButtons({ count, pageNumber, setSearchParams, setPageNumber }) {
  const [arrayPages, setArrayPages] = useState([]);

  useEffect(() => {
    const PRODUCTS_PER_PAGE = 5;
    const totalPages = Math.ceil(count / PRODUCTS_PER_PAGE);
    const pagesArray = Array(totalPages).fill(1).map((x, y) => x + y);
    setArrayPages(pagesArray);
  }, []);

  const handleClick = (page) => {
    setPageNumber(page);
    setSearchParams({ pageNumber: page });
  };

  const handleIncreasePage = (page) => {
    setPageNumber(page + 1);
    setSearchParams({ pageNumber: page + 1 });
  };

  const handleDecreasePage = (page) => {
    setPageNumber(page - 1);
    setSearchParams({ pageNumber: page - 1 });
  };

  return (
    <div className={ styles['buttons-container'] }>
      <button
        type="button"
        className={ `${styles['left-button']} ${styles.button}` }
        aria-label="Página anterior"
        onClick={ () => handleDecreasePage(pageNumber) }
        disabled={ pageNumber === 1 }
      >
        <img
          alt=""
          className={ `${styles['button-icon']} ${styles['left-icon']}` }
          src={ leftArrowIcon }
        />
      </button>
      {arrayPages.map((page) => (
        <button
          type="button"
          key={ page }
          disabled={ (page === pageNumber) }
          className={ styles['numbered-button'] }
          onClick={ () => handleClick(page) }
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className={ `${styles['right-button']} ${styles.button}` }
        aria-label="Página posterior"
        onClick={ () => handleIncreasePage(pageNumber) }
        disabled={ pageNumber === arrayPages[arrayPages.length - 1] }
      >
        <img
          alt=""
          className={ `${styles['button-icon']} ${styles['right-icon']}` }
          src={ rightArrowIcon }
        />
      </button>
    </div>
  );
}

PagesButtons.propTypes = {
  count: PropTypes.number,
}.isRequired;

export default PagesButtons;
