import dayjs from 'dayjs';

export default class FluidRepo {
    constructor(fluidData) {
        this.data = fluidData.hydrationData
    }

    getAvgFlOuncesPerDay(userId){
        const userData = this.data.filter((user) => user.userID === userId);
        const dailyFlOunces = userData.map((data) => data.numOunces);
        const totalFlOunces = dailyFlOunces.reduce((a, b) => a + b, 0);
        return totalFlOunces / dailyFlOunces.length;

    }

    getTotalFlOuncesPerDay(userId, date) {
        const userData = this.data.find((user) => user.userID === userId && user.date === date);
        return userData.numOunces
    }

    getWeeklyFlOunces(userId, date){
        const endDate = dayjs(date).toDate();
        const startDate = dayjs(date).subtract(7, 'd').toDate();
        const userData = this.data.filter((user) => user.userID === userId);
        const weeklyData = userData.filter((date) => {
            const dateObj = new Date(date.date);
            return dateObj >= startDate && dateObj < endDate;
        })
        return weeklyData;
    }
}

