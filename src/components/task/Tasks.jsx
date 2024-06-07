import React from 'react'
import Task from './Task'
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { DndContext, useSensor, useSensors } from '@dnd-kit/core';
import { MouseSensor, KeyboardSensor } from './DndSensors';

const Tasks = ({taskList, setTaskList}) => {
  const handleDragOver = (event) => {
    const { active, over } = event;
    console.log(event)
    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = taskList.findIndex((v) => v.id === active.id);
      const newIndex = taskList.findIndex((v) => v.id === over.id);
      setTaskList(arrayMove(taskList, oldIndex, newIndex));
    }
  }

  const mouseSensor = useSensor(MouseSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, keyboardSensor);

  return (
    <DndContext onDragOver={handleDragOver} sensors={sensors}>
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
