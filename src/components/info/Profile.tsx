import styled from 'styled-components';

import Stack from './Stack';
import Career from './Career';

function Profile() {
  return (
    <ProfileSection className="flex-all-center">
      <aside>
        <h1>김주비</h1>
        <Career />
      </aside>
      <aside>
        <Stack />
      </aside>
    </ProfileSection>
  );
}

export default Profile;

const ProfileSection = styled.article`
  z-index: 1;
  width: 80%;
  height: 100%;
  margin-right: 100px;
  opacity: 0;
  color: var(--main-text-color);

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
