import React, { useState } from 'react'
import TaskCard from '../task/TaskCard'
import AddTaskCardButton from '../task/button/AddTaskCardButton';
import { DndContext } from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{id: 0, draggableId: "item0"}]);

  const handleDragOver = (event) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = taskCardsList.findIndex((v) => v.id === active.id);
      const newIndex = taskCardsList.findIndex((v) => v.id === over.id);
      setTaskCardsList(arrayMove(taskCardsList, oldIndex, newIndex));
    }
  }

  return (
    <DndContext onDragOver={handleDragOver}>
      <SortableContext items={taskCardsList} strategy={horizontalListSortingStrategy}>
        <div className='taskCardsArea'>        
          {taskCardsList.map((taskCard) => (
            <TaskCard key={taskCard.id} taskCardList={taskCardsList} setTaskCardList={setTaskCardsList} taskCard={taskCard}/>
          ))}
          <AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList}/>
        </div>
      </SortableContext>
    </DndContext>
  )
}

export default TaskCards