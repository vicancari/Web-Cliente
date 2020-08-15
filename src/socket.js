import store from "./store/store.js";
import IO from 'socket.io-client';
import { EventBus } from './main.js';

export default {
	Iniciar: function() {
        if (store()) {
            let socket = IO("https://myraus.com:6866");
    
            let user = {};
            if (store().getters.uid) {
                user = {id: store().getters.uid, name: "", photo: ""};

                if (store().getters.user.is_loggin === true) {
                    socket.on('connect', function() { 
                        socket.emit("conectar", user);
                        socket.on('conectadosOnline', function(obj) {
                            console.log("UsersONLINE -> ", obj);
                        });
    
                        socket.on('IngresoReady', obj => {
                            EventBus.$emit('IngresoReady', obj);
                        });
    
                        socket.on('EgresoReady', obj => {
                            EventBus.$emit('EgresoReady', obj);
                        });

                        socket.on('CarritoUpdate', obj => {
                            console.log("SOCKET TROLLEY ->>>>>>>>>>>>>>>>>>>>>>>>>>", obj);
                            EventBus.$emit('EmitTrolleyUpdate', obj);
                        });
                    });
                }
            } else {
                console.log("Error in the data STORE().getters.firstData");
            }
        } else {
            console.log("Error de Store in SOCKET");
        }
	}
};