import { queryGet, mutatePut } from './common'

type Post = {
	id: number
	title: string
	body: string
	userId: number
}
export const listPosts = () => queryGet<Post[]>(`/posts`)
export const getPost = (id: string) => queryGet<Post>(`/posts/${id}`)

type Param = {
	id: string
}
type fn = () => Param
export const getPost2 = (fn: fn) => queryGet<Post>(`/posts/${fn().id}`)

type CreatePostRequest = {
	title: string
	body: string
	userId: number
}
export const createPost = () => mutatePut<CreatePostRequest, {}>(`/posts`)

type UpdatePostRequest = {
	id: number
	title: string
	body: string
	userId: number
}
export const updatePost = (id: string) => mutatePut<UpdatePostRequest, {}>(`/posts/${id}`)
