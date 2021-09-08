import Vuex from "vuex"
import axios from "axios"

const createStore = () => {
    return new Vuex.Store({
        state: {
            // get data
            loadData: []
        },
        mutations: {
            // update or mutate
            setPostState(state, posts) {
                state.loadData = posts
            },
            addPostState(state, post) {
                state.loadData.push(post)
            },
            editPostState(state, editpost) {
                const postIndex = state.loadData.findIndex(
                    post => post.id === editpost.id
                )
                state.loadData[postIndex] = editpost
            }
        },
        actions: {
            // wrap around mutations
            nuxtServerInit(vuesContext, context) {
                return axios.get("https://nuxt-blog-web-c0634-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json")
                    .then(res => {
                        const data = [];
                        for (const key in res.data) {
                            data.push({ ...res.data[key], id: key })
                        }
                        vuesContext.commit("setPostState", data)
                    })
                    .catch(e => context.error(e))
            },
            addPost(vuexContext, post) {
                // from dispatch
                const createPost = {...post}
                return axios
                    .post("https://nuxt-blog-web-c0634-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json", createPost)
                    .then(res => {
                        vuexContext.commit("addPostState", {...createPost, id:res.data.name})
                    })
            },
            editPost(vuexContext, post) {
                return axios
                    .put("https://nuxt-blog-web-c0634-default-rtdb.asia-southeast1.firebasedatabase.app/posts/" + post.id + ".json", post)
                    .then(res => {
                        // commit mutation
                        vuexContext.commit("editPostState", post)
                    })
            }
        },
        getters: {
            // render data
            getAllPosts(state) {
                return state.loadData
            }
        }

    })
}

export default createStore