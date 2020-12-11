# huhu

使用Vue3模仿慕课知乎专栏写的知乎专栏

-   知乎专栏
-   typescript 
-   axios
-   element-plus
-   bootstrap
-   vuex
-   vue-router
-   vue3.0
-   带有注释解析



...还在施工中.....

项目运行需要解决前端跨域问题

[推荐使用chrome插件]([XSwitch - Chrome 网上应用店 (google.com)](https://chrome.google.com/webstore/detail/xswitch/idkjhjggpffolpidfkikidcokdkdaogg))

这样既可解决跨域问题

喜欢的话给个start吧

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 测试数据

#### 专栏测试数据

```javascript
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }
]
// 测试用户数据
const currentUser: UserProps = {
  isLogin: false,
  name: "罗志祥"
};
```

## 记录
[x] 安装vuex
[]  使用路由前置守卫
[]  使用路由元信息完成权限管理


## 关于
[element-plus-ui](https://element-plus.gitee.io/#/zh-CN/)
[LOOK](http://docs.vikingship.xyz/)