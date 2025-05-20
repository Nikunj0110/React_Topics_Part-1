import React from "react";
import PropTypes from "prop-types";

function Prop(props) {
  const {title,main,demo}=props
  return (
    <div>
      <h1>{title}</h1>
      <h1>{main}</h1>
    </div>
  );
}

export default Prop;

// Prop.defaultProps={
//   first:"Name",
//   second:"Name 2"
// };

// Prop.propTypes = {
//   first: PropTypes.string,
//   second: PropTypes.string,
// };
