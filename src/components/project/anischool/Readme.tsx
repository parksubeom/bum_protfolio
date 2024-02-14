// ProjectInfo.tsx
import React from 'react';
import styled from 'styled-components';

const Readme: React.FC = () => {
  return (
    <>
      <MainTitleSection>
        <MainTitle>프로필 이미지 생성 서비스 [애니스쿨]</MainTitle>
      </MainTitleSection>
      <Container>
        <Section>
          <Title>📌Summary</Title>
          <Content>
            <p>
              <strong>
                자신의 개성이 중요해진 요즘, 본인의 프로필을 업로드 해야 하지만 얼굴을 올리기 싫은 사람들을 위해 귀여운
                동물 이미지를 만들어주는 서비스입니다.
              </strong>
            </p>
            <p>
              다양한 이미지 레이어를 겹쳐서 하나의 이미지를 만들고, 각 파츠 이미지 레이어마다 레어한 확률을 설정하여
              뽑기의 재미를 더했습니다.
            </p>
            <p></p>
            <h2>❗주요 기능</h2>
            <li>랜덤한 캐릭터 이미지 생성</li>
            <li>파츠별 이미지 변경</li>
            <li>랜덤버튼 클릭 시, 일정확률로 레어요소 등장</li>
            <li>프로필이미지 png파일로 내려받기</li>
          </Content>
        </Section>
        <Section>
          <Title>🤔Background</Title>
          <Content>
            {' '}
            <p>부트캠프를 진행 할 당시 주로 디스코드를 통해 커뮤니케이션을 하고, 협업을 진행했었습니다.</p>
            <p>
              디스코드는 프로필사진을 업로드 가능했는데, 몇몇 동기들끼리 비슷한 프로필 아이콘을 설정해놓을 걸
              발견했습니다.
            </p>
            <p>
              이는 그들간의 친분을 나타낸다고 생각했고, 다르게 생각하면 이미 저들만의 무리가 형성됐다고 볼 수도
              있었습니다. 특히나 협업을 주로 하게 될 부트캠프에서 여러 무리로 나뉘다보면 소통의 기회가 적어질것이라는
              고민이 있었습니다.
            </p>
            <p>
              이러한 고민을 해결하기위해 같은 코스 동기들끼리 다같이 사용가능한 프로필이미지 생성기를 만들어서
              공유한다면, 무리로 나뉘는게아닌 같은 기수 동기끼리 소속감을 가지지 않을까라는 생각에 개발을 마음먹게
              되었습니다.
            </p>
          </Content>
        </Section>
        <Section>
          <Title>🔨Technology Stack</Title>
          <Content>
            {' '}
            <li>개발환경 : React / JavaScript</li>
            <li>상태관리 : Recoil</li>
            <li>스타일 : 외부 스타일시트</li>
            <li>배포 : AWS S3 / AWS CloudFront</li>
            <li>데이터 패칭 및 캐싱 : X </li>
          </Content>
        </Section>
        <Section>
          <Title>🔍What I learned</Title>
          <Content>
            <h2>랜덤 이미지 생성</h2>
            <li>
              랜덤버튼 클릭 시, (Math.random() * 해당파츠의 종류 갯수) 의 결과값을 상태에 저장하고, 해당 상태를 이미지를
              보여주는 컴포넌트에 props로 넘겨줍니다. 랜덤버튼 컴포넌트에서 해당 상태를 전달받으면 해당 파츠의 이미지를
              폴더에서 상태와 같은 숫자의 이미지를 불러오는 식으로 구현했습니다.
            </li>
            <li>
              리액트를 입문하고 처음 만들어 본 프로젝트인 만큼, 리액트의 데이터 흐름과 상태관리의 중요성 나아가
              전역상태관리가 필요하다고 느꼈고, 리코일을 통해 전역에서 상태를 관리하는식으로 리팩토링 했습니다.
            </li>
            <h2>완성된 이미지 png로 내보내기</h2>
            <li>
              dom-to-image 라는 이미지 캡처 라이브러리와 캡처한 파일을 디바이스에 저장해주는 file-server라는
              라이브러리를 사용했습니다.
            </li>
            <li>
              이 과정에서 DOM 을 조작해야 할 일이 생겼는데, querySelector를 통해 돔을 조작하는것 보다 useRef를
              사용하는게 리액트의 선언형 프로그래밍에 더 부합한다는 걸 배웠고, 가급적 DOM 조작은 지양해야한다는 걸
              알게됐습니다.
            </li>
            <h2>라이트하우스 최적화</h2>
            <li>
              프로젝트를 마무리하고 라이트 하우스를 통해 성능을 체크 했을 땐, SEO 를 제외한 모든 부분의 성능이 기대보다
              낮았습니다.
            </li>
            <li>
              이를 최적화 하기 위해 크게 두가지의 개선방안을 생각했습니다. 첫번째로 코드에서의 최적화, 두번째로 리소스의
              최적화 이렇게 두가지를 생각했습니다.
            </li>
            <li>
              코드에서의 최적화는 이미지나 버튼에 aria-label와 alt 속성을 통해 웹 접근성을 높이고, Lazy Loding 을 통한
              이미지 페인팅 최적화를 시도했습니다.
            </li>
            <li>
              리소스 최적화로는 png파일이던 그림소스들을 webp로 변환하여 용량을 압축했고, 트리셰이킹을 통해 미사용
              모듈들을 제거함으로써 퍼포먼스를 증가시켰습니다.
            </li>
            <li>
              빠른 페이지 로딩, 접근성 등이 사용자 만족도를 얼마나 개선시키고 나아가 검색 엔진 최적화에도 긍정적인
              영향을 끼친다는 걸 느꼈습니다.
            </li>
          </Content>
        </Section>
      </Container>
    </>
  );
};

export default Readme;

// 스타일드 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 20px;
  overflow-y: auto; /* 스크롤이 필요한 경우 추가 */
`;
const MainTitleSection = styled.section`
  background-color: black;
  width: 100%;
  padding: 5px 0px;
  display: flex;
  align-items: center;
`;

const Section = styled.section`
  margin: 15px;
`;

const MainTitle = styled.h1`
  font-size: 24px;
  color: #faf8f8;
  margin: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #faf8f8;
  margin: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const Content = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #fffafa;
  margin: 10px;
  > h2 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
  }
  > p {
    margin-bottom: 15px;
  }
  > li {
    margin-bottom: 10px;
  }
`;
