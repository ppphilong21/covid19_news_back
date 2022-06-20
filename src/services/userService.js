import bcrypt from 'bcryptjs'
import { del } from 'express/lib/application';
import db from '../models/index'

// let handleCovidCase = async (req, res) => {
//     // lấy email và password mà client gửi lên
//     let city = req.body.city;
//     let totalCaseNumber = req.body.totalCaseNumber;
//     let caseDeath = req.body.caseDeath;
//     let caseRecover = req.body.caseRecover;

//     //kiểm tra xem có tòn tại password vs email không
//     if (!city || !totalCaseNumber || !caseDeath || !caseRecover) {
//         return res.status(500).json({ 
//             errCode: 1,
//             errMessage: "Missing Elements"
//         })
//     }
//     //nếu có đủ password vs email tạo hàm kiểm tra 
//     // sau khi kiểm tra thì trả ra kết quả gồm 3 thuộc tính
//     // 1. errCode, 2. errMessage, 3. user
//     let covidCaseData = await userService.handleUserLogin(city, totalCaseNumber, caseDeath, caseRecover);

//     return res.status(200).json({
//         errCode: covidCaseData.errCode,
//         errMessage: covidCaseData.errMessage,
//         covidCase: covidCaseData.covidCase ? covidCaseData.covidCase : {}
//     })
// }

// let handleUserLogin =  (city, totalCaseNumber, caseDeath, caseRecover) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let covidCaserData = {};

//             //kiểm tra xem có tồn tại email trong database không
//             let isExisted = await checkUserEmail(city);

//             if (isExisted) {
//                 // lấy các thuộc tính của user khi đã thấy email trong database

//                 let covidCase = await db.CovidCase.findOne({ 
//                     attributes: ['city', 'roleID' ,'password'],
//                     where: {
//                         email: email,
//                     },
//                     raw: true
//                 });
//                 //check password
//                 if(user){
//                     let check = await bcrypt.compareSync(password, user.password);
//                     if (check){
//                         userData.errCode = 0;
//                         userData.errMessage = 'Ok';
//                         delete user.password;

//                         userData.user = user;
//                     }
//                     else {
//                         userData.errCode = 3;
//                         userData.errMessage = 'Wrong password';
//                     }
//                 }
//                 else{
//                     userData.errCode = 2;
//                     userData.errMessage = 'User not found';
//                 }
//             }
//             else{
//                 userData.errCode = 1;
//                 userData.errMessage = 'Your email not found';
//             }
//             resolve(userData);
//         }
//         catch(e){
//             reject(e);
//         }
//     })
// }

let checkUserEmail = (userEmail) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.User.findOne({ 
                where: { email: userEmail}
            })
            if (user){
                resolve(true);
            }
            else{
                resolve(false);
            }
        }
        catch(e) {
            reject(e);
        }
    })
}

let getAllCovidCases = (covidCaseID) => {
    return new Promise( async (resolve, reject) => {
        try {
            let covidCases = 'aaaa';
            if (covidCaseID === 'ALL'){
                covidCases= await db.CovidCase.findAll({
                    // attributes: {
                    //     exclude: ['password']
                    // }
                })
            }
            if (covidCaseID && covidCaseID !== 'ALL'){
                covidCases = await db.CovidCase.findOne({
                    where: {id: covidCaseID},
                    // attributes: {
                    //     exclude: ['password']
                    // }
                })
            }
            resolve(covidCases)
        }
        catch (e){
            reject(e);
        }
    })
}
 let getAllHistoryCovidCases = (historyCaseID) => {
    return new Promise( async (resolve, reject) => {
        try {
            let historyCovidCases = 'aaaa';
            if (historyCaseID === 'ALL'){
                historyCovidCases = await db.historyCovidCase.findAll({
                    // attributes: {
                    //     exclude: ['password']
                    // }
                })
            }
            resolve(historyCovidCases)
        }
        catch (e){
            reject(e);
        }
    })
 }
 let getAllCovidNews = (covidNewsID) => {
    return new Promise( async (resolve, reject) => {
        try {
            let CovidNewsAPI = 'aaaa';
            if (covidNewsID === 'ALL'){
                CovidNewsAPI = await db.CovidNew.findAll({
                    // attributes: {
                    //     exclude: ['password']
                    // }
                })
            }
            resolve(CovidNewsAPI)
        }
        catch (e){
            reject(e);
        }
    })
 }

module.exports = {
    //handleUserLogin: handleUserLogin,
    getAllCovidCases: getAllCovidCases,
    getAllHistoryCovidCases: getAllHistoryCovidCases,
    getAllCovidNews: getAllCovidNews,
}