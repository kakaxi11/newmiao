export default {
     path: '/cinema',
     component: () => import('../../../src/views/cinema'),
     children:[{ path: '/cityAll', component:()=>import('../../views/cinema/cityAll.vue')}]
  }


