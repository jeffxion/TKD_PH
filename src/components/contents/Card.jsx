const Card = ({ title, subTitle, icon, classColor }) => {
  return (
    <div className="col-sm-6 col-xl-3">
      <div className="information-item">
        <div className={`info-inner ${classColor}`}>
          <div className="right-icon">
            {icon}
          </div>
          <div className="icon">
            {icon}
          </div>
          <h5 className="title">{title}</h5>
          <span className="info">{subTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
