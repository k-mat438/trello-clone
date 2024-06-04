import React, { useState } from 'react'
import TaskCardTitle from "./TaskCardTitle";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import  TaskAddInput  from "./TaskAddInput";
import Tasks  from "./Tasks";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';


const TaskCard = ({taskCardList, setTaskCardList,taskCard}) => {
  const [ inputText, setInputText ] = useState('');
  const [ taskList, setTaskList ] = useState([]);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: taskCard.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className='taskCard'>
      <div className='taskCardTitleAndTaskCardDeleteButtonArea'>
        <TaskCardTitle />
        <TaskCardDeleteButton taskCard={taskCard} taskCardList={taskCardList} setTaskCardList={setTaskCardList}/>
      </div>
      <div>
        <TaskAddInput inputText={inputText} setInputText={setInputText} taskList={taskList} setTaskList={setTaskList}/>
        <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList}/>
      </div>
    </div>
  )
}

export default TaskCard
