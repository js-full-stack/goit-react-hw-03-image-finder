import './ButtonLoadMore.scss';
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ loadMore }) => {
  return (
    <div className="WrapperButtonLoadMore">
      <button className="ButtonLoadMore" onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

ButtonLoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default ButtonLoadMore;
