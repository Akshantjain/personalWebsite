import firebase from 'firebase/app'
import 'firebase/database'

export const getData = async () => {
    let data;
    await firebase.database().ref('Website data').once('value', snapshot => {
        data = snapshot.val();  
    })
    return data;
}
