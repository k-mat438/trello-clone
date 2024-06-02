import React from 'react'

const TaskCardDeleteButton = ({taskCard, taskCardList, setTaskCardList}) => {
  const onClickDelete = (id) => {
    setTaskCardList(taskCardList.filter((e) => (e.id !== id)))
  }
  return (
    <div>
      <button className='taskCardDeleteButton' onClick={() => onClickDelete(taskCard.id)}>
        <i className="fa-solid fa-circle-xmark"></i>
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
