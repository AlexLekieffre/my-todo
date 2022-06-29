import React, { useEffect } from "react";
import useModal from "./Components/atoms/useModal";
import Modal from "./Components/modale";
import { useState, useRef } from "react";
import MyTask from "./Components/V2_Component/atoms/myTask";

export default function App() {
  const titleRef = useRef();
  const dateRef = useRef();
  const memberRef = useRef();
  const descriptRef = useRef();
  const [task, setTask] = useState([]);
  let [id, setID] = useState(0);
  const { isShowing: isCreateTaskShowed, toggle: toggleCreateTask } =
    useModal();


    useEffect(()=>{
    },[task])

  //permet de créer une Task et de l'ajouter a la liste des Task
  const CreateTask = () => {
    function addTask(e) {
      const title = titleRef.current.value;
      const date = dateRef.current.value;
      const member = memberRef.current.value;
      const descript = descriptRef.current.value;
      const complete = false;
      const cat = "";

      if (title === "") return;
      setID(id += 1);
      setTask((prev) => {
        return [
          ...prev,
          {
            title: title,
            date: date,
            member: member,
            descript: descript,
            id: id,
            complete,
            cat,
          },
        ];
      });
      
    }


    //Retourne le formulaire de ma modale
    return (
      <div className="createTask">
        <form>
          <p>
            Titre :{" "}
            <input
              type="text"
              ref={titleRef}
              name="title"
              placeholder="Titre"
            />
          </p>
          <p>
            Date : <input type="date" ref={dateRef} name="date" />
          </p>
          <p>
            Team Member :{" "}
            <input type="text" ref={memberRef} name="TeamMember" />{" "}
          </p>
          <p>
            Description :{" "}
            <input type="text" ref={descriptRef} name="Descript" />
          </p>
        </form>

        <button className="creatTask" name="send" onClick={addTask}>
          Add Task
        </button>
      </div>
    );
  };


//permet de modifier une task
  function toggleTodo(id) {
    const newTask = [...task];
    const todo = newTask.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTask(newTask);
  }


  
  function handleClearTodos() {
    const newTodos = task.filter((todo) => !todo.complete);
    setTask(newTodos);
  }


  //return de mon app
  return (
    <>
      <div className="App">
        <div className="header">
          <button
            className="modal-toggle CreateTask"
            onClick={toggleCreateTask}
          >
            Créer une task
          </button>
          <button
          className="maj"
          onClick={handleClearTodos}
          >
            mise a jour
          </button>

          <Modal isShowing={isCreateTaskShowed} hide={toggleCreateTask}>
            <CreateTask />
          </Modal>
        </div>
        <div className="body">
        
          <MyTask task={task} toggleTodo={toggleTodo} />
        </div>
      </div>

      <style jsx="true">{`
        .App {
          height : 100%;
          width : 100%;
      }
        }

        button.modal-toggle,
        input[type="submit"] {
          background-color: turquoise;
          cursor: pointer;
          padding: 1rem 2rem;
          text-transform: uppercase;
          border: none;
        }

        button.modal-toggle:not(:first-child) {
          margin-left: 10px;
        }
        .CreateTask {
          height: 40px;
        }
      `}</style>
    </>
  );
}
