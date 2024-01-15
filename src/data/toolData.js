import { TbBrandVscode } from 'react-icons/tb';
import { CgFigma } from 'react-icons/cg';
import { SiNotion, SiPostman, SiAmazonaws, SiGithub, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';

export const toolData = [
  {
    index: 12,
    name: 'VScode',
    icon: <TbBrandVscode color="#007acc" />,
    contents:
      '포트폴리오 내에서 주요 통합 개발환경으로 활용했어요. VScode 에서 제공하는 다양한 extension들을 경험해보았어요.',
    color: '#007acc',
    gauge: 100,
  },
  {
    index: 13,
    name: 'Figma',
    icon: <CgFigma color="#0ace82" />,
    contents: 'Figma를 통해 팀원들과 함께 협동하여 다양한 웹/앱 와이어 프레임을 구현해보았어요.',
    color: '#0ace82',
    gauge: 90,
  },
  {
    index: 14,
    name: 'Notion',
    icon: <SiNotion color="#ccc" />,
    contents: '팀원들간의 소통을 원활하게 진행하기 위해 Notion 으로 프로젝트 문서를 제작해보았어요.',
    color: '#ccc',
    gauge: 100,
  },
  {
    index: 15,
    name: 'Postman',
    icon: <SiPostman color="#f34e1e" />,
    contents: '백엔드와의 협업을 위해 Postman을 통한 API 테스트를 진행하며, 빠르게 문제점을 개선해보았어요.',
    color: '#f34e1e',
    gauge: 80,
  },
  {
    index: 16,
    name: 'AWS',
    icon: <SiAmazonaws color="#ff9900" />,
    contents: 'AWS (Amazon Web Services) 을 통해 웹 애플리케이션을 배포하고 관리해보았어요.',
    color: '#ff9900',
    gauge: 60,
  },
  {
    index: 17,
    name: 'Git hub',
    icon: <SiGithub color="#ccc" />,
    contents:
      '기능 개발, 버그 수정, Hotfix 등의 작업을 효과적으로 관리하기 위해 Git Flow 전략을 적용하여 개발 사이클을 체계적으로 관리해보았어요.',
    color: '#ccc',
    gauge: 80,
  },
  {
    index: 18,
    name: 'Photoshop',
    icon: <SiAdobephotoshop color="#31a8ff" />,
    contents: ' Adobe Photoshop을 사용하여 디자인 및 이미지 편집 작업을 진행할 수 있어요.',
    color: '#31a8ff',
    gauge: 100,
  },
  {
    index: 19,
    name: 'Illustrator',
    icon: <SiAdobeillustrator color="#ff9a00" />,
    contents: 'Adobe Illustrator를 사용하여 디자인 및 간단한 벡터 작업을 진행할 수 있어요.',
    color: '#ff9a00',
    gauge: 60,
  },
];
