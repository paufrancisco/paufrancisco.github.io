import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--orange);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--orange);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--dark-grey);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--orange);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);


  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              In 2022, I had a moment of realization — despite earning promotions in my job as an assembly technician, I knew it was time to take the next step and continue my college education. I was driven by curiosity: <i>“How are the mobile apps and websites I use every day actually built?”</i> That simple question sparked my interest in the world of software development.
            </p>

            <p>
              As I started learning more, I became deeply fascinated by how technology works behind the scenes, and this curiosity pushed me to explore further — I began joining programming competitions and even formed small discussion groups with my classmates where we would challenge each other with coding problems and share what we learned. These moments shaped my passion and direction in tech.
            </p>

            <p>
              That drive has since carried me into the industry. I worked as a Junior Web Developer at BEESEE Global Technologies and currently serve as a Full Stack Developer at WhiteStrings, where I build and maintain both front-end and back-end components, integrate APIs, and manage databases for real-world applications. Since July 2026, I'm also a part-time College Instructor at STI College Dasmariñas, teaching Automata Theory, Introduction to Computing, Digital Communications, and Game Programming, and I built a <a href="https://sir-francsico-s-portal.onrender.com/" target="_blank" rel="noreferrer">student class portal</a> for my own classes. Turning that early curiosity into hands-on work, and now helping others learn, has been one of the most rewarding parts of this journey.
            </p>

            <p>
              I graduated Magna Cum Laude in June 2026 with a GWA of 1.22, and was recognized as Best Programmer and Best in Software Development. My commitment to learning and growth, both inside and outside the classroom, continues to fuel my drive as a software developer. I'm available for freelance projects, so feel free to reach out through the contact section below or on <a href="https://www.linkedin.com/in/paulo-faustiniel-angelo-f-0212b12b1/" target="_blank" rel="noreferrer">LinkedIn</a>.
            </p>
          </div>


        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/docpau1.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
