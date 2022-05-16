import React from "react";
import Gallery from "../../sharedComponents/gallery.jsx";
import { data } from "./imageData.jsx";

export default function Photography() {
  const [images, setImages] = React.useState([]);

  const fetchImages = async () => {
    const response = await fetch("https://photos.app.goo.gl/F6bbDLhLAabdR2ha9");
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    debugger;
    const images = await response.json();
    return images;
  };

  React.useEffect(() => {
    fetchImages().then((images) => {
      setImages(images);
    });
  }, []);

  return <Gallery itemData={images} />;
}

// const baseURL = "https://photos.app.goo.gl/";

const itemData = [
  // {
  //   img: `${baseURL}/Ypafg6PH2iq8t6d27`,
  //   title: "",
  // },
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
