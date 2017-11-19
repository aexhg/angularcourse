

export class CounterService {

    inactiveToActiveSwitches = 0;
    activeToInactiveSwitches = 0;

    addToInactive(){
        this.activeToInactiveSwitches += 1;
        console.log('User switched to inactive count' + this.activeToInactiveSwitches)
    }

    addToActive(){
        this.inactiveToActiveSwitches += 1;
        console.log('User switched to active count' + this.inactiveToActiveSwitches);
    }

}