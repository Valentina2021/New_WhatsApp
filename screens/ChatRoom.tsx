import React from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
const ChatRoom = () =>{
    const route = useRoute();

    console.log(route.params);
    return(
        <Text>Chat Room here</Text>

    )
}

export default ChatRoom;