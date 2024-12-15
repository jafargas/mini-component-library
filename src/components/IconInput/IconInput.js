import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--height": "36px",
    "--fontSize": "18px",
    "--padding": "8px 8px 8px 36px",
    "--iconTop": "4px",
  },
  small: {
    "--height": "24px",
    "--fontSize": "14px",
    "--padding": "4px 4px 4px 24px",
    "--iconTop": "2px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper style={{ ...SIZES[size], "--width": width + "px" }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledInput placeholder={placeholder} />
      <StyledIcon
        id={icon}
        size={size === "large" ? 24 : 16}
        strokeWidth={size === "large" ? 2 : 1}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const StyledInput = styled.input`
  border: 0px;
  border-bottom: 2px solid black;
  height: var(--height);
  width: var(--width);
  outline-offset: 2px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: var(--fontSize);
  color: currentColor;
  padding: var(--padding);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: var(--iconTop);
  color: currentColor;
`;

export default IconInput;
