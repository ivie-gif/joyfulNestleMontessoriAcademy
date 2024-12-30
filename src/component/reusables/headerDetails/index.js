// import React from "react";

// const CustomDiv = ({
//   backgroundColor = "transparent",
//   color = "inherit",
//   minHeight = "auto",
//   width = "auto",
//   borderRadius = "0",
//   padding = "0",
//   margin = "0",
//   children,
//   style = {},
//   ...restProps
// }) => {
//   const divStyle = {
//     backgroundColor,
//     color,
//     minHeight,
//     width,
//     borderRadius,
//     padding,
//     margin,
//     ...style, // Allow overriding or adding additional styles
//   };

//   return (
//     <div style={divStyle} {...restProps}>
//       {children}
//     </div>
//   );
// };

// export default CustomDiv;


import React from 'react';
import { useLocation } from 'react-router-dom';

const CustomDiv = ({
  backgroundColor = 'transparent',
  color = 'inherit',
  minHeight = 'auto',
  width = 'auto',
  borderRadius = '0',
  padding = '0',
  margin = '0',
  children,
  style = {},
  ...restProps
}) => {
  const location = useLocation();

  // Check if the current path is the home page
  const isHomePage = location.pathname === '/';

  // If it's the home page, don't render the div
  if (isHomePage) return null;

  const divStyle = {
    backgroundColor,
    color,
    minHeight,
    width,
    borderRadius,
    padding,
    margin,
    ...style, // Allow overriding or adding additional styles
  };

  return (
    <div style={divStyle} {...restProps}>
      {children}
    </div>
  );
};

export default CustomDiv;

