import React from "react";
import VisuallyHidden from "./VisuallyHidden";

const PhotoIndex = ({ photos }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = React.useState(0);
  return (
    <div>
      <img className='primary-photo' alt='' src={photos[selectedPhotoIndex]} />
      <div className='buttons'>
        {photos.map((photoSrc, index) => {
          const isSelected = selectedPhotoIndex === index;

          return (
            <button
              key={index}
              className='thumbnail-button'
              onClick={() => setSelectedPhotoIndex(index)}
            >
              <VisuallyHidden>Toggle image #{index + 1}</VisuallyHidden>
              <img alt='' src={photoSrc} />
              <span
                className='selected-ring'
                style={{
                  opacity: isSelected ? 1 : 0,
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default PhotoIndex;
