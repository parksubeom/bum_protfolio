// ProjectInfo.tsx
import React from 'react';
import styled from 'styled-components';

const Readme: React.FC = () => {
  return (
    <Container>
      <Section>
        <Title>프로젝트 정보</Title>
        <Content>티캣이다.</Content>
      </Section>
      <Section>
        <Title>개발한 이유</Title>
        <Content>프로젝트를 시작한 동기와 목적을 설명합니다.</Content>
      </Section>
      <Section>
        <Title>사용 기술 스택</Title>
        <Content>주로 사용한 기술 스택을 나열합니다.</Content>
      </Section>
      <Section>
        <Title>배운 점</Title>
        <Content>프로젝트를 진행하면서 얻은 경험과 배운 점을 기록합니다.</Content>
      </Section>
      <Section>
        <Title>주요 기능</Title>
        <Content>프로젝트의 핵심 기능을 소개합니다.</Content>
      </Section>
    </Container>
  );
};

export default Readme;

// 스타일드 컴포넌트
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #faf8f8;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 16px;
  color: #fee2e2;
`;
