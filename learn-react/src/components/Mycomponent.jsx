import React from "react";

//함수형 컴포넌트
function MyComponent({ active, title }) {
  return (
    <div style={{ color: active && "red" }}>
      {active && <b>*</b>} Hello {title}
    </div>
  );
}

MyComponent.defaultProps = {
  title: "React!",
  color: "green",
};

export default MyComponent;
