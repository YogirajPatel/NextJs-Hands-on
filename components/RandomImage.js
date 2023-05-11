import { useEffect, useState } from "react";

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState("https://picsum.photos/800/600");

  useEffect(() => {
    fetch(`${imageUrl}?${Date.now()}`)
      .then((res) => setImageUrl(res.url))
      .catch((err) => {
        console.error(err);
        setImageUrl(
          "https://via.placeholder.com/800x600.png?text=Error+loading+image"
        );
      });
  }, []);

  return (
    <>
      <img src={imageUrl} alt="Error" className="random-image rounded-md" />
    </>
  );
};

export default RandomImage;
