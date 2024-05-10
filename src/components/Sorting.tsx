import React from "react"
import { SORTING } from "../const";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSort } from "../app/dataSlice.ts";
import { RootState } from "../app/store.ts";


export default function Sorting(): JSX.Element {
  const activeSort = useSelector((state: RootState) => state.tickets.activeSort);
  const dispatch = useDispatch();


  const onSortButtonClick = (index: number) => {
    dispatch(setActiveSort({ index }));
  }

  return (
    <ul className="tickets__sorting">
      {SORTING.map((item, index) => (
        <li
          key={index}
          className={`tickets__sorting-item ${activeSort === index ? 'active' : ''}`}
          onClick={() => onSortButtonClick(index)}>{item}</li>
      ))}
    </ul>
  )
};
