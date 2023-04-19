import { useEffect, useReducer } from "react";
import { getProducts, getProductByCategory } from "../AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const initialState = {
  products: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const ItemListContainer = ({ greeting }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products =
          categoryId !== undefined
            ? await getProductByCategory(categoryId)
            : await getProducts();

        dispatch({ type: "SET_PRODUCTS", payload: products });
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error });
      }
    };

    fetchData();
  }, [categoryId]);

  const { products, loading, error } = state;

  return (
    <div>
      <h1>{greeting}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
