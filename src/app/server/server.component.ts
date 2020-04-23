// a component is simply a class, and here is where we set up the blueprint

// the import appeared automatically after I added the @Component()
import { Component } from '@angular/core';

// we need to let Angular know this is a component and not just a class.
// we do that using a decorator @

// we pass it an object that lets Angular what to do with this class
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})

export class ServerComponent { 

    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getServerStatus() {
        return this.serverStatus
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red'
    }
}