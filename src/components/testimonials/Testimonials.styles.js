import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestimonialsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 30px 90px;
  background: #2f4289;
  font-family: 'DM Sans', sans-serif;
  color: white;

  @media only screen and (max-width: 768px) {
    padding: 10px 20px 60px;
  }
`;

export const Heading = styled.h2`
  margin: 0 0 8px;
  font-size: 2.2em;
  font-weight: 800;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const Subheading = styled.p`
  margin: 0 0 36px;
  max-width: 520px;
  text-align: center;
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.7);

  @media only screen and (max-width: 768px) {
    margin-bottom: 24px;
    font-size: 0.9em;
  }
`;

// Three cards per row; a short last row centers under the row above it.
export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 1200px;

  > * {
    flex: 0 1 calc((100% - 48px) / 3);
    box-sizing: border-box;
  }

  @media only screen and (max-width: 992px) {
    max-width: 600px;

    > * {
      flex-basis: 100%;
    }
  }
`;

export const QuoteCard = styled(motion.figure)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 36px 28px 28px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(6px);

  &::before {
    content: '\\201C';
    position: absolute;
    top: 6px;
    left: 20px;
    font-size: 4.5em;
    line-height: 1;
    color: rgba(0, 221, 255, 0.45);
  }

  @media only screen and (max-width: 768px) {
    padding: 28px 20px 20px;

    &::before {
      top: 4px;
      left: 16px;
      font-size: 3.2em;
    }
  }
`;

export const Quote = styled.blockquote`
  margin: 0 0 24px;
  font-size: 1.05em;
  line-height: 1.6;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    margin-bottom: 16px;
    font-size: 0.9em;
    line-height: 1.5;
  }
`;

export const Credit = styled.figcaption`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Name = styled.span`
  font-weight: 700;
  color: #00ddff;

  @media only screen and (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const Role = styled.span`
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.65);

  @media only screen and (max-width: 768px) {
    font-size: 0.8em;
  }
`;
