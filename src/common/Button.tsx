import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  $width?: string;
  $height?: string;
  $fontSize?: string;
  $margin?: string;
  $color?: string;
  $bgcolor?: string;
  $hover?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<BtnProps> = ({ children, ...props }) => {
  return <PublicButton {...props}>{children}</PublicButton>;
};

export default Button;

/** 2023/06/29 - 서비스 공용 버튼 컴포넌트 - parksubeom */
const PublicButton = styled.button<
  Pick<BtnProps, '$width' | '$height' | '$fontSize' | '$margin' | '$color' | '$bgcolor' | '$hover'>
>`
  font-family: KopubB;
  width: ${({ $width }) => $width ?? '15rem'};
  height: ${({ $height }) => $height ?? '3rem'};
  font-size: ${({ $fontSize }) => $fontSize ?? '18px'};
  border-radius: 5px;
  border: none;
  margin: ${({ $margin }) => $margin ?? '15px 15px 0px 0px'};
  background-color: ${({ $bgcolor }) => $bgcolor ?? '#f1c32b'};
  transition: 0.3s all ease-in-out;
  color: ${({ $color }) => $color ?? '#4c4c4c'};
  padding: 7px 25px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${({ $hover }) => $hover ?? 'var(--btn-bg-color'};
  }
`;
