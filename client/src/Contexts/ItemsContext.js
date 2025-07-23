import { createContext, useEffect, useState } from "react";
import { config } from "../Constants";

export const ItemsContext = createContext(null);

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL = config.url;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.filter((item) => item.inStock));
        setIsLoading(false);
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, [URL]);

  return (
    <ItemsContext.Provider value={{ items, isLoading }}>
      {children}
    </ItemsContext.Provider>
  );
};
