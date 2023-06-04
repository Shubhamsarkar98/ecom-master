import { createContext, useContext, useEffect, useState } from "react";
import api from "../apiServices/api";
import { useUser } from "./UserContext";
const cartContext = createContext();

export const CartContext = ({ children }) => {

  const [cart, setCart] = useState(null);
  const { apiToken, setApiToken, user } = useUser();

  let [categories, setCategories] = useState(null);
  const getCategories = async () => {
    let categoryData = await api.get("/categories");
    setCategories(categoryData.data.output);
  };

  const [brands, setBrands] = useState([]);
  const retriveBrand = async () => {
    try {
      const response = await api.get("/brands");
      setBrands(response.data.output);
    } catch (error) {
      console.error(error);
    }
  };
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await api.post(`/products`);
    console.log(res.data);
    setProducts(res.data.output.data);
    console.log(products);
  };
  useEffect(() => {
    getProducts();
    retriveBrand();
    if (apiToken !== "") getCartDetails(apiToken);
  }, []);
  useEffect(() => {
    if (apiToken !== "") getCartDetails(apiToken);
  }, [cart?.length]);

  const getCartDetails = async (t) => {
    if(t!==null)
    try {
      setApiToken(t);
      const res = await api.get(`/cart`, {
        headers: { Authorization: `Bearer ${t}` },
      });
      if (res.data) setCart(res.data.output);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async (request) => {
    console.log(request);
    try {
      const resp = await api.post(`/cart`, request, {
        headers: { Authorization: `Bearer ${apiToken}` },
      });
      if (resp.data)
        var res = await api.get(`/cart`, {
          headers: { Authorization: `Bearer ${apiToken}` },
        });
      if (res.data) setCart(res.data.output);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItem = async (id) => {
    var resp = await api.delete(`/cart/${id}`, {
      headers: { Authorization: `Bearer ${apiToken}` },
    });
    if (resp.data)
      var res = await api.get(`/cart`, {
        headers: { Authorization: `Bearer ${apiToken}` },
      });
    if (res.data) setCart(res.data.output);
  };

  const value = {
    cart,
    setCart,
    getCartDetails,
    addToCart,
    deleteItem,
    categories,
    setCategories,
    getCategories,
    products,
    setProducts,
    getProducts,
    retriveBrand,
    brands,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
export const useCart = () => {
  return useContext(cartContext);
};
