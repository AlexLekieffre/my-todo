import CreatCard from "./atoms/creatCard";
const { useState } = require("react");

const CreateList = () => {
  const [title, setTitle] = useState(""),
    [date, setDate] = useState([]),
    [teamMember, setTeamMember] = useState(""),
    [descript, setDescript] = useState("");

  return (
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
          <input type="text" onChange={(e) => setDescript(e.target.value)} />
        </p>
      </form>
      <button
        onClick={(e) => {
          console.log("Titre :", title);
          console.log("date :", date);
          console.log("team member : ", teamMember);
          console.log("la description : ", descript);
          CreatCard(title, date, teamMember, descript);
          console.log("ok");
        }}
      >
        Créer
      </button>
      <div className="myTask">{<CreatCard />}</div>
    </div>
  );
};
export default CreateList;
