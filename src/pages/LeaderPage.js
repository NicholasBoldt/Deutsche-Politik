import classes from './LeaderPage.module.css';
import Card from '../components/UI/Card';

const LeaderPage = props => {   
    return (
      <Card className={classes['leader-page']}>
        <div className={classes.section}>
          <img
            className={classes.photo}
            src={props.img}
            alt={props.title + " img"}
          />
          <div className={classes.info}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.text}>{props.desc}</div>
            <div className={classes.name}>
              {props.name} - {props.party}
            </div>
            <div className={classes.text}>{props.incumbant_desc}</div>
          </div>
        </div>
      </Card>
    );
}

export default LeaderPage;