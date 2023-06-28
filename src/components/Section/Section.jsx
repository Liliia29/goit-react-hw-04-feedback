import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
