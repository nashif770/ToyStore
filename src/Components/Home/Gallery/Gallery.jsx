import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch(`https://40k-action-figures-server-nashif770.vercel.app/gallery`)
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 m-auto p-3 gap-3">
        {gallery.map((picture) => (
          <div key={picture._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-52 object-contain m-auto"
                src={picture.Picture}
                alt="Shoes"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
