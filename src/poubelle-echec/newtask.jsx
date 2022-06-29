function NewTask(props) {
  const title = props.title,
    date = props.date,
    teamMember = props.teamMember,
    descript = props.descript;
  var count = props.count;

  return (
    <div className={count}>
      <p className="titre">title : {title} </p>
      <p className="date">date : {date}</p>
      <p className="teamMember">team member : {teamMember}</p>
      <p className="descript">descript : {descript} </p>
    </div>
  );
}
export default NewTask;
