import { styled } from "@mui/system";
import { ButtonUnstyled, buttonUnstyledClasses } from "@mui/base";

const blue = {
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
};

const grey = {
  100: "#eaeef2",
  300: "#afb8c1",
  900: "#24292f",
};

export const Button = styled(
  styled(ButtonUnstyled)(({ theme }) => ({
    ...theme.typography.button,
  }))
)(
  ({ theme }) => `
  background-color: #1D5BF6;
  border-radius: ${theme.spacing(1.5)};
  padding: ${theme.spacing(1.5)} ${theme.spacing(3)};
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
  `
);
