import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
    },
    leftContainer:{
        flexDirection: 'row',
    },
    avatar:{
        width: 55,
        height: 55,
        marginHorizontal: 9,
        borderRadius: 40,
    },
    username:{
        fontWeight: 'bold',
        fontSize: 17,
    },
    lastMessages:{
        fontSize:15,
        color: 'grey',
    },
    time:{
        fontSize:7,
        color: 'black',
    },
    midContainer:{
        justifyContent: 'space-around',
    }

});

export default styles;