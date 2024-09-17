import PropTypes from "prop-types";

const Pagination = ({ count, changeOffset, offset, limit, setParams }) => {
  let endingItemNumber = offset + limit > count ? count : offset + limit;
  return (
    <div className="flex justify-between">
      <button
        onClick={() => changeOffset(offset - limit)}
        disabled={offset === 0}
      >
        Prev
      </button>
      <div className="flex items-center gap-2">
        <p>Showing</p>
        <select
          value={limit}
          onChange={(e) => {
            setParams((prev) => {
              return {
                ...prev,
                limit: Number(e.target.value),
              };
            });
          }}
          className="ml-4 p-2 border"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <p>of {count} entries</p>
      </div>

      <button
        onClick={() => changeOffset(offset + limit)}
        disabled={endingItemNumber === count}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  changeOffset: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  setParams: PropTypes.func.isRequired,
};
