import { User } from "../../types";
import "./UserCard.css";

interface UserCardProps {
    user : User;
    }

const UserCard = (props: UserCardProps) => {
    return (
        <div className="user-card">
            <h2>{props.user.name}</h2>
            <p>{props.user.age}</p>
            {props.user.isOnline ? (
                <div className="online">En ligne</div>
            ) : (
                <div className="offline">Hors ligne</div>
            )}
        </div>
    )
}

export default UserCard