import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const key = import.meta.env.VITE_PROJECT_KEY;

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        key, 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket { ...chatProps } />
            <MultiChatWindow { ...chatProps} style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage