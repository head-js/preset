import $match from 'vanilla.js/path-to-regexp/match';


export const namespace = 'notfound';


const initialState = {
};

const actions = {
  NotFoundPage: async ({ state, commit, dispatch }, { pathname, query, params }) => {
    console.log(pathname, query, params);
  },
};

const mutations = {
};

export const module = {
  [namespace]: {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
  },
};

export const routes = [
  { path: '/404', component: () => import('./NotFoundPage') },
];

export const subscriptions = (dispatch, pathname, query) => {
  $match('/404', pathname, (params) => dispatch(`${namespace}/NotFoundPage`, { pathname, query, params }));
};
