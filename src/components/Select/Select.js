import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import {
  getDisplayedValue,
  getCanvasFont,
  getTextWidth,
} from "./Select.helpers";
import VisuallyHidden from "../VisuallyHidden";

const Select = ({ label, value, onChange, children }) => {
  const selectRef = React.useRef();

  const font = getCanvasFont(selectRef.current);
  const displayedValue = getDisplayedValue(value, children);
  const displayedValueWidth = Math.ceil(getTextWidth(displayedValue, font));

  console.log(displayedValue, displayedValueWidth);

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <SelectInput
        ref={selectRef}
        value={value}
        onChange={onChange}
        style={{
          "--padding": "12px 52px 12px 16px",
          "--width": displayedValueWidth + 16 + 52 + "px",
        }}
      >
        {children}
      </SelectInput>
      <Chevron id="chevron-down" size={22} strokeWidth={2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectInput = styled.select`
  height: 43px;
  width: var(--width);
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: currentColor;
  border: 0px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  padding: var(--padding);
  // This will make the default arrow/chevron disappear
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const Chevron = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 11px;
  pointer-events: none;
`;

export default Select;
