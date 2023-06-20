import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue';
import Projetos from '../views/Projetos.vue';

const routas: RouteRecordRaw[] =
    [{
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    }, {
        path: '/Projetos',
        name: 'Projetos',
        component: Projetos
    }];


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: routas
});

export default roteador;