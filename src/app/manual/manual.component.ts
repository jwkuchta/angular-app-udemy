import { Component } from '@angular/core'
// import { runInThisContext } from 'vm'

@Component({
    selector: 'app-manual',
    styles: [`
        h1 {
            font-size: 20px;
            color: navy;
        }

        .styled {
            background-color: blue;
            color: white;
            font-decoration: bold;
        }
    `],
    templateUrl: './manual.component.html'
})

export class ManualComponent {
    
    username = ''
    emptyString = true
    randomNumber = 100 * (Math.random())
    showDetails = false
    clicks = []
    count = 0
    styled = false

    onInput(e) {
        if(e.target.value !== '') {
            this.emptyString = false
        }
    }

    onClick() {
        this.showDetails = !this.showDetails
        this.count = this.clicks.push(this.clicks.length + 1)
        // the following conditional statement styled all clicks, not just 5 +
        // if(this.count >= 5) {
        //     this.styled = true
        // }
    }

    onUserReset() {
        this.username = ''
        this.emptyString = true
    }
}