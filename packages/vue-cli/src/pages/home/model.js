import $match from 'vanilla.js/path-to-regexp/match';


export const namespace = 'home';


const initialState = {
};

const actions = {
  HomeIndexPage: async ({ state, commit, dispatch }, { pathname, query, params }) => {
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
  { path: '/home', component: () => import('./HomeIndexPage') },
];

export const subscriptions = (dispatch, pathname, query) => {
  $match('/home', pathname, (params) => dispatch(`${namespace}/HomeIndexPage`, { pathname, query, params }));
};
