import User from './User.js';

export default class UserRepo {
    constructor(data) {
        this.data = data.users;
    }

    getRandomUser(){
        const randomUserData = this.data[Math.floor(Math.random()* this.data.length)];
        const randomUser = new User(randomUserData);
        return randomUser;
    }

    getUserData(userId){
        const userData = this.data.users.filter((user) => user.id === userId);
        return userData;
    }

    getAvgSteps(){
        const allUserSteps = this.data.users.map((user) => user.dailyStepGoal);
        const totalSteps = allUserSteps.reduce((a, b) => a + b, 0);
        return (totalSteps / allUserSteps.length);
    }
}

