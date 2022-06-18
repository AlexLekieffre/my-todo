import { useContext } from "react";
import CreateList from "../Create_list";

const CreatCard = () => {
  const {title, date, teamMember, descript} = useContext({title, date, teamMember, descript})
  console.log(CreatCard.html)
   return (
    <div className="task">
      <p className="titre">title : {title} </p>
      <p className="date">date : </p>
      <p className="teamMember">team member : </p>
      <p className="descript">descript : </p>
    </div>
  );
};

export default CreatCard;
