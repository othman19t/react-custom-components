import React from "react";

const AppImg = (props) => {
  document.addEventListener("DOMContentLoaded", () => {
    let custom__img = document.getElementsByClassName("custom__img");
    custom__img = Object.values(custom__img);
    let i;
    for (i = 0; i < custom__img.length; i++) {
      let imgHeight = custom__img[i].height;
      let imgWidth = custom__img[i].width;
      if (imgWidth > imgHeight) {
        custom__img[i].style.width = "100%";
      }
      if (imgWidth < imgHeight) {
        custom__img[i].style.width = "50%";
      }
    }
  });

  return (
    <div className={`img__con ${props.imgConSecondClassName}`}>
      <img
        src={props.src}
        alt={props.alt}
        className={`custom__img ${props.secondClassName}`}
        id={props.id}
      />
    </div>
  );
};

export default AppImg;
