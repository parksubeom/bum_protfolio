import styled from 'styled-components';

import Stack from './stack/Stack';
import Career from './Career';
import Introduction from './Introdution';

const Profile: React.FC = () => {
  return (
    <ProfileSection className="flex-all-center">
      <aside>
        <h1>박수범</h1>
        <Career />
      </aside>
      <aside>
        <Stack />
      </aside>
      <aside>
        <Introduction />
      </aside>
    </ProfileSection>
  );
};

export default Profile;

const ProfileSection = styled.article`
  display: flex;
  z-index: 1;
  width: 80%;
  height: 100vh;
  margin-right: 100px;
  opacity: 0;
  color: var(--main-text-color);

  @media (max-width: 1440px) {
    /* 1024px 이하일 때의 스타일 */
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 50px;
  }

  animation: showup 1s 0s forwards;
  @keyframes showup {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  aside {
    height: 70%;
    width: 100%;
    padding: 0px 40px;
  }

  > aside:nth-child(1) {
    min-width: 400px;
    border-right: 1px solid rgba(255, 255, 255, 0.05);
  }

  h1 {
    font-size: 50px;
    font-family: '촵';
    background: linear-gradient(to right bottom, var(--main-color), var(--sub-color) 50%);
    color: transparent;
    -webkit-background-clip: text;
  }
`;
