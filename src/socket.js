import IO from 'socket.io-client';
import { EventBus } from './main.js';

export default {
	Iniciar: function(ObjUser) {
        if (ObjUser.uid != "") {
            let socket = IO("https://myraus.com:6866");
            global.SESIONACTUAL = socket;
            
            console.log("Ya estamos dentro del iniciar....");
            let user = {};
            user = {id: ObjUser.uid, name: ObjUser.name, photo: ObjUser.photo, app: "web-personas"};

            socket.on('connect', function() {
                socket.emit("conectar", user);
                socket.on('conectadosOnline', function(obj) {
                    console.log("user_online: ", obj);
                });

                socket.on('recibirmensaje', obj => {
                    console.log("Message -> ", obj);
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
        } else {
            console.log("Error de Store in SOCKET");
        }
    },
    Desconectar: function() {
        if (global.SESIONACTUAL) {
            console.log("Desconectado socket... Por favor espere....");
            global.SESIONACTUAL.disconnect();
            console.log("¡Socket desconectado!");
        }
    }
};