import { useState } from 'react';
import remove from '../trash_icon.png'; 
import '../css/todo.css'

function Todolist(props) {
  let [todo, setTodo] = useState(['아침 산책', '신문 읽기']);
  let [inputVal, setInputVal] = useState('');
  let [creatShow, setCreatShow] = useState(false);

  let today = new Date();
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);

  let weekDay = ['일', '월', '화', '수', '목', '금', '토'];
  let week = weekDay[today.getDay()]
  
  return (
    <div className='todoList'>
      <div className='todoHeader'>
        <div className='date'>
          <h2>{year + "년 " + month + "월 " + day + "일"}</h2>
          <span>{week + "요일"}</span>
        </div>
        {
          
          <div className='remnants'>할 일 <span>{todo.length}</span>개 남음</div>
        }
      </div>

      <div className='todoBody'>
        {
          // console.log(props.todo);
        todo.map(function(item, index){ 
            return (
              <div>
                <label onClick={() => { }}>
                  <span>{item}</span>
                </label>
                <div className='remobeBtn' onClick={() => {
                  let todoCopy = [...todo];
                  todoCopy.splice(index, 1);
                  setTodo(todoCopy);
                }}>
                  <img src={ remove } alt=""></img>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className='todoCreat' style={{ display: creatShow == true ? 'flex' : 'none' }}>
        <input type="text" placeholder='오늘 할 일을 입력하세요.' value={ inputVal } onChange={(e) => { setInputVal(e.target.value); console.log(inputVal)}}></input>
        <button onClick={() => {
          if (inputVal == '') {
            alert("내용을 입력해주세요.")
          } else { 
            let todoCopy = [...todo];
            todoCopy.push(inputVal);
            setTodo(todoCopy);
            setInputVal('');
          }
        }}>추가</button>
      </div>

      <button className='addBtn' onClick={() => {
        if (creatShow == true) {
          setCreatShow(false);
        } else { 
          setCreatShow(true);
        } 
      }}> + </button>


    </div>
  )
}

export default Todolist;
