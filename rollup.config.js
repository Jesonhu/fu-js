import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import resolvePlugin from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import packageJSON from './package.json';
import { terser } from 'rollup-plugin-terser';
import { cloneDeep } from 'lodash';
import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';
const pkg = packageJSON;
const getPath = (_path) => path.resolve(__dirname, _path);

const resolve = (dir) => path.join(__dirname, dir);

const extensions = ['.js', '.ts', '.tsx'];

const env = process.env.NODE_ENV;

const outputFile = {
	umd: packageJSON.umd,
	es: packageJSON.es,
	cjs: packageJSON.cjs
}
let usePlugins = []
// 开发环境
if (env.trim().toLowerCase() == 'development') {
	outputFile.umd = 'debug/fu.js'
	outputFile.es = 'debug/fu.es.js'
	outputFile.cjs = 'debug/fu.cjs.js'

	// 插件设置
	usePlugins = [
		commonjs(),
	]
} else {
	usePlugins = [
		commonjs(),
		terser({ compress: { drop_console: true } }),
	]
}

// ts
const tsPlugin = typescript({
	tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
	extensions
});

// 基础配置
// const commonConf = {
// 	input: getPath('./src/main.js'),
// 	plugins: [
// 		// tsPlugin,
// 		terser({ compress: { drop_console: true } })
// 	]
// };

// 最小化版本文件头注释信息
let authorStr = '';
const nowYear = new Date().getFullYear()
pkg.authors.map(i => {
	authorStr += `* ${i} \r`;
});
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) 2020-${nowYear} Authors(排名不分先后):
 ${authorStr}
 *
 * Released under the ${pkg.license} License.
 */
`;


// 最小化版本处理函数
const minimize = (obj) => {
	// 深拷贝
	const minObj = cloneDeep(obj);
	// 文件名添加 .min
	minObj.file =
		minObj.file.slice(0, minObj.file.lastIndexOf('.js')) + '.min.js';
	// 只对最小化版本去除 console，并压缩 js
	minObj.plugins = [
		terser({ compress: { drop_console: true } })
	];
	// 只对最小化版本添加文件头注释信息
	minObj.banner = banner;
	return minObj;
};

const minimizeName = (file) => {
	const out = file.slice(0, file.lastIndexOf('.js') + '.min.js')
	return file
}

console.log('outputFile.umd', outputFile)

export default {
	input: resolve('src/main.js'),
	output: [
		// UMD for browser-friendly build
		{
			name: 'fu',
			file: minimizeName(outputFile.umd), // 通用模块
			format: 'umd',
			banner,
			exports: 'named',
		},
		// CommonJS for Node and ES module for bundlers build
		{
			file: minimizeName(outputFile.es), // 通用模块
			format: 'es',
			banner,
			exports: 'auto'
		},
		{
			file: minimizeName(outputFile.cjs), // 通用模块
			format: 'cjs',
			banner,
			exports: 'auto'
		},
	],
	plugins: usePlugins
}
