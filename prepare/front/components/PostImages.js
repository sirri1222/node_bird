import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const PostImages = ({ images }) => {
  const [showImageZoom, setShowImageZoom] = useState(false);
  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        ></img>
        {showImageZoom && <ImageZoom images={images} />}
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
export default PostImages;
