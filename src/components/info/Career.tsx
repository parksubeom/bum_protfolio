import styled from 'styled-components';

const Career: React.FC = () => {
  return (
    <CareerSection>
      <ProfileBox>
        <table>
          <tbody>
            <tr>
              <td>전화번호</td>
              <td>
                <span className="comp-name">+82 010-8109-0731</span>
              </td>
            </tr>
            <tr>
              <td>github</td>
              <td>
                <span className="comp-duty">
                  <a target="_blank" href="https://github.com/parksubeom">
                    <span className="comp-name">깃허브 링크</span>
                  </a>
                </span>
              </td>
            </tr>
            <tr>
              <td>blog</td>
              <td>
                <span className="comp-duty">
                  <a target="_blank" href="https://sooknise.tistory.com/">
                    <span className="comp-name">블로그 링크</span>
                  </a>
                </span>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <span className="comp-name">sooknise@naver.com</span>
              </td>
            </tr>
          </tbody>
        </table>
      </ProfileBox>
      <h2>Career</h2>
      <TimeLine>
        <table>
          <tbody>
            <tr>
              <td>23.09 ~ 24.01</td>
              <td>
                <span className="comp-name">열매컴퍼니 사내벤쳐기업 MOA</span>
                <span className="comp-duty">ICT 인턴 (FE직무)</span>
              </td>
            </tr>
            <tr>
              <td>22.12 ~ 23.07</td>
              <td>
                <span className="comp-name">국비지원 부트캠프 (프론트엔드)</span>
                <span className="comp-duty"> 수료</span>
              </td>
            </tr>
            <tr>
              <td>15.03 ~ </td>
              <td>
                <span className="comp-name">전남대학교 멀티미디어학과</span>
                <span className="comp-duty"> 졸업예정</span>
              </td>
            </tr>
          </tbody>
        </table>
      </TimeLine>
    </CareerSection>
  );
};

export default Career;

const CareerSection = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 1440px) {
    /* 1024px 이하일 때의 스타일 */
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: 0;
    > div {
      margin: 50 30px;
    }
  }

  .category-name {
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    h2 {
      font-size: 20px;
      margin-top: 50px;
    }
  }
`;

const TimeLine = styled.div`
  margin-top: 40px;

  table {
    tr {
      height: 40px;

      > td:nth-child(2n-1) {
        width: 120px;
        font-size: 12px;
      }

      .comp-name {
        color: var(--text-color);
        font-size: 15px;
        font-weight: 600;
      }

      .comp-duty {
        color: #bcbaba;
        margin-left: 10px;
        font-size: 15px;

        > a {
          color: var(--text-color);
          font-weight: bold;
        }
      }
    }
  }
`;

const ProfileBox = styled(TimeLine)`
  table {
    tr {
      height: 30px;

      > td:nth-child(2n-1) {
        font-size: 15px;
      }

      .comp-duty {
        margin: 0px;
      }
    }
  }
`;
