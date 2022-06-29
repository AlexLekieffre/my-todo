import React, { useEffect } from "react";
import useModal from "./hooks/useModal";
import Modal from "./components/atoms/Modal";
import { useState, useRef } from "react";
import Todo from "./components/atoms/Todo";

export default function App() {
  const titleRef = useRef();
  const dateRef = useRef();
  const memberRef = useRef();
  const descriptRef = useRef();
  const [task, setTodo] = useState([]);
  let [id, setID] = useState(0);
  const { isShowing: isCreateTaskShowed, toggle: toggleCreateTask } =
    useModal();

  //permet de créer une Task et de l'ajouter a la liste des Task
  const CreateTask = () => {
    function addTask() {
      const title = titleRef.current.value;
      const date = dateRef.current.value;
      const member = memberRef.current.value;
      const descript = descriptRef.current.value;
      const complete = false;
      const cat = "";

      if (title === "") return;
      setID((id += 1));
      setTodo((prev) => {
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

    //Retourne le formulaire de ma modal
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
    const todo = task.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodo(newTask);
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

          <Modal isShowing={isCreateTaskShowed} hide={toggleCreateTask}>
            <CreateTask />
          </Modal>
        </div>
        <div className="body">
          <div>
            <h1>A Faire {task.filter((todo) => !todo.complete).length}</h1>
            {task.filter((todo) => !todo.complete)
              .map((todo) => (
                <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
              ))}
          </div>
          <div>  <h1>fait {task.filter((todo) => todo.complete).length} </h1>
            {task.filter((todo) => todo.complete)
              .map((todo) => (
                <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
              ))} </div>
        </div>
      </div>
    </>
  );
}
