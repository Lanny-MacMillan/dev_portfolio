import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1500px;
  color: white;
  background: linear-gradient(#141c3a, #0a0f1e);
  padding-bottom: 80px;
  grid-template-columns: 0.7fr 3fr 0.7fr;
  grid-template-areas:
    '. header .'
    '. grid .';

  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'grid';
    padding: 0 20px 40px 20px;
  }
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  font-weight: 800;
  font-family: 'DM Sans', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  padding-bottom: 30px;
  /* background: linear-gradient(#1f2c5b, #141c3a); */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 3.5em;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const SkillsHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 28px;
  font-weight: 900;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 25%;
  // border: 1px solid red;
`;

export const ColorAccent = styled.span`
  background-image: linear-gradient(
    ${(props) => (props.$background ? props.$background : 'red')},
    ${(props) => (props.$background ? props.$background : 'red')}
  );
  background-repeat: no-repeat;
  background-size: 100% 0.36em;
  background-position: 0 88%;
`;

export const Title = styled.div`
  display: flex;
  z-index: 5;
  width: 100%;
  align-items: center;
  padding-left: 10px;
`;

export const DescriptionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 30px;
`;

export const CodeTag = styled.span`
  font-family: 'DM Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #00ddff;
  white-space: nowrap;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const CodeRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  padding-left: 6px;
`;

export const Description = styled.div`
  padding: 4px 0;
`;

export const VertLine = styled.div`
  border: 1px dashed #00ddff;
  border-color: ${(props) => (props.$borderColor ? props.$borderColor : 'white')};
  flex: none;
  align-self: stretch;
  min-height: 30px;
`;
export const SkillsGrid = styled.div`
  grid-area: grid;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 2px solid white;
  border-left: 2px solid white;

  @media only screen and (min-width: 601px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div`
  min-width: 0;
  padding: 60px;
  font-family: 'DM Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  border-right: 2px solid white;
  border-bottom: 2px solid white;

  @media only screen and (max-width: 600px) {
    padding: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(#141c3a, #0a0f1e);
`;
