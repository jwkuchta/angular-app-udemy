import { Component } from '@angular/core'

@Component({
    selector: 'app-manual',
    styles: [`
        h1 {
            font-size: 20px;
            color: navy;
        }
    `],
    templateUrl: './manual.component.html'
})

export class ManualComponent {
    
    username = ''
    emptyString = true

    onInput(e) {
        if(e.target.value !== '') {
            this.emptyString = false
        }
    }

    onUserReset() {
        this.username = ''
        this.emptyString = true
    }
}