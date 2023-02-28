import './App.css';
import { useState } from 'react';

function App() {
  const [todolist, setToDoList] = useState([
    { id: 1, title: '로또 사기', body: '복권 사서 1등 당첨!', isDone: false },
    { id: 2, title: '연금복권 사기', body: '복권 사서 1등 당첨!', isDone: false },
  ])

  const [todotitle, setToDoTitle] = useState('');
  const [todobody, setToDoBody] = useState('');

  const todoTitleChange = (event) => {
    setToDoTitle(event.target.value)
  }

  const todoBodyChange = (event) => {
    setToDoBody(event.target.value)
  }

  const todoListAddBtn = () => {
    const newToDoList = {
      id: todolist.length + 1,
      title: todotitle,
      body: todobody,
      isDone: false,
    }

    setToDoList([...todolist, newToDoList]);
    setToDoTitle('')
    setToDoBody('')
  }

  const todoListRemoveBtn = (id) => {
    const removeToDoList = todolist.filter((list) => list.id !== id)
    setToDoList(removeToDoList)
  }

  const onEditBtn = (todoId) => {
    const newTodos = todolist.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setToDoList(newTodos);
  };


  return (
    <div className='layout'>
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="add-form">
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            type='text'
            value={todotitle} onChange={todoTitleChange}
            className="add-input input-body"
          />
          <label className="form-label">내용</label>
          <input
            type='text'
            value={todobody}
            onChange={todoBodyChange}
            className="add-input"
          />
          <button onClick={todoListAddBtn} className="add-button">추가하기</button>
        </div>
      </div>
      <div className="list-container">
        <h2 className="list-title">Working🔥</h2>
        <div className="list-wrapper">
          {todolist.map((todo) => {
            if (!todo.isDone) {
              return (
                <div
                  className='todolistcard'
                  key={todo.id}
                >
                  <h4 className="todo-title">{todo.title}</h4>
                  <h5>{todo.body}</h5>
                  <div className="button-set">
                    <button className="todo-delete-button button" onClick={() => todoListRemoveBtn(todo.id)}>삭제</button>
                    <button className="todo-complete-button button" onClick={() => onEditBtn(todo.id)}>{todo.isDone ? "취소" : "완료"}</button>
                  </div>
                </div>
              )
            } else {
              return null
            }
          }
          )}
        </div>
      </div>
      <div className="list-container">
        <h2 className="list-title">Done🎉</h2>
        <div className="list-wrapper">
          {todolist.map((todo) => {
            if (todo.isDone) {
              return (
                <div
                  className='todolistcard'
                  key={todo.id}
                >
                  <h4 className="todo-title">{todo.title}</h4>
                  <h5>{todo.body}</h5>
                  <div className="button-set">
                    <button className="todo-delete-button button" onClick={() => todoListRemoveBtn(todo.id)}>삭제</button>
                    <button className="todo-complete-button button" onClick={() => onEditBtn(todo.id)}>{todo.isDone ? "취소" : "완료"}</button>
                  </div>
                </div>
              )
            } else {
              return null
            }
          }
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
