import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true } // /teams/t1
      ]
    }, // our-domain.com/teams => TeamsList
    { path: '/users', components: { default: UsersList, footer: UsersFooter }, 
        beforeEnter(to, from, next) {
            console.log('users beforeEnter')
            console.log(to, from)
            next()
        }},
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition){
        return savedPosition
    }
    return { left: 0, top: 0}
  }
});

router.beforeEach(function(to, from, next){
    next();
})

const app = createApp(App);

app.use(router);

app.mount('#app');