import styled from 'styled-components';
import Slider from 'react-slick';

type SliderShowProps = {
  images: string[];
};
const SliderShow: React.FC<SliderShowProps> = ({ images }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 500,
  };

  return (
    <SliderSection>
      <div>
        <Slider {...settings}>
          {images?.map((image, index) => (
            <div key={index} className="image-box">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </SliderSection>
  );
};

export default SliderShow;

const SliderSection = styled.div`
  width: 80%;
  height: 100%;
  animation: showUp 1s forwards;

  .slick-prev,
  .slick-next {
    display: none !important;
  }

  .image-box {
    background-color: #333;
    height: 300px;
    transform: rotate(90deg);
    transform: scale(0.8);
    border-radius: 30px;
    overflow: hidden;
    transition: 0.3s all ease-in-out;

    > img {
      height: 100%;
      object-fit: cover;
      position: absolute; /* 이미지 위치 조정을 위해 절대 위치로 변경 */
      left: 50%; /* 이미지를 영역 너비의 50% 만큼 오른쪽으로 이동 */
      transform: translateX(-50%);
    }
  }
  .image-box:hover {
    transform: scale(0.9);
  }

  @keyframes showUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
