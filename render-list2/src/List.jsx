import PropTypes from "prop-types";

function List(props) {
// getting array values from App.jsx
  const category = props.category;
  const itemList = props.items;

  // How to display
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));

  // Display values 
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-item">{listItems}</ol>
    </>
  );
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number,
                                            })),
}

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List;
