import React from "react";

const Loading = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // 水平居中
        alignItems: "center", // 垂直居中
        position: "fixed", // 固定在屏幕中
        top: 0,
        left: 0,
        width: "100vw", // 视窗的宽度
        height: "100vh", // 视窗的高度
      }}
    >
      {props.children}
    </div>
  );
};

export default Loading;
