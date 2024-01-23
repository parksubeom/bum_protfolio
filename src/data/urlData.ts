import { FaGithub, FaPlay } from 'react-icons/fa';
import { CgFigma } from 'react-icons/cg';

type IconType = {
  component: React.ComponentType<{ color: string }>;
};

type ButtonData = {
  name: string;
  icon: IconType;
  url: string;
};

export const uncoverBtn: ButtonData[] = [
  {
    name: 'Web site',
    icon: { component: FaPlay },
    url: 'https://uncoversound.com/',
  },
  {
    name: 'Git Hub',
    icon: { component: FaGithub },
    url: 'https://github.com/codestates-seb/seb43_main_017',
  },
  {
    name: 'Figma',
    icon: { component: CgFigma },
    url: 'https://www.figma.com/file/UY6u7Tpq29rOTAjlee2jF3/G17-main-project?type=design&node-id=0-1&mode=design&t=txz9SCCjOBPSDNSX-0',
  },
];

export const ticatBtn: ButtonData[] = [
  {
    name: 'Web site',
    icon: { component: FaPlay },
    url: 'https://d99pqcn6hzkdg.cloudfront.net/',
  },
  {
    name: 'Git Hub',
    icon: { component: FaGithub },
    url: 'https://github.com/Butlers-Team/ticat-client',
  },
  {
    name: 'Figma',
    icon: { component: CgFigma },
    url: 'http://figma.com/file/3DMIKyoZRmpZbWdfos640M/TICAT-Figma---%EC%B6%95%EC%A0%9C%EC%95%88%EB%82%B4%EC%84%9C%EB%B9%84%EC%8A%A4?type=design&mode=design&t=aB8ZlNTKHgcE3M8m-0',
  },
];

export const anischoolBtn: ButtonData[] = [
  {
    name: 'Web site',
    icon: { component: FaPlay },
    url: 'https://d12v3b538m291m.cloudfront.net',
  },
  {
    name: 'Git Hub',
    icon: { component: FaGithub },
    url: 'https://github.com/parksubeom/Ani_School',
  },
];
