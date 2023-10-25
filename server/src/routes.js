const UserController = require('./controllers/UserController')
const HospitalController = require('./controllers/HospitalController')

module.exports = (app) => {
    /* RESFUL Api dor users management */

    // get all user
    app.get('/users', UserController.index)

    // create user
    app.post('/user', UserController.create)

    // edit user, suspend, active
    app.put('/user/:userId', UserController.put)

    // delete user
    app.delete('/user/:userId', UserController.remove)

    // get user by id
    app.get('/user/:userId', UserController.show)

    app.get('/hospitals', HospitalController.index)

    // create user
    app.post('/hospital', HospitalController.create)

    // edit user, suspend, active
    app.put('/hospital/:hospitalId', HospitalController.put)

    // delete user
    app.delete('/hospital/:hospitalId', HospitalController.remove)

    // get user by id
    app.get('/hospital/:hospitalId', HospitalController.show)


}