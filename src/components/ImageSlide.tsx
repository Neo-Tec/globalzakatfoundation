import Image from "next/image";

const ImageSlide = () => {
  const images = [
    "./slideitem1.jpeg",
    "./slideitem2.jpeg",
    "./slideitem3.jpeg",
  ];

  return (
    <div className="mt-16">
      <div className="flex justify-center overflow-x-auto space-x-4 pb-4 px-4 sm:px-0">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-40 sm:w-64 sm:h-60 bg-cover bg-center rounded-lg shadow-lg"
          >
            <img
              src={src}
              alt={`Slide image ${index + 1}`}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;
