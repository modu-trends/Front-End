import React from "react";
import ReactWordcloud from "react-wordcloud";
import words from "./words";

import "./KeywordWrapper.css";

// const KeywordWrapper = () => {
//   return (
//     <div className="keyword-wrapper">
//       <ReactWordcloud
//         words={words}
//         options={{
//           fontFamily: "Noto Sans KR",
//           fontSizes: [10, 50],
//           fontWeight: "bold"
//         }}
//       />
//     </div>
//   );
// };

const KeywordWrapper = ({ children }) => {
  return <div className="keyword-wrapper">{children}</div>;
};

export default KeywordWrapper;
