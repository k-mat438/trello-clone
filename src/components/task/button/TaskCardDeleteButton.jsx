import React from 'react'

const TaskCardDeleteButton = ({taskCard, taskCardList, setTaskCardList}) => {
  const onClickDelete = (id) => {
    setTaskCardList(taskCardList.filter((e) => (e.id !== id)))
  }
  return (
    <div data-dndkit-disabled-dnd-flag="true">
      <button className='taskCardDeleteButton' onClick={() => onClickDelete(taskCard.id)}>
        <i className="fa-solid fa-circle-xmark"></i>
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
