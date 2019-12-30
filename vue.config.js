 module.exports = {
    /** 
     *  部署生产环境和开发环境下的URL。
     *  默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
     *  例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
     *  baseUrl 从 Vue CLI 3.3 起已弃用，请使用publicPath
     *  baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
     */
     publicPath: process.env.NODE_ENV === 'production'? './':'/',
     
     // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
     outputDir: "dist",
     
     //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
     assetsDir: "vueResource",
     
     //指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
     // indexPath: "index.html",
     
     //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
     filenameHashing: false,
     
     lintOnSave:false,//是否开启eslint保存检测 ,它的有效值为 true || false || 'error'
   
     /**
     * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
     *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
     *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
     *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
     */
     productionSourceMap: false,
     
     // 它支持webPack-dev-server的所有选项
     devServer: {
         host: "localhost",
         port: 8090, // 端口号
         https: false, // https:{type:Boolean}
         open: false, //配置自动启动浏览器
         
         // 配置跨域处理
         //只有一个代理,这会告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://localhost:4000
         //如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。
         //proxy: 'http://localhost:4000',
         
         // 配置多个代理
   //      proxy: {
            //  "/api": {
            //      target: "http://localhost:8080",// 要访问的接口域名
            //      ws: false,// 是否启用websockets
            //      changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            //      pathRewrite: {'^/api': '' }//这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
            //  },
             // "/foo": {
             // 	target: "<other_url>"
             // }
  //       }
     }
 
 }