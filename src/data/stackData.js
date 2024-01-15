import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { GiBearFace } from 'react-icons/gi';
import { TbBrandReact } from 'react-icons/tb';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiStyledcomponents, SiAxios, SiRecoil, SiEslint, SiPrettier } from 'react-icons/si';

export const stackData = [
  {
    index: 1,
    name: 'Html',
    icon: <FaHtml5 color="#f16528" />,
    contents:
      '표준과 웹 접근성을 준수하며 태그의 의미와 사용성을 알고 문서의 구조를 고려해 시맨틱하게 마크업할 수 있어요.',
    color: '#f16528',
    gauge: 100,
  },
  {
    index: 2,
    name: 'CSS',
    icon: <FaCss3Alt color="#0b74b8" />,
    contents:
      '심화된 css 속성 및 응용법들을 찾아보거나 적용하는것을 좋아해요. media query와 keyframe animation 을 이용해 반응형 디자인을 적용하고, 동적인 애니메이션 효과를 추가할 수 있어요. ',
    color: '#0b74b8',
    gauge: 100,
  },
  {
    index: 3,
    name: 'JavaScript',
    icon: <RiJavascriptFill color="#dab92c" />,
    contents:
      'JavaScript를 사용하여 동적이고 인터랙티브한 웹 페이지를 구현할 수 있어요. 프레임워크 및 라이브러리를 활용하여 코드의 효율성과 유지보수성을 고려한 웹 애플리케이션을 개발해요.',
    color: '#dab92c',
    gauge: 80,
  },
  {
    index: 4,
    name: 'React',
    icon: <TbBrandReact color="#61dafb" />,
    contents: 'React를 사용하여 상태관리를 통해 재사용이 가능한 컴포넌트 기반의 웹 애플리케이션을 구축할 수 있어요.',
    color: '#61dafb',
    gauge: 90,
  },
  {
    index: 5,
    name: 'TypeScript',
    icon: <BiLogoTypescript color="#3179c7" />,
    contents:
      '리액트에 타입스크립트를 적용하여 안정성 있는 코드를 작성했보았어요.코드의 가독성과 유지보수성을 강화하여 안정적인 웹 애플리케이션을 구현했어요.',
    color: '#3179c7',
    gauge: 70,
  },
  {
    index: 6,
    name: 'styled-component',
    icon: <SiStyledcomponents color="#f8c22f" />,
    contents:
      '컴포넌트 단위의 스타일 캡슐화를 통해 레이아웃 및 디자인을 쉽게 조작하고 유지보수성을 높였어요. props를 통해 각 컴포넌트에 동적으로 스타일을 전달할 수 있어요.',
    color: '#e89579',
    gauge: 100,
  },
  {
    index: 7,
    name: 'Recoil',
    icon: <SiRecoil color="#2a60df" />,
    contents: 'Recoil을 통해 전역상태를 효과적으로 관리할 수 있어요.',
    color: '#2a60df',
    gauge: 80,
  },
  {
    index: 8,
    name: 'Zustand',
    icon: <GiBearFace color="#e69100" />,
    contents: 'Zustand를 통해 전역상태를 효과적으로 관리할 수 있어요.',
    color: '#e69100',
    gauge: 60,
  },
  {
    index: 9,
    name: 'Axios',
    icon: <SiAxios color="#5a29e4" />,
    contents:
      ' Axios를 활용하여 서버와의 HTTP 통신을 처리할 수 있어요. Axios의 설정과 에러 핸들링을 통해 안정적이고 효율적인 네트워크 요청이 가능해요.',
    color: '#5a29e4',
    gauge: 80,
  },
  {
    index: 10,
    name: 'ESlint',
    icon: <SiEslint color="#4b32c3" />,
    contents: ' ESLint를 통해 일관된 코딩 스타일을 유지하며 효율적인 개발 환경을 조성할 수 있어요.',
    color: '#4b32c3',
    gauge: 60,
  },
  {
    index: 11,
    name: 'Prettier',
    icon: <SiPrettier color="#56b3b4" />,
    contents:
      'Prettier의 설정을 통해 코드의 가독성을 향상시키고, 들여쓰기, 따옴표 사용 등과 같은 스타일 가이드를 자동으로 적용하여 코드의 일관성을 유지해보았어요.',
    color: '#56b3b4',
    gauge: 60,
  },
];
