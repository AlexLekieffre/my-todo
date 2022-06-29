function CreatCard(props) {
  const title = props.title,
    date = props.date,
    teamMember = props.teamMember,
    descript = props.descript;

  if (title !== undefined) {
    console.log(
      "ok je recupère les info de create liste dans creatcard ",
      title,
      " ",
      date,
      " ",
      teamMember,
      " ",
      descript
    );
  } else {
    console.log("faux jai rien recupéré");
  }

  return (
    <div className="task">
      <p className="titre">title : {title} </p>
      <p className="date">date : {date}</p>
      <p className="teamMember">team member : {teamMember}</p>
      <p className="descript">descript : {descript} </p>
    </div>
  );
}

export default CreatCard;
