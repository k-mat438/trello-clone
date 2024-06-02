import React from 'react'
import Task from './Task'
import {DndContext} from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';

const Tasks = ({taskList, setTaskList}) => {
  const handleDragOver = (event) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = taskList.findIndex((v) => v.id === active.id);
      const newIndex = taskList.findIndex((v) => v.id === over.id);
      setTaskList(arrayMove(taskList, oldIndex, newIndex));
    }
  }
  return (
    <DndContext onDragOver={handleDragOver}>
      <SortableContext items={taskList} strategy={verticalListSortingStrategy}>
        <div>
          {taskList.map((task) => (
            <Task key={task.id} task={task} taskList={taskList} setTaskList={setTaskList}/>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
export default Tasks
