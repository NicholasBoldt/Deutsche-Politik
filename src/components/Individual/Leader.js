import classes from './Leader.module.css';

const Leader = props => {

    return (
      <div className={classes.leader}>
        <div className={classes.title}>{props.title}</div>
        <img
          className={classes.photo}
          src={props.img}
          alt={props.title + " img"}
        />
        <div className={classes.name}>
          <div>{props.name}</div>
          <div>{props.party}</div>
        
        </div>
      </div>
    );

}

export default Leader;