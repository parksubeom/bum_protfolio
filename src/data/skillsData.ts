import React from 'react';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { GiBearFace } from 'react-icons/gi';
import { TbBrandReact } from 'react-icons/tb';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiStyledcomponents, SiAxios, SiRecoil, SiEslint, SiPrettier } from 'react-icons/si'; // 사용하는 아이콘들을 모두 불러왔습니다.

type IconType = {
  component: React.ComponentType<{ color: string }>;
  color: string;
};

type SkillsData = {
  index: number;
  name: string;
  icon: IconType;
  contents: string;
  color: string;
  gauge: number;
};

export const skillsData: SkillsData[] = [
  {
    index: 1,
    name: 'Html',
    icon: { component: FaHtml5, color: '#f16528' },
    contents:
      '표준과 웹 접근성을 준수하며 태그의 의미와 사용성을 알고 문서의 구조를 고려해 시맨틱하게 마크업할 수 있습니다.',
    color: '#f16528',
    gauge: 100,
  },
  {
    index: 2,
    name: 'CSS',
    icon: { component: FaCss3Alt, color: '#0b74b8' },
    contents:
      'media query와 keyframe animation 을 이용해 반응형 디자인을 적용하고, 동적인 애니메이션 효과를 추가할 수 있습니다.',
    color: '#0b74b8',
    gauge: 80,
  },
  {
    index: 3,
    name: 'JavaScript',
    icon: { component: RiJavascriptFill, color: '#dab92c' },
    contents:
      'JavaScript를 사용하여 동적이고 인터랙티브한 웹 페이지를 구현할 수 있습니다. 프레임워크 및 라이브러리를 활용하여 코드의 효율성과 유지보수성을 고려한 웹 애플리케이션을 개발경험이 있습니다.',
    color: '#dab92c',
    gauge: 70,
  },
  {
    index: 4,
    name: 'React',
    icon: { component: TbBrandReact, color: '#61dafb' },
    contents: 'React를 사용하여 상태관리를 통해 재사용이 가능한 컴포넌트 기반의 웹 애플리케이션을 구축할 수 있습니다.',
    color: '#61dafb',
    gauge: 85,
  },
  {
    index: 5,
    name: 'TypeScript',
    icon: { component: BiLogoTypescript, color: '#3179c7' },
    contents:
      '변수, 함수, 객체 등에 대한 타입 주석을 명시적으로 작성하고, 타입 추론 기능을 활용하여 코드의 가독성을 향상시킬 수 있습니다. auto complete도 큰 장점으로 다가왔습니다. ',
    color: '#3179c7',
    gauge: 70,
  },
  {
    index: 6,
    name: 'styled-component',
    icon: { component: SiStyledcomponents, color: '#f8c22f' },
    contents:
      '컴포넌트 단위의 스타일 캡슐화를 통해 레이아웃 및 디자인을 쉽게 조작하고 유지보수성을 높였습니다. props를 통해 각 컴포넌트에 동적으로 스타일을 전달할 수 있습니다.',
    color: '#e89579',
    gauge: 80,
  },
  {
    index: 7,
    name: 'Recoil',
    icon: { component: SiRecoil, color: '#2a60df' },
    contents:
      'Recoil을 통해 전역상태를 효과적으로 관리할 수 있으며, useRecoilStateLoadable 훅을 이용하여 상태에 따른 UI를 렌더링할 수 있습니다.',
    color: '#2a60df',
    gauge: 80,
  },
  {
    index: 8,
    name: 'Zustand',
    icon: { component: GiBearFace, color: '#e69100' },
    contents: 'Zustand를 통해 전역상태를 효과적으로 관리할 수 있습니다. 프로젝트에 따라 recoil과 취사선택 가능합니다.',
    color: '#e69100',
    gauge: 60,
  },
  {
    index: 9,
    name: 'Axios',
    icon: { component: SiAxios, color: '#5a29e4' },
    contents: ' Axios를 활용하여 서버와의 HTTP 통신을 처리할 수 있으며, Restful API에 관심이 많습니다.',
    color: '#5a29e4',
    gauge: 80,
  },
  {
    index: 10,
    name: 'ESlint',
    icon: { component: SiEslint, color: '#4b32c3' },
    contents: ' ESLint를 통해 일관된 코드 컨벤션을 유지하려고 노력했습니다.',
    color: '#4b32c3',
    gauge: 60,
  },
  {
    index: 11,
    name: 'Prettier',
    icon: { component: SiPrettier, color: '#56b3b4' },
    contents:
      'Prettier의 설정을 통해 코드의 가독성을 향상시키고, 들여쓰기, 따옴표 사용 등과 같은 스타일 가이드를 자동으로 적용하여 코드의 일관성을 유지했습니다.',
    color: '#56b3b4',
    gauge: 60,
  },
];
