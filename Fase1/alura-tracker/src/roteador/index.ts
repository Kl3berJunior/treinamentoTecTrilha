import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue';
import Projetos from '../views/Projetos.vue';
import Formulario from '../views/Projetos/Formulario.vue';
import Lista from '../views/Projetos/Lista.vue'

const routas: RouteRecordRaw[] =
    [{
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    }, {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: Lista
            }, {
                path: 'novo',
                name: 'NovoProjeto',
                component: Formulario
            }, {
                path: ':id',
                name: 'EditarProjeto',
                component: Formulario,
                props: true
            }
        ]
    } 
    ];


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: routas
});

export default roteador;