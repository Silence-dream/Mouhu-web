import { createStore } from "vuex";
import axios from "axios";
// import { ColumnPropsArr } from "@/components/ColumnList.vue";
import { ColumnPropsArr } from "@/components/ColumnList.vue";
export interface GlobalDataProps {
  columnList: ColumnPropsArr;
}

const store = createStore<GlobalDataProps>({
  state() {
    return {
      columnList: []
    };
  },
  mutations:{
    setColumnList(state,response){
      state.columnList = response;
    }
  },
  actions: {
    async fetchColumnList(context) {
      const { data } = await axios.get("http://api.vikingship.xyz/api/columns");
      if (data.code === 0) {
        context.commit("setColumnList",data.data.list)
      }
    }
  }
});
export default store;
