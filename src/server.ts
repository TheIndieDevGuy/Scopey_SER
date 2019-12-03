import { createServer,Server  } from "http";

import * as io from "socket.io";
import {SocketController} from './socketController';

export class SocketServer{
    public static readonly PORT:number=2222;
    private SocketController:SocketController;
    private httpConnection:Server;
    private socketHandler:SocketIO.Server;

    constructor(){
        this.httpConnection=createServer();
        this.socketHandler=io(this.httpConnection);
        this.SocketController=new SocketController(this.socketHandler);
        this.listen();
    }
    private listen(): void{
        this.httpConnection.listen(SocketServer.PORT,()=>{console.log("Server Is Listening at port %d",SocketServer.PORT);
    });
    }
}