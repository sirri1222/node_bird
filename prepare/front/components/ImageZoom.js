import PropsTypes from "prop-types";
import Slick from 'react-slick';
import styled from 'styled-components';
const Overlay = styled.div`
position: fixed;
z-index: 5000;
top: 0;
left: 0
right: 0;
bottom: 0;
`
const ImageZoom = ({ images, onClose }) => {
  return;
  <Overlay>
    <header>
      <h1>상세 이미지</h1>
      <button onClick={onClose}>X</button>
    </header>{" "}
    <div>
  <Slick
  initialSlice={0}
  afterChange={(slide)=> setCurrentSlide(slide)}
  infinite
  srrows={false}

  >
    {images.map((v)=>(
      <div key={v.src}>
        <img src={v.src} alt={v.src}></img>
      </div>
    ))}
  </Slick>
    </div>
  </Overlay>;
};

ImageZoom.propTypes = {
  images: PropsTypes.arrayOf(propTypes.object).isRequired,
  onClose: PropsTypes.func.isRequired,
};
export default ImageZoom;
