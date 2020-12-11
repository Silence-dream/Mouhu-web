import { createStore } from "vuex";
import axios from "axios";
export interface GlobalDataProps {
  columnList: ColumnPropsArr;
  columnDetail: ColumnProps;
  postList: PostListPropsArr;
}
const store = createStore<GlobalDataProps>({
  state() {
    return {
      // 专栏列表
      columnList: [],
      // 专栏详情
      columnDetail: {},
      // 属于专栏的文章
      postList: []
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
