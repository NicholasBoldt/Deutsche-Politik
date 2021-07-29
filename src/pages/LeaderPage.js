import classes from './LeaderPage.module.css';

const LeaderPage = props => {   
    return (
      <div className={classes['leader-page']}>
        <div className={classes.section}>
          <img
            src={props.img}
            alt={props.title + " img"}
            height="500"
            width="350"
          />
          <div className={classes.info}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.text}>{props.desc}</div>
            <div className={classes.name}>
              {props.name} - {props.party}
            </div>
            <div className={classes.text}>{props.incumbent_desc}</div>
          </div>
        </div>
      </div>
    );
}

export default LeaderPage;