import React from 'react';
import styled from 'styled-components';

export const Flag = (
  { src, language, changeLanguage }: any
) => {
  const bindClick = () => changeLanguage(language);

  return <Wrapper src={src} onClick={bindClick}/>
}

const Wrapper = styled.img`
  width: 40px;
  height: 40px;
`;
