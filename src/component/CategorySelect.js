const CategorySelect = (props) => {
  const { onChange, value } = props;
  return (
    <div className={"select_option_wrap"}>
      <label>Select Story Category</label>
      <select onChange={onChange} value={value}>
        <option value={"top"}>Top</option>
        <option value={"new"}>New</option>
        <option value={"best"}>Best</option>
      </select>
    </div>
  );
};

export default CategorySelect;
