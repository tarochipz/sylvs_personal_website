import React from "react";
import Gallery from "../../sharedComponents/gallery.jsx";

export default function Photography() {
  const [images, setImages] = React.useState([]);

  const extractGooglePhotos = (content) => {
    const regex =
      /\["(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9\-_]*)"/g;
    const links = new Set();
    let match;
    while ((match = regex.exec(content))) {
      links.add(match[1]);
    }
    return Array.from(links);
  };

  const fetchImages = async () => {
    const response = await fetch(
      "https://photos.app.goo.gl/F6bbDLhLAabdR2ha9",
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    debugger;

    const content = response.json();
    extractGooglePhotos(content);
  };

  React.useEffect(() => {
    fetchImages().then((images) => {
      setImages(images);
    });
  }, []);

  return <Gallery itemData={images} />;
}
