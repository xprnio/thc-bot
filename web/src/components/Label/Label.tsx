import React, { PropsWithChildren } from 'react';
import * as Styled from './Label.styled';

export type LabelType = 'heading' | 'title' | 'subtitle';
export type LabelProps = PropsWithChildren & { type: LabelType };
export const Label: React.FC<LabelProps> = ({ type, children }) => {
  switch (type) {
    case 'heading':
      return <Styled.Heading>{children}</Styled.Heading>;
    case 'title':
      return <Styled.Title>{children}</Styled.Title>;
    case 'subtitle':
      return <Styled.Subtitle>{children}</Styled.Subtitle>;
  }

  return null;
};
