import classes from './Leader.module.css';

const Leader = props => {

    return <div>
        <div className={classes.title}>{props.title}</div>
        <img className='leader-img' src={props.img} alt={props.title + ' img'} height="500" width='350'/>
        <div className={classes.name}>{props.name} - {props.party}</div>
    </div>;

}

export default Leader;