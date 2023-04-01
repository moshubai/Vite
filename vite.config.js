import react from '@vitejs/plugin-react';
import postcss from 'postcss-pxtorem';
import { defineConfig, loadEnv } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import svgr from 'vite-plugin-svgr';

export default defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd());

  return {
    // base: env.VITE_API_ROUTER_URL + '/',
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
      alias: [{ find: '@', replacement: '/src' }],
      optimizeDeps: {
        // include 默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
        include: ['antd-mobile-icons'],
        // 设置为 true 强制使依赖预构建
        // force: true,
      },
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      vitePluginImp({
        libList: [
          {
            libName: 'antd-mobile',
            libDirectory: 'es/components',
            style(name) {
              return `antd-mobile/es/components/${name}/${name}.css`;
            },
          },
        ],
      }),
      svgr(),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // modifyVars: themeVariables,
        },
      },
      postcss: {
        plugins: [
          postcss({
            // 把px单位换算成rem单位
            rootValue: 16, // 换算基数，默认100，这样的话把根标签的字体规定为1rem
            //为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            propList: ['*'], //属性的选择器，*表示通用
            unitPrecision: 5, // 允许REM单位增长到的十进制数字,小数点后保留的位数。
            exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达
            //式 排除某些文件夹的方法
          }),
        ],
      },
    },
    build: {
      emptyOutDir: true,
      outDir: env.VITE_API_BUILD_URL,
      commonjsOptions: { transformMixedEsModules: true },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    //静态资源处理  字符串|正则表达式
    assetsInclude: '',
    //调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
    logLevel: 'info',
    //设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    clearScreen: true,
    // 服务
    server: {
      // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      host: 'localhost',
      port: 9966,
      // 设为 true ,若端口已被占用则会直接退出，而不是尝试下一个可用端口
      strictPort: false,
      // 是否自动在浏览器打开
      open: false,
      // 是否开启 https
      https: false,
      // 为开发服务器配置 CORS
      cors: true,
      proxy: {
        '/api/v1': {
          target: 'http://www.keyrus.tech:7000/eorder-oper',
          changeOrigin: true,
        },
      },
    },
    // esbuild: {
    //   logOverride: { 'this-is-undefined-in-esm': 'silent' },
    // },
  };
});
