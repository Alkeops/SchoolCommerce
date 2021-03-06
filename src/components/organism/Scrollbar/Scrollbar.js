import React, { useState } from "react";
import PropTypes from "prop-types";

import { Scrollbar } from "react-scrollbars-custom";
import classNames from "classnames";

const prefix = "o-scrollbar";

const Scrollbars = ({ isHorizontal, children, className, ...props }) => {
  const [mid, setMid] = useState(false);
  const classForComponent = classNames(prefix, {
    [className]: className,
    mid: mid,
  });

  return (
    <Scrollbar
      onScroll={(e) => setMid(e.clientHeight / .5 < e.scrollTop)}
      noScrollX={!isHorizontal}
      noScrollY={isHorizontal}
      className={classForComponent}
      {...props}
    >
      {children}
    </Scrollbar>
  );
};

Scrollbars.propTypes = {
  isHorizontal: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Scrollbars;
