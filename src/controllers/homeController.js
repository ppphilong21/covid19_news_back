import db from '../models/index'
import CRUDService from '../services/CRUDService'
import userService from '../services/userService'

let getHomePage = async (req, res) => {
try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", { 
        data: JSON.stringify(data) //đổi object qua JSON
    });
}
catch (e){
    console.log(e);
}

   
    //k cần truyền đường dẫn do ở folder config đã set sẵn
}

let getCRUD = (req, res) => {
    return res.render("crud.ejs");
}

let postCRUD = async (req, res) => {

    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send("crud-post")
}

let displayGetCRUD =  async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render("displayCRUD.ejs", {
        dataDisplayCRUD: data,
    });
}

let getEditCRUD = async (req, res) => {
    let userID = req.query.id;
    if (userID){
        let userData = await CRUDService.getUserInfoById(userID);
        return res.render('editcrud.ejs',{
            userEditCRUD: userData,
        })
    }
    else{
        return res.send("NOT FOUND INFOMATION");
    }
   
}

let getPutCRUD = async (req, res) => {
    let data = req.body;
    let dataID = req.query.id;
    await CRUDService.updateNewCRUD(data, dataID);
    return displayGetCRUD(req, res);
   // return displayGetCRUD();
}

let getDeleteCRUD = async (req, res) => {
    let userID = req.query.id;
    await CRUDService.deleteUserCRUD(userID);
    return res.send("success");
}

let getAPIAllUsers = async (req, res) => {
    let id = req.query.id;
    let users = await userService.getAllUsers(id);

    return res.status(200).json({
        errCode: 0,
        errMessage: "OK",
        users,
    })
}



module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    getPutCRUD: getPutCRUD,
    getDeleteCRUD: getDeleteCRUD,
    getAPIAllUsers: getAPIAllUsers,
}