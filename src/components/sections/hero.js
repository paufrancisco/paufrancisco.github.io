import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const PicturedHeroSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
 
    padding: 0;

    min-height: 100vh;
    height: 100vh;

    img {
        width: 40%;
        height: 50%;
        object-fit: contain ;
        border-radius: var(--border-radius);
        transition: var(--transition);
        pointer-events: none;
    
    }

    @media (max-width: 620px) {
        img {
            width: 50%;
            height: 20%;
        }
        // display:block;
        flex-direction: column-reverse;

        
    }   
`

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--orange);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi there! I'm</h1>;
  const two = <h2 className="big-heading">Paulo Francisco.</h2>;
  const three = <h3 className="big-heading">I want to develop software</h3>;
  const four = (
    <>
      <p>
        I am currently a senior Computer Science student at 
        <a href="https://www.sti.edu/" target="_blank" rel="noreferrer">STI College of Dasmariñas</a>, 
        driven by a strong interest in data science and software development. 
        As a career shifter from a technical background, I transitioned into Computer Science to broaden my opportunities that will enhance my skills as well as explore the dynamic world of technology. 
        I’m also proud to represent my school in the CodeFest competition.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="/Paulo-Francisco-Resume-V1.pdf"
      target="_blank"
      rel="noreferrer"
    >
      Download my resume
    </a>
  );


    

  const items = [one, two, three, four, five];

  return (
    <PicturedHeroSection>
        <StyledHeroSection>
        {prefersReducedMotion ? (
            <>
            {items.map((item, i) => (
                <div key={i}>{item}</div>
            ))}
                
            </>
            
        ) : (
            <TransitionGroup component={null}>
            {isMounted &&
                items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                    <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
                ))}
                
            </TransitionGroup>
            
        )}
        </StyledHeroSection>
        <TransitionGroup component={null}>
            {isMounted && (
                <CSSTransition key={7} classNames="fadeup" timeout={loaderDelay}>
                <img
                    style={{ transitionDelay: `100ms` }}
                    src="paupau.jpg"
                    alt="PeteCastle_front"
                />
                </CSSTransition>
            )}
        </TransitionGroup>
        
       
    </PicturedHeroSection>
    
  );
};

export default Hero;
