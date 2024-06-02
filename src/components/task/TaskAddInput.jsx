import React from 'react'

const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") return;
    setTaskList([...taskList, {id:taskList.length, text: inputText},]);
    setInputText('');
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='add a task' className='taskAddInput'onChange={handleChange} maxLength={8} value={inputText}/>
      </form>
    </div>
  )
}

export default TaskAddInput
