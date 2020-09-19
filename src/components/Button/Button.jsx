import React from "react";
import Button from "@material-ui/core/Button";

const PrettyButton = (props) => (
  <Button variant={props.variant} color={props.color}>
    {props.content}
  </Button>
);

PrettyButton.defaultProps = {
  variant: "contained",
  color: "primary",
  content: "I am pretty",
};

export default PrettyButton;
