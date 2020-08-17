import IO from 'socket.io-client';
import { EventBus } from './main.js';

export default {
	Iniciar: function(StoreUser) {
        if (StoreUser.uid != "") {
            let socket = IO("https://myraus.com:6866");
    
            let user = {};
            user = {id: StoreUser.key, name: StoreUser.name + " " + StoreUser.lastname, photo: StoreUser.photo ? StoreUser.photo : ""};

            if (StoreUser.is_loggin === true) {
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
                        EventBus.$emit('EmitTrolleyUpdate', obj);
                    });
                });
            }
        } else {
            console.log("Error de Store in SOCKET");
        }
	}
};