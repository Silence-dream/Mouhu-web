import { createStore } from "vuex";
export interface GlobalDataProps {
  msg: string;
}

const store = createStore<GlobalDataProps>({
  state() {
    return {
      msg: "this is asd"
    };
  }
});
export default store;
