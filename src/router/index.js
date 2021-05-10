import { createRouter, createWebHistory } from 'vue-router'
import Category from 'views/category/category'
import Home from 'views/home/home'
import Profile from 'views/profile/profile'
// 懒加载
const Shopcar = ()=> import('views/shopcar/shopcar')
const Detail = () => import('views/detail/Detail')

const routes = [
{
  path:'',
  redirect:'/home'
},
{
  path:'/home',
  component:Home
},
{
  path:'/category',
  component:Category
},
{
  path:'/detail/:id',
  name:'detail',
  component:Detail
},
{

  path:'/profile',
  coponent:Profile
},

{
  path:'/shopcar',
  component:Shopcar
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
