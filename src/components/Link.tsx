import { Link as GatsbyLink } from "gatsby-plugin-react-i18next";
import React from "react";
import styled from "@emotion/styled";

interface Props {
  inverted?: boolean;
  active?: boolean;
}

const StyledGatsbyLink = styled(GatsbyLink)<Props>`
  color: ${({ theme, inverted }) =>
    inverted ? theme.palette.common.white : theme.palette.text.primary};
  text-decoration: none;
  transition: all 200ms ease;
  border-bottom: ${({ active, theme }) =>
    active ? `1px solid ${theme.palette.common.white}` : undefined};

  &:hover {
    color: ${({ theme }) => theme.palette.primary[300]};
  }

  &:active {
    color: ${({ theme }) => theme.palette.primary[100]};
  }
`;

export const Link: React.FC<React.ComponentProps<typeof GatsbyLink> & Props> = (
  props
) => {
  return <StyledGatsbyLink {...props} />;
};
