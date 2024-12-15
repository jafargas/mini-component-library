/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--wrapperHeight": "24px",
    "--wrapperBorderRadius": "8px",
    "--wrapperPadding": "4px",
    "--pbBorderRadius": "4px",
  },
  medium: {
    "--wrapperHeight": "12px",
    "--wrapperBorderRadius": "4px",
    "--wrapperPadding": "0px",
    "--pbBorderRadius": "4px",
  },
  small: {
    "--wrapperHeight": "8px",
    "--wrapperBorderRadius": "4px",
    "--wrapperPadding": "0px",
    "--pbBorderRadius": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      value={value}
      aria-valuenow={value}
      max={100}
      style={SIZES[size]}
    ></Wrapper>
  );
};

const Wrapper = styled.progress`
  height: var(--wrapperHeight);
  border-radius: var(--wrapperBorderRadius);
  padding: var(--wrapperPadding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  &::-webkit-progress-bar {
    background-color: transparent;
    border-radius: var(--pbBorderRadius);
    overflow: clip;
  }
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
  }

  &::-moz-progress-bar {
    background-color: ${COLORS.primary};
  }
`;

export default ProgressBar;
