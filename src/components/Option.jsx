import React from "react";

const Option = (props) => {
  function checkOptionState() {
    if (props.optionState === "initial") {
      if (props.isSelected) {
        return "selected";
      } else {
        return "initial";
      }
    } else {
      return props.optionState;
    }
  }

  return (
    <button
      disabled={props.optionState !== "initial"}
      onClick={props.handleSelection}
      className={checkOptionState()}
    >
      <span className="text-[13px] text-primary font-medium leading-loose">
        {props.option}
      </span>
    </button>
  );
};

export default Option;
