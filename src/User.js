export default class User {
    constructor(userData) {
        this.address = userData.address;
        this.dailyStepGoal = userData.dailyStepGoal;
        this.email = userData.email;
        this.friends = userData.friends;
        this.id = userData.id;
        this.name = userData.name;
        this.strideLength = userData.strideLength;
    }

    getFirstName(){
        const firstName = this.name.split(" ")[0];
        return firstName;
    }
}