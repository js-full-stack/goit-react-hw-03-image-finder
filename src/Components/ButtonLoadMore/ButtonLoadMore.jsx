import './ButtonLoadMore.scss';

const ButtonLoadMore = ({ loadMore }) => {
  return (
    <button className="ButtonLoadMore" onClick={loadMore}>
      Load more
    </button>
  );
};

export default ButtonLoadMore;
