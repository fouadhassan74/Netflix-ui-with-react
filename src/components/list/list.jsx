import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import ListItem from "../listItem/listitem";
import React, { useRef, useState } from "react";
import "../list/list.scss";
function List() {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  const handelClick = (direction) => {
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 6) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(distance);
    console.log(slideNumber);
  };
  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch</span>
      <div className='wrapper'>
        <ArrowBackIosNewOutlined
          onClick={() => handelClick("left")}
          className='sliderArrow left'
        />
        <div ref={listRef} className='container'>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          onClick={() => handelClick("right")}
          className='sliderArrow right'
        />
      </div>
    </div>
  );
}

export default List;
