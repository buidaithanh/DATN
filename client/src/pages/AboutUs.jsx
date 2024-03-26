import React from "react";
import mammoth from "mammoth";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <>
      <input type="file" id="wordFileInput" accept=".docx" />
      <div id="convertedHtml"></div>
      <Ring>
        <div className="outer">
          <div className="inner"></div>
        </div>
      </Ring>
    </>
  );
};

export default AboutUs;
const Ring = styled.div`
  .outer {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    background-color: #9273b0;
    margin: 10px;
    cursor: pointer;
  }

  .inner {
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background-color: #ffffff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease-out;
  }

  .outer:hover .inner {
    width: 90%;
    height: 90%;
  }
`;
