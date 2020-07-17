import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Container, CenterForm } from './style'


function useManageData(){
    const [username, setUsernanme] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(false)
    const [button, setButton] = useState(false)
    if(button){
        firebase.auth().signInWithEmailAndPassword(username, password).then(async _ =>{
            setUser(await firebase.auth().currentUser);
            button = false;
        })
    }
    
    
    return {username, setUsernanme, password, setPassword, user, setButton}

}

export const Login = () => {
    const { username, setUsernanme, password, setPassword, user, setButton} = useManageData()
    if(user) {return <div>Loged in </div>}
    else return(
    <Container>
        <CenterForm>
            <label for="name">Username:</label>
            <input type="name" value={username} onChange={e => {setUsernanme(e.target.value)}}/>
            <label for="username">Password:</label>
            <input type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
            <div id="lower">
                <button onClick={e => {setButton(true)}}>Ingresar</button>
            </div>
        </CenterForm>
    </Container>)
}