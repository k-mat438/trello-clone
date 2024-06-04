import React, { useState } from 'react'

const TaskCardTitle = () => {
  const [isClick, setIsClick ] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today")

  const handleClick = () => {
    setIsClick(true)
  }

  const handleChange = (e) => {
    setInputCardTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    if (inputCardTitle === "") return;
    e.preventDefault();
    setIsClick(false);
  }

  const handleBlur = () => {
    setIsClick(false)
  }
  return (
    <div onClick={handleClick} className={"taskCardTitleInputArea"} data-dndkit-disabled-dnd-flag="true">
      {isClick ? 
      (<form onSubmit={handleSubmit}>
        <input className={"taskCardTitleInput"} type="text" autoFocus onChange={handleChange} onBlur={handleBlur} value={inputCardTitle} maxLength={10}/>
      </form>): 
      (<h3>
        {inputCardTitle}
      </h3>)}
    </div>
  )
}

export default TaskCardTitle
