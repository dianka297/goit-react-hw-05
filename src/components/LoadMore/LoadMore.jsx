import s from "./LoadMore.module.css";

function LoadMore({ onLoadMore }) {
  return (
    <div>
      <button onClick={onLoadMore} className={s.loadMore}>
        Load more
      </button>
    </div>
  );
}

export default LoadMore;