import './css/styles.css';
import { getData } from './apiCalls';

const userData = await getData('users');
const sleepData = await getData('sleep');
const activityData = await getData('activity');
const hydrationData = await getData('hydration');

import { displayUserInfo } from './domUpdates';
import UserRepo from './UserRepo.js';
import FluidRepo from './FluidRepo.js';


const userRepo = new UserRepo(userData);
const user = userRepo.getRandomUser();
const fluidRepo = new FluidRepo(hydrationData);

const AvgFlOuncesPerDay = fluidRepo.getAvgFlOuncesPerDay(user.id);
const TotalFlOuncesPerDay = fluidRepo.getTotalFlOuncesPerDay(user.id, "2023/03/31");
const WeeklyFlOuncesPerDay = fluidRepo.getWeeklyFlOunces(user.id, "2023/03/31");

const fluidStats = {AvgFlOuncesPerDay, TotalFlOuncesPerDay ,WeeklyFlOuncesPerDay };

displayUserInfo(user, fluidStats);



