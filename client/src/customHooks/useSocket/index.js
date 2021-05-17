import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import io from "socket.io-client";
import { addSocket, addMarker } from '../../actions'

function useSocket(id){
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    useEffect(() => {
        const socket = io('http://localhost:3000')
        dispatch(addSocket(socket))
        socket.emit("join", {room: id, username: user});
  
        socket.on("join response", (data) => {
            console.log(data)
            console.log(`${data.username} has joined ${data.room}`)
          });
  
          socket.on("leave response", (data) => {
            console.log(data)
            console.log(`${data.username} has left ${data.room}`)
          });
  
          socket.on("connected sockets", (data) => {
            console.log(data)
          });

          socket.on("server marker", (data) => {
            dispatch(addMarker(data))
          });
          return () => { 
            socket.disconnect()
          }
    },[])
}

export default useSocket