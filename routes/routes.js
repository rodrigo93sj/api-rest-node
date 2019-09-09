module.exports = app => {
  app.post('/register', app.app.controllers.user.register)
  app.post('/auth', app.app.controllers.user.auth)
  app.post('/auth/forgot_password', app.app.controllers.user.forgotPassword)
  app.post('/auth/reset_password', app.app.controllers.user.resetPassword)

  app.route('/user')
    .all(app.app.middlewares.authToken.authenticationJWT)
    .get(app.app.controllers.user.userProfile)

  app.route('/projects')
    .all(app.app.middlewares.authToken.authenticationJWT)
    .post(app.app.controllers.project.createProject)
    .get(app.app.controllers.project.getProject)

  app.route('/projects/:projectId')
    .all(app.app.middlewares.authToken.authenticationJWT)
    .get(app.app.controllers.project.getProjectById)
    .delete(app.app.controllers.project.removeProject)
    .put(app.app.controllers.project.updateProject)
}