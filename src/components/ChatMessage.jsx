import RobotProfile from '../assets/robot.png';
import UserProfile from '../assets/user.png';

function ChatMessage(props){
    
    const {message, sender} = props;

    return(
        <div className={
            sender === 'user' ? 'chat-user-message': 'chat-robot-message'
        }>
            {sender === 'robot' && <img src={RobotProfile} width="30px"/> }
            <div className="chat-message-text">
                {message}
            </div>
            {sender === 'user' && <img src={UserProfile} /> }
        </div>
    );
}
export default ChatMessage