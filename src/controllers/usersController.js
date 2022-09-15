import db from '../models/index'
import userService from '../services/userService'


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

    return res.status(200).json({
       
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
      
    return res.status(200).json({
        
        CovidNewsAPI
    })
}


module.exports = {
 
   getAPIAllHistoryCovidCases: getAPIAllHistoryCovidCases,
   getAPIAllCovidCases: getAPIAllCovidCases,
   getAPIAllCovidNews: getAPIAllCovidNews,
}