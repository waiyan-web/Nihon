import { createRouter, createWebHistory } from 'vue-router';
import Index from '../components/Index.vue';
import Listening from '../components/Listening.vue';
import Voc from '../components/Voc.vue';
import Grammar from '../components/grammar.vue';
import Kanji from '../components/kanji.vue';
import Reading from '../components/reading.vue';
import Oldq from '../components/oldq.vue';


const routes = [
    { path: '/', component: Index },
    { path: '/listening', component: Listening },
    { path: '/voc', component: Voc },
    { path: '/reading', component: Reading },
    { path: '/grammar', component: Grammar },
    { path: '/oldq', component: Oldq },
    { path: '/kanji', component: Kanji },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
