import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Login from "@/views/Login";
import Home from "@/views/Home";
import Dashboard from "@/views/dashboard/Dashboard";
import WriteBlog from "@/views/blog/blog/WriteBlog";
import BlogList from "@/views/blog/blog/BlogList";
import CommentList from "@/views/blog/comment/CommentList";
import Visitor from "@/views/statistics/Visitor";
import Register from "@/views/Register";
import {SAVE_NAV_STATE} from "@/store/mutations-types";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/login',
		component: Login,
		meta: {
			title: '后台管理登录'
		}
	},
	{
		path: '/register',
		component: Register,
		meta: {
			title: '后台管理注册'
		}
	},
	{
		path: '/home',
		component: Home,
		redirect: '/dashboard',
		children: [
			{
				path: '/dashboard',
				component: Dashboard,
				meta: {
					title: '仪表盘'
				}
			},
			{
				path: '/blogs/write',
				component: WriteBlog,
				meta: {
					title: '写文章'
				}
			},
			{
				path: '/blogs/edit/:id',
				component: WriteBlog,
				meta: {
					title: '编辑文章'
				}
			},
			{
				path: '/blogs',
				component: BlogList,
				meta: {
					title: '文章管理'
				}
			},
			{
				path: '/comments',
				component: CommentList,
				meta: {
					title: '评论管理'
				}
			},
			{
				path: '/visitor',
				component: Visitor,
				meta: {
					title: '访客统计'
				}
			},
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

//挂载路由守卫
router.beforeEach((to, from, next) => {
	if (['/login','/register'].indexOf(to.path)==-1) {
		//获取token
		const tokenStr = window.localStorage.getItem('token')
		if (!tokenStr) return next("/login")
	}
	if (to.meta.title) {
		if (store.state.webTitleSuffix) {
			document.title = to.meta.title + store.state.webTitleSuffix
		} else {
			document.title = to.meta.title
		}
	}
	router.app.$options.store.commit(SAVE_NAV_STATE, to.path)
	next()
})

export default router
