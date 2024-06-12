import Vue from 'vue';
import Router from 'vue-router';
import { routes as routesHome, subscriptions as subscriptionsHome } from './pages/home/model';
import { routes as routesNotFound, subscriptions as subscriptionsNotFound } from './pages/notfound/model';
import store from './store';


Vue.use(Router);


const router = new Router({
  mode: 'history',

  routes: [
    ...routesHome,
    ...routesNotFound,
  ],
});


router.beforeEach((to, from, next) => {
  // console.log(from);
  const { path: pathname, query /* hash, name, meta */ } = to;
  subscriptionsHome(store.dispatch, pathname, query);
  subscriptionsNotFound(store.dispatch, pathname, query);
  next();
});

export default router;
