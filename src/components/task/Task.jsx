import React from 'react'
// import {useDraggable} from '@dnd-kit/core';
// import {v4 as uuid} from "uuid";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// const Task = ({task ,taskList, setTaskList}) => {

//   const {attributes, listeners, setNodeRef, transform} = useDraggable({
//     id: `${taskList}:${task.id}`,
//   });
//   const style = transform ? {
//     transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
//   } : undefined;
  
//   const handleDelete = (id) => {
//     setTaskList(taskList.filter((task) => task.id !== id));
//   }
//   return (
//     <div ref={setNodeRef} style={style} {...listeners} {...attributes} className='taskBox'>
//       <p className='taskText'>{task.text}</p>
//       <button className='taskTrashButton' onClick={()=> handleDelete(task.id)}>
//         <i className="fa-solid fa-trash-can"></i>
//       </button>
//     </div>
//   )
// }


const Task = ({task, taskList, setTaskList}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className='taskBox'>
      <p className='taskText'>{task.text}</p>
      <button className='taskTrashButton' onClick={() => handleDelete(task.id)}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}

export default Task;