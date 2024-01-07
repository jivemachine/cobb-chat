// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const key = import.meta.env.VITE_PROJECT_KEY;

const ChatsPage = (props) => {
    // const chatProps = useMultiChatLogic(
    //     key, 
    //     props.user.username, 
    //     props.user.secret
    // );
    return (
        // react-chat-engine-advanced ui
        // <div style={{ height: '100vh' }}>
        //     <MultiChatSocket { ...chatProps } />
        //     <MultiChatWindow { ...chatProps} style={{ height: '100%' }} />
        // </div>

        // pretty chat window ui
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId={key}
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>

    )
}

export default ChatsPage