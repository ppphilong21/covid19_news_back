import bcrypt from 'bcryptjs'
import db from '../models/index'
const salt = bcrypt.genSaltSync(10);
//đẩy đẩy data từ req/controller vào database

let creatNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let handPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: handPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                roleID: data.roleID,
                phoneNumber: data.phoneNumber,
            })
            resolve('okk create sth news')
        }
        catch(err) {
            reject(err);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise( async (resolve, reject) => {
            try{
                var hashPassword = await bcrypt.hashSync(password, salt);
                resolve(hashPassword);
            }
            catch(err){
                reject(err);
            }   
    })
}

let getAllUser = () => {
    return new Promise( async (resolve, reject) => {
        try{
            let users = db.User.findAll({
                raw: true, //in ra những thứ cần thiết
            });
            resolve(users);
        }
        catch(err){
            reject(err);
        }
    })
}

let getUserInfoById = (userID) => {
    return new Promise( async (resolve, reject) => {
        try{
            let userId = await db.User.findOne({
                where: {
                    id: userID,
                }
            })
            if (userId){
                resolve(userId);
            }
            else{
                console.log("NOT FOUND INFOMATION")
            }
        }
        catch(err){
            reject(err);
        }
    })
}

let updateNewCRUD = async (newData, dataID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { 
                    id : dataID,
                }
            })
            if (user) {
                user.email = newData.email;
                user.firstName = newData.firstName;
                user.lastName = newData.lastName;
                user.address = newData.address;
                user.phoneNumber = newData.phoneNumber;
                user.gender = newData.gender;
                user.roleID = newData.roleID;

                await user.save(); //đợi nó lưu lại vào database
                resolve();
            }
            else{
                resolve("abc");
            }
        }
        catch(err) {
            reject(err);
        }
    })

}
let deleteUserCRUD = async (userID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { 
                    id : userID,
                }
            })
            if (user) {
                await user.destroy(); //đợi nó lưu lại vào database
                resolve();
            }
            else{
                resolve("abc");
            }
        }
        catch(err) {
            reject(err);
        }
    })
}

module.exports = {
    creatNewUser: creatNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateNewCRUD: updateNewCRUD,
    deleteUserCRUD: deleteUserCRUD,
}