import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import {  View } from '../components/Themed';
import { RootTabScreenProps } from '../types'
import ChatListItem from '../components/ChatListItem';

import chatRooms from '../data/ChatRooms';

export default function ChatScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <FlatList
      data={chatRooms}
      renderItem={({item}) => <ChatListItem chatRoom={item}/>}
      keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
