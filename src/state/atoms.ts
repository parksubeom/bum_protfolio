import { atom } from 'recoil';
import { FaHtml5 } from 'react-icons/fa';
import { ReactElement } from 'react';
type IconType = {
  component: React.FC<{ color: string }>; // FaHtml5와 같은 React 컴포넌트 타입으로 변경
  color: string;
};

type StackData = {
  index: number;
  name: string;
  icon: IconType;
  contents: string;
  color: string;
  gauge: number;
};

export const usePageNumberState = atom({
  key: 'pageNumber',
  default: 1,
});

export const useStackDataState = atom<StackData>({
  key: 'skillData',
  default: {
    index: 1,
    name: 'Html',
    icon: { component: FaHtml5, color: '#f16528' },
    contents:
      '표준과 웹 접근성을 준수하며 태그의 의미와 사용성을 알고 문서의 구조를 고려해 시맨틱하게 마크업할 수 있어요.',
    color: '#f16528',
    gauge: 100,
  },
});
