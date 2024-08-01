import PropTypes from "prop-types";

const BaseError = ({ error }) => {
  return (
    <>
      {error ? (
        <div className="text-[#9b1000] text-xs pt-1 flex gap-2 items-center text-[var(--error)]">
          {error}
        </div>
      ) : null}
    </>
  );
};

export default BaseError;

BaseError.propTypes = {
  error: PropTypes.string,
};
