/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [favoriteHotels, setFavoriteHotels] = useState([]);

  const values = {
    loggedInUser,
    favoriteHotels,
    setLoggedInUser,
    setFavoriteHotels,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };