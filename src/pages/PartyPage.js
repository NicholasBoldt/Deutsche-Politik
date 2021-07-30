const PartyPage = props => {
    return <div>
        <div>{props.name}</div>
        <div>{props.initals}</div>
        <div>{props.leader}</div>
        <div>{props.ideology}</div>
        <div>{props.desc}</div>
        <img src={props.logo} alt="party logo" height='250' width='250'/>
    </div>;
}

export default PartyPage;