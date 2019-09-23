module.exports = app => {
  const { router, controller } = app;
  router.get('userInfo', '/api/user/:id/user', controller.user.info);
}