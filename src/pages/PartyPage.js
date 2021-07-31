import classes from './PartyPage.module.css'
import { useParams } from "react-router-dom";


const PartyPage = props => {
    const params = useParams();
    const party = props.parties.find(party => party.id === params.partyId);

    return <div>
        <div>{party.name}</div>
        <div>{party.initals}</div>
        <div>{party.leader}</div>
        <div>{party.ideology}</div>
        <div>{party.desc}</div>
        <img src={party.logo} alt="party logo" height='250' width='250'/>
    </div>;
}

export default PartyPage;