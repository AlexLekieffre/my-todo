import CreatCard from "./creatCard";
const Liste = (props) => {
  return (
    <>
      <div className="list">
        <div className="list-a-faire">
          <h2>a faire</h2>
          <CreatCard/>
        </div>
        <div className="list-fait">
          <h2>fait</h2>
        </div>
      </div>

      <style jsx="true">{`
        .list {
          display: flex;
          width: 100%;
          height: 60%;
        }
        .list-a-faire,
        .list-fait {
          margin: auto;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Liste;
