import React from "react";

import styled from "@emotion/styled";
import { Link as GatsbyLink } from "gatsby-plugin-react-i18next";

interface Props {
  inverted?: boolean;
  active?: boolean;
}

const StyledGatsbyLink = styled(GatsbyLink)<{ styled: Props }>`
  color: ${({ theme, styled: { inverted } }) =>
    inverted ? theme?.palette?.common?.white : theme?.palette?.text?.primary};
  text-decoration: none;
  transition: all 200ms ease;
  border-bottom: ${({ theme, styled: { active } }) =>
    active ? `1px solid ${theme?.palette?.common?.white}` : undefined};

  &:hover {
    color: ${({ theme }) => theme?.palette?.primary?.[300]};
    border-bottom-color: ${({ theme }) => theme?.palette?.primary?.[300]};
  }

  &:active {
    color: ${({ theme }) => theme?.palette?.primary?.[100]};
    border-bottom-color: ${({ theme }) => theme?.palette?.primary?.[100]};
  }
`;

export const Link: React.FC<
  React.ComponentProps<typeof GatsbyLink> & Props
> = ({ inverted, active, ...props }) => {
  return <StyledGatsbyLink {...props} styled={{ inverted, active }} />;
};
