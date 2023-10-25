import Vue from 'vue'
import Router from 'vue-router'

//Users

import HospitalIndex from '@/components/Hospitals/Index'
import HospitalCreate from '@/components/Hospitals/CreateHospital'
import HospitalEdit from '@/components/Hospitals/EditHospital'
import HospitalShow from '@/components/Hospitals/ShowHospital'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/hospitals',
            name: 'hospitals',
            component: HospitalIndex
        },
        {
            path: '/hospital/create',
            name: 'hospitals-create',
            component: HospitalCreate
        },
        {
            path: '/hospital/edit/:hospitalId',
            name: 'hospitals-edit',
            component: HospitalEdit
        },
        {
            path: '/hospital/:hospitalId',
            name: 'hospital',
            component: HospitalShow
        },

    ]
})