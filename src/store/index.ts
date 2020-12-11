import { createStore } from "vuex";
import axios from "axios";
export interface GlobalDataProps {
  columnList: ColumnPropsArr;
  columnDetail: ColumnProps;
  postList: PostListPropsArr;
  user: UserProps;
  token: string;
}
const store = createStore<GlobalDataProps>({
  state() {
    return {
      // 专栏列表
      columnList: [],
      // 专栏详情
      columnDetail: {},
      // 属于专栏的文章
      postList: [],
      // 用户是否登陆
      user: {
        isLogin: false || Boolean(localStorage.getItem("token"))
      },
      token: localStorage.getItem("token") || ""
    };
  },
  mutations: {
    // 获取专栏列表
    setColumnList(state, response) {
      state.columnList = response;
    },
    // 获取专栏详情
    setColumnDetail(state, response) {
      state.columnDetail = response;
    },
    // 获取属于专栏的文章
    setPostList(state, response) {
      state.postList = response;
    },
    // 获取属于专栏的文章
    setToken(state, response) {
      state.token = response;
      // 设置本地存储
      localStorage.setItem("token", response);
      // 设置用户登录
      state.user.isLogin = true;
    },
    // 设置用户信息
    setUser(state, response: UserProps) {
      state.user._id = response._id;
      state.user.column = response.column;
      state.user.nickName = response.nickName;
    }
  },
  actions: {
    async fetchColumnList(context) {
      const { data } = await axios.get("/columns");
      if (data.code === 0) {
        context.commit("setColumnList", data.data.list);
      }
    },
    async fetchColumnDetail(context, id: string) {
      const { data } = await axios.get(`/columns/${id}`);
      if (data.code === 0) {
        context.commit("setColumnDetail", data.data);
      }
    },
    async fetchPostList(context, obj: FetchPostListPropsParams) {
      const { data } = await axios.get(`/columns/${obj.id}/posts`, {
        params: { page: obj.page, size: obj.size }
      });
      if (data.code === 0) {
        context.commit("setPostList", data.data.list);
      }
    },
    // 登陆
    async fetchGetToken(context, userInfo: UserInfo) {
      const { data } = await axios.post("/user/login", {
        email: userInfo.email,
        password: userInfo.password
      });
      context.commit("setToken", data.data.token);
      axios.defaults.headers.Authorization = `Bearer ${context.state.token}`;
      context.dispatch("fetchGetInfo");
    },
    // 获取用户信息
    async fetchGetInfo(context) {
      // 获取用户信息
      let getuserInfo = await axios.get("/user/current");
      getuserInfo = getuserInfo.data.data;
      // console.log("getuserInfo", getuserInfo);
      context.commit("setUser", getuserInfo);
    }
  }
});
export default store;

// ColumnList数据结构
export interface ColumnProps {
  _id?: string;
  createdAt?: string;
  avatar?: AvatarProps;
  featured?: boolean;
  author?: string;
  description?: string;
  title?: string;
  key?: string;
}
interface AvatarProps {
  _id?: string;
  url?: string;
  createdAt?: string;
}
export type ColumnPropsArr = ColumnProps[];

// 属于专栏的文章
interface PostListProps {
  createdAt: string;
  image: {
    _id: string;
    url: string;
  };
  column: string;
  author: string;
  excerpt: string;
  title: string;
  _id: string;
  key: number;
}
type PostListPropsArr = PostListProps[];

interface FetchPostListPropsParams {
  id: string;
  page?: string | "1";
  size?: string | "5";
}

// 用户登录
export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  column?: string;
  _id?: string;
}

// 登陆
interface UserInfo {
  readonly email: string;
  readonly password: string;
}
