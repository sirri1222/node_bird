import { PlusOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import PropsTypes from "prop-types";

const PostImages = ({ images }) => {
  
  const [showImageZoom, setShowImageZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImageZoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImageZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        ></img>
        {showImageZoom && <ImageZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        ></img>
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        ></img>
      </>
    );
  }
  return (
    <div>
      <img
        role="presentation"
        style={{ width: "50%", textAlign: "center", verticalAlign: "middle" }}
        src={images[0].src}
        alt={images[0].src}
        onClick={onZoom}
      ></img>
      <PlusOutlined />
      {images.length - 1}개의 사진 더보기
    </div>
  );
};
PostImages.PropsTypes = {
  images: PropsTypes.arrayOf(
    PropsTypes.shape({
      src: PropsTypes.string,
    })
  ).isRequired,
};
export default PostImages;
