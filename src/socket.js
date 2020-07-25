import config from "./config.js";
import store from "./store/store.js";
import IO from 'socket.io-client';
import { EventBus } from './main.js';

export default {
	Iniciar: function() {
        if (store()) {
            let socket = IO(config.ModeRUN === config.ModeRUNIQ ? config.dominioApi_prod : config.dominioApi_dev);
    
            let user = {};
            if (store().getters.uid) {
                user = {id: store().getters.uid};

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