import express from "express";
import homeController from "../controllers/homeController"
import usersController from "../controllers/usersController"
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    //CRUD routes
    router.get('/crud', homeController.getCRUD);

    //post-crud
    router.post('/post-crud', homeController.postCRUD);

    //display-data
    router.get("/display-data", homeController.displayGetCRUD);

    //edit-data
    router.get("/edit-crud", homeController.getEditCRUD);

    //put-edit-data
    router.post("/put-crud", homeController.getPutCRUD);

    //delete-data
    router.get("/delete-crud", homeController.getDeleteCRUD);


    //router.post('/api/covid-case', usersController.handleCovidCase);
    //get-api data
    router.get("/api/get-api-covidCase", usersController.getAPIAllCovidCases)
    router.get("/api/get-api-covidHistoryCase", usersController.getAPIAllHistoryCovidCases)
    router.get("/api/get-api-covid-news",  usersController.getAPIAllCovidNews)
    return app.use("/", router);
  
}

module.exports = initWebRoutes;