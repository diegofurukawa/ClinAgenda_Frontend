export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/pages/home/HomePage.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () =>
      import(/* webpackChunkName: "dashboard" */ '@/pages/dashboard/DashboardPage.vue')
  },
  // Status
  {
    path: '/status/list',
    name: 'status-list',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/status/StatusListPage.vue')
  },
  {
    path: '/status/insert',
    name: 'status-insert',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/status/StatusFormPage.vue')
  },
  {
    path: '/status/update/:id',
    name: 'status-update',
    component: () => import(/* webpackChunkName: "status" */ '@/pages/status/StatusFormPage.vue')
  },
  // Specialty
  {
    path: '/specialty/list',
    name: 'specialty-list',
    component: () =>
      import(/* webpackChunkName: "specialty" */ '@/pages/specialty/SpecialtyListPage.vue')
  },
  {
    path: '/specialty/insert',
    name: 'specialty-insert',
    component: () =>
      import(/* webpackChunkName: "specialty" */ '@/pages/specialty/SpecialtyFormPage.vue')
  },
  {
    path: '/specialty/update/:id',
    name: 'specialty-update',
    component: () =>
      import(/* webpackChunkName: "specialty" */ '@/pages/specialty/SpecialtyFormPage.vue')
  },
  // Patient
  {
    path: '/patient/list',
    name: 'patient-list',
    component: () => import(/* webpackChunkName: "patient" */ '@/pages/patient/PatientListPage.vue')
  },
  {
    path: '/patient/insert',
    name: 'patient-insert',
    component: () => import(/* webpackChunkName: "patient" */ '@/pages/patient/PatientFormPage.vue')
  },
  {
    path: '/patient/update/:id',
    name: 'patient-update',
    component: () => import(/* webpackChunkName: "patient" */ '@/pages/patient/PatientFormPage.vue')
  },

  // Doctor
  {
    path: '/doctor/list',
    name: 'doctor-list',
    component: () => import(/* webpackChunkName: "patient" */ '@/pages/doctor/DoctorListPage.vue')
  },
  {
    path: '/doctor/insert',
    name: 'doctor-insert',
    component: () => import(/* webpackChunkName: "patient" */ '@/pages/doctor/DoctorFormPage.vue')
  },
  {
    path: '/doctor/update/:id',
    name: 'doctor-update',
    component: () => import(/* webpackChunkName: "patient" */ '@/pages/doctor/DoctorFormPage.vue')
  }
]

