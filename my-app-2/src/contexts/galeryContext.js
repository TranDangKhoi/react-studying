import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1661497118888-98ab158b66d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isLiked: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1661598224377-a6d78346d06c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isLiked: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1657214059189-6bace4ad1ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    isLiked: true,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1661592999164-00b78d12220a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isLiked: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1661559858105-57d19d3f4f57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isLiked: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1661347332466-9b6897c93a2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isLiked: true,
  },
];

const GalleryContext = createContext();
function GalleryProvider(props) {
  const [gallery, setGallery] = useState([fakeData]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const value = {
    gallery,
    cartItems,
    favoriteList,
    setGallery,
    setCartItems,
    setFavoriteList,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext();
  if (typeof context === "undefined") {
    throw new Error("useGallery must be used inside GalleryProvider");
  }
  return context;
}

export { useGallery, GalleryProvider };
