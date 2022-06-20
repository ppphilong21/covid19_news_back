import db from '../models/index'
import userService from '../services/userService'

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

let getAPIAllCovidCases = async (req, res) => {
    let id = req.query.id;
    console.log(id);
    if (!id) {
        return res.status(200).json({ 
            errCode: 1,
            errMessage: "Mising required parameters",
            covidCases: []
        })
    }
    let covidCases = await userService.getAllCovidCases(id);
        //console.log(users);
    return res.status(200).json({
        // errCode: 0,
        // errMessage: "OK",
        // users,
       covidCases
    })
} 
let getAPIAllHistoryCovidCases = async (req, res) => {
    let id = req.query.id;
    console.log(id);
    if (!id) {
        return res.status(200).json({ 
            errCode: 1,
            errMessage: "Mising required parameters",
            historyCovidCases: []
        })
    }
    let historyCovidCases = await userService.getAllHistoryCovidCases(id);
        //console.log(users);
    return res.status(200).json({
        // errCode: 0,
        // errMessage: "OK",
        // users,
       historyCovidCases
    })
}

let getAPIAllCovidNews = async (req, res) => {
    let id = req.query.id;
    console.log(id);
    if (!id) {
        return res.status(200).json({ 
            errCode: 1,
            errMessage: "Mising required parameters",
            CovidNewsAPI: []
        })
    }
    let CovidNewsAPI = await userService.getAllCovidNews(id);
        //console.log(users);
    return res.status(200).json({
        // errCode: 0,
        // errMessage: "OK",
        // users,
        CovidNewsAPI
    })
}


module.exports = {
  // handleCovidCase:handleCovidCase,
   getAPIAllHistoryCovidCases: getAPIAllHistoryCovidCases,
   getAPIAllCovidCases: getAPIAllCovidCases,
   getAPIAllCovidNews: getAPIAllCovidNews,
}