import styled from 'styled-components';

function ShootingStar() {
  return (
    <TopContainer>
      <div className="shooting-stars">
        <div className="shooting-star"></div>
        <div className="shooting-star shooting-star--mid"></div>
        <div className="shooting-star shooting-star--fast"></div>
        <div className="shooting-star shooting-star--meh"></div>
        <div className="shooting-star shooting-star--meh2"></div>
        <div className="shooting-star shooting-star--meh3"></div>
        <div className="shooting-star shooting-star--meh4"></div>
        <div className="shooting-star shooting-star--meh5"></div>
        <div className="shooting-star shooting-star--meh6"></div>
        <div className="shooting-star shooting-star--meh7"></div>
      </div>
    </TopContainer>
  );
}

const TopContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
export default ShootingStar;
