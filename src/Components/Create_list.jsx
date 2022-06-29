import CreatCard from "./atoms/creatCard";
const { useState } = require("react");

const CreateList = () => {
  const [title, setTitle] = useState(""),
    [date, setDate] = useState([]),
    [teamMember, setTeamMember] = useState(""),
    [descript, setDescript] = useState(""),
    [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)}>Add Task</button>
      {open && (
        <div className="card">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <p>
              Titre :{" "}
              <input
                type="text"
                placeholder="Titre"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </p>
            <p>
              Date :{" "}
              <input
                type="date"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </p>
            <p>
              Team Member :{" "}
              <input
                type="text"
                onChange={(e) => {
                  setTeamMember(e.target.value);
                }}
              />{" "}
            </p>
            <p>
              Description :{" "}
              <input
                type="text"
                onChange={(e) => setDescript(e.target.value)}
              />
            </p>
          </form>
          <button
            onClick={() => {
              console.log("ok je recupère dans create list");
            }}
          >
            Créer
          </button>
          
        </div>
      )}
    </>
  );
};
export default CreateList;
