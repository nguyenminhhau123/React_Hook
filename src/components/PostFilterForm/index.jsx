import { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFilterForm.propTypes = {
  onsubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
  onsubmit: null,
};

function PostFilterForm(props) {
  let [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);
  const { onsubmit } = props;
  let handleOnChange = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
    if (!onsubmit) return;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      let valueSearchTerm = { searchTerm: value };
      onsubmit(valueSearchTerm);
    }, 300);
  };
  return (
    <form>
      <input value={searchTerm} onChange={handleOnChange} type="text" />
    </form>
  );
}

export default PostFilterForm;
