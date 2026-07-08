import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--orange);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
  ul {
    ${({ theme }) => theme.mixins.fancyList};
    display: flex;
    flex-direction: column;

    
    line-height: 1.2;

    padding-left: 50px;
    padding-right: 50px;

    margin-top: 10px;

    li {
      text-align: left;
      margin-bottom: 0px;
    }

  }
`;
const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What's Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I'm a fresh Computer Science graduate currently working as a Full Stack Developer on a project basis, and actively <b>looking for full-time opportunities</b> in software engineering or software development.
      </p>

      <p>
        Whether you have a role in mind or just want to connect, my inbox is always open!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Email Me
      </a>
    </StyledContactSection>
  );
};

export default Contact;
