import React, { useState, createRef, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
//local file is text-try2

const SvgComponent = (props) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });
  const pathRef = createRef();
  const [pathLength, setPathLength] = useState();

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [pathRef]);

  return (
    //https://react-svgr.com/playground/
    <Wrapper ref={inViewRef} pathLength={pathLength}>
      <h1 className="title-wrapper">
        Hi, I'm
        <svg
          className={inView ? "animated visible example" : "animated"}
          viewBox="0 0 89.467 37.475"
          {...props}
        >
          <g>
            <path
              ref={pathRef}
              d="M36.405 1.228c-.826 0-2.306.804-4.44 2.411-1.629.473-3.029.79-4.199.953-2.673.391-4.526.776-5.558 1.155-1.021.378-2.037 1.046-3.047 2.005-1.709 1.635-2.564 3.668-2.564 6.099 0 1.364.345 2.58 1.033 3.647.688 1.053 1.612 1.79 2.77 2.208l-.275.568c-1.262 2.62-2.518 5.234-3.769 7.84-.768 1.554-1.571 2.884-2.409 3.992-2.134 2.823-4.67 4.234-7.607 4.234-1.376 0-2.518-.364-3.424-1.094-.918-.716-1.377-1.607-1.377-2.674 0-.648.098-.973.293-.973.023.04.034.088.034.142.034.878.35 1.317.947 1.317.826 0 1.239-.54 1.239-1.62 0-.906-.379-1.358-1.136-1.358-.47 0-.866.236-1.188.709-.332.473-.499 1.047-.499 1.722 0 1.23.482 2.242 1.446 3.04.964.796 2.197 1.195 3.7 1.195 2.604 0 5.151-.926 7.64-2.776 1.561-1.162 2.829-2.485 3.804-3.971.987-1.486 2.197-3.951 3.631-7.395.62-1.486.964-2.317 1.033-2.493.16.028.361.041.602.041 1.583 0 3.075-.669 4.475-2.006 1.41-1.35 2.116-2.782 2.116-4.295 0-.135-.051-.203-.155-.203-.091 0-.16.108-.206.324-.264 1.378-.723 2.486-1.377 3.323-1.32 1.689-2.948 2.533-4.887 2.533h-.43c1.652-4.187 3.155-7.422 4.508-9.705A31.334 31.334 0 0132.137 3.8a19.666 19.666 0 003.132-1.296c.918-.5 1.377-.851 1.377-1.054 0-.148-.08-.223-.24-.223zm-4.767 2.736c-3.958 2.958-7.658 8.104-11.1 15.438-2.019-.797-3.029-2.262-3.029-4.396 0-2.188.987-4.275 2.96-6.26a11.53 11.53 0 013.08-2.23c1.125-.553 2.766-1.114 4.923-1.681 1.33-.351 2.386-.642 3.166-.871zm22.613 4.862l-6.315 12.44c-.44.905-.71 1.46-.988 2.028-.027.036-.049.055-.08.1-2.707 4.2-4.853 6.3-6.436 6.3-1.01 0-1.514-.634-1.514-1.904 0-1.512.694-3.383 2.082-5.612s2.559-3.343 3.51-3.343c.563 0 .844.304.844.912 0 .77-.407 1.391-1.222 1.864-1.055.608-1.583 1.27-1.583 1.985 0 .608.258.912.774.912.528 0 1.056-.466 1.584-1.398.539-.932.808-1.864.808-2.796 0-1.189-.424-1.783-1.273-1.783-.7 0-1.606.378-2.72 1.135-1.319.878-2.368 1.925-3.148 3.14-.289.449-.505.89-.687 1.327-.867 1.433-1.723 2.68-2.566 3.718-1.01 1.23-1.744 1.844-2.203 1.844-.447 0-.671-.318-.671-.952 0-.662.528-2.033 1.583-4.113l3.046-5.937c-.493.095-.895.142-1.204.142-.264 0-.568-.047-.912-.142l-.878 1.966c.091-.379.137-.683.137-.912 0-.81-.355-1.216-1.067-1.216-.837 0-1.938.446-3.304 1.337-3.109 2-4.663 4.296-4.663 6.889 0 .932.206 1.709.619 2.33.413.608.924.912 1.532.912.573 0 1.164-.331 1.772-.993.608-.662 1.486-1.938 2.633-3.83-.367.852-.55 1.642-.55 2.371 0 .703.166 1.29.499 1.763.332.46.763.689 1.29.689.78 0 1.847-.96 3.201-2.877.616-.859.996-1.429 1.386-2.01-.098.41-.164.819-.164 1.22 0 1 .287 1.864.86 2.593.574.716 1.263 1.074 2.066 1.074 1.239 0 2.742-1.135 4.509-3.404a85.456 85.456 0 001.426-1.899l-1.667 3.418c-.322.662-.614 1.257-.878 1.783.493-.08.866-.121 1.119-.121.298 0 .602.04.912.121l.223-.405c.47-.932 1.09-2.249 1.86-3.95a95.576 95.576 0 012.512-5.106l2.96-5.633a204.192 204.192 0 001.325-2.614 630.704 630.704 0 001.342-2.532c.195-.365.339-.642.43-.83-.504.107-.872.161-1.101.161-.23 0-.58-.054-1.05-.162zm9.156 6.14c-.39 0-.786.337-1.188 1.012-.401.676-.7 1.486-.895 2.432a112.79 112.79 0 01-1.652 2.41l-1.376 1.986a.598.598 0 00-.31-.08c-.654 0-1.29.479-1.91 1.438-.6.945-.9 1.917-.909 2.915-1.241 1.739-2.207 2.616-2.895 2.616-.378 0-.568-.176-.568-.527 0-.216.121-.608.362-1.175.562-1.35.843-2.263.843-2.735 0-.851-.597-1.6-1.79-2.25.597-.31 1.371-1.107 2.324-2.39.745-1.027 1.365-1.54 1.858-1.54.356 0 .534.162.534.486 0 .42-.155.743-.465.973-.746.554-1.119 1.074-1.119 1.56 0 .527.247.79.74.79.436 0 .872-.317 1.308-.952.448-.648.672-1.297.672-1.945 0-.973-.436-1.459-1.308-1.459-.712 0-1.406.46-2.083 1.378-1.262 1.715-2.18 2.722-2.753 3.019a2.513 2.513 0 00-1.016-.203c-.378 0-.567.115-.567.345 0 .27.2.405.602.405.287 0 .648-.108 1.084-.324.379.256.568.533.568.83 0 .243-.109.615-.327 1.115l-.017.08c-.642 1.5-.963 2.466-.963 2.898 0 .5.19.945.568 1.337.378.392.814.588 1.307.588.774 0 1.816-.888 3.115-2.626.042.758.259 1.382.671 1.856.47.513 1.096.77 1.876.77 1.377 0 2.564-.446 3.563-1.337 1.01-.892 1.514-1.946 1.514-3.161 0-.581-.155-1.297-.465-2.148-.608-1.702-.912-2.944-.912-3.728 0-.31.035-.675.104-1.094 1.434-1.607 2.15-2.681 2.15-3.221 0-.23-.09-.345-.275-.345zm7.503 3.565c-1.055 0-2.398.682-4.027 2.046-2.317 1.932-3.476 3.938-3.476 6.018 0 .932.24 1.736.723 2.411.493.662 1.084.993 1.772.993 1.331 0 2.754-1.263 4.268-3.789.275.162.59.243.947.243.849 0 1.778-.594 2.788-1.783.46-.542.75-.938.898-1.211.055-.027.127-.11.22-.268 1.72-2.904 2.874-4.356 3.46-4.356.286 0 .43.203.43.608 0 .716-.764 2.505-2.29 5.369l-2.684 5.004a7.567 7.567 0 011.136-.08c.115 0 .453.026 1.015.08 3.488-7.32 6.07-10.981 7.744-10.981.493 0 .74.277.74.83 0 .446-.465 1.48-1.394 3.1-.895 1.54-1.451 2.574-1.67 3.1a4.465 4.465 0 00-.309 1.682c0 .69.172 1.27.516 1.743.356.472.792.709 1.308.709.78 0 1.853-.96 3.219-2.877 1.663-2.337 2.495-3.647 2.495-3.93 0-.082-.034-.122-.103-.122-.058 0-.115.067-.173.202-2.5 4.282-4.262 6.423-5.283 6.423-.47 0-.705-.277-.705-.83 0-.528.539-1.743 1.617-3.648 1.056-1.864 1.584-3.248 1.584-4.153 0-.716-.173-1.317-.517-1.803-.344-.487-.768-.73-1.273-.73-.62 0-1.297.405-2.03 1.216-.724.81-1.762 2.316-3.116 4.518.86-1.54 1.29-2.742 1.29-3.606 0-.581-.137-1.081-.412-1.5-.276-.419-.608-.628-.998-.628-.608 0-1.79 1.385-3.545 4.154l-.265.41c-.058.03-.132.104-.235.258A6.941 6.941 0 0172.89 25.4c-.688.567-1.29.85-1.807.85a1.31 1.31 0 01-.774-.243c1.388-2.188 2.082-4.059 2.082-5.612 0-1.243-.494-1.864-1.48-1.864zm-.034.264c.837 0 1.256.547 1.256 1.64 0 .581-.092 1.108-.275 1.581-.07-.27-.195-.405-.379-.405-.424 0-.86.351-1.308 1.053-.447.703-.671 1.385-.671 2.047 0 .459.166.905.499 1.337-1.468 2.404-2.822 3.606-4.061 3.606-.758 0-1.136-.466-1.136-1.398 0-1.607.751-3.586 2.254-5.936 1.503-2.35 2.777-3.525 3.82-3.525zm-37.689.04c.517 0 .775.33.775.993 0 .945-.798 2.688-2.392 5.227-1.95 3.093-3.322 4.64-4.113 4.64-.666 0-.999-.44-.999-1.317 0-1.5.855-3.465 2.565-5.896 1.72-2.431 3.109-3.647 4.164-3.647zm28.103.04c-.046.406-.069.912-.069 1.52 0 .743.01 1.317.035 1.722.023.392.034.79.034 1.196 0 1.512-.436 2.93-1.308 4.254-.86 1.31-1.773 1.966-2.736 1.966a1.61 1.61 0 01-1.24-.547c-.332-.365-.498-.818-.498-1.358 0-.425.124-.828.356-1.213.07-.103.137-.198.208-.304.315-.398.676-.66 1.088-.772 1.112-.284 1.669-.824 1.669-1.621 0-.31-.109-.574-.327-.79a276.216 276.216 0 002.788-4.052z"
              fill="none"
              stroke="#4f77ab"
              strokeWidth={1.3}
            />
          </g>
        </svg>
        .
      </h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .animated {
    max-width: 150px;
    width: 50%;
    position: relative;
    height: 50%;
    margin-bottom: 0.47em;
    stroke-dasharray: ${(props) => props.pathLength};
    stroke-dashoffset: ${(props) => props.pathLength};
  }
  .animated.visible {
    animation: draw 15s linear forwards;
  }
  @keyframes draw {
    from {
      stroke-dashoffset: ${(props) => props.pathLength};
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export default SvgComponent;