

export default {
  use(router) {
    router.beforeEach((to, from, next) => {
      // 跟路由默认跳转到中文网站
      if (to.path === '/') {
        next('/zh/');
        return;
      }
      this.setTheme(to);
      this.setI18n(to, from);
      next();
    });
  }
};
