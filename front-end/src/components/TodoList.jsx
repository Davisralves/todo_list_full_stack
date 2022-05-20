import React from "react";

export default function TodoList({list, onDragStart, onDragEnd, onDrop, setSelectedElement}) {
  return(
    list.map((item, index) => (
      <div
        draggable={true}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => e.preventDefault()}
        onDragLeave={(e) => e.preventDefault()}
        onClick={({target}) =>  {
          console.log(target);
          setSelectedElement(target) } }
        data-id={index}
        key={index}
      >{item}
      </div>
      )
    )
  )
}
