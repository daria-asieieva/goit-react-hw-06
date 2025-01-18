import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      className={css.searchBox}
      type="text"
      placeholder="Find contacts by name"
      onChange={handleChange}
    />
  );
};

export default SearchBox;
