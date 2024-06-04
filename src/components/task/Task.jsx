import React from 'react'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';


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
      <button className='taskTrashButton' onClick={() => handleDelete(task.id)} data-dndkit-disabled-dnd-flag="true">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}

export default Task;