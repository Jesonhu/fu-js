import typescript from 'rollup-plugin-typescript2';
import path from 'path';
import packageJSON from './package.json';
import { terser } from 'rollup-plugin-terser';
import { cloneDeep } from 'lodash';
const pkg = packageJSON;
const getPath = (_path) => path.resolve(__dirname, _path);

const resolve = (dir) => path.join(__dirname, dir);

const extensions = ['.js', '.ts', '.tsx'];

const env = process.env.NODE_ENV;

const outputFile = {
	umd: packageJSON.main,
	es: packageJSON.module
}
if (env === 'development') {
	outputFile.umd = 'debug/fu.js'
	outputFile.es = 'debug/fu.modern.js'
}

console.log('outputFile', env, outputFile)

// ts
const tsPlugin = typescript({
	tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
	extensions
});

// 基础配置
const commonConf = {
	input: getPath('./src/main.ts'),
	plugins: [
		tsPlugin,
		terser({ compress: { drop_console: true } })
	]
};

// 需要导出的模块类型
const outputMap = [
	{
		file: outputFile.umd, // 通用模块
		format: 'umd',
		name: pkg.name
	},
	{
		file: outputFile.es, // es6模块
		format: 'es',
		name: pkg.name
	}
];

// 最小化版本文件头注释信息
let authorStr = '';
pkg.authors.map(i => {
	authorStr += `* ${i} \r`;
});
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) 2020-2021 Authors(排名不分先后):
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

// const buildConf = (options) => Object.assign({}, commonConf, options);

// export default outputMap.map((output) =>
// 	buildConf({ output: { name: packageJSON.name, ...output } })
// );

export default {
	input: resolve('src/main.ts'),
	output: [
		...outputMap,
		...outputMap.map(type => {
			type.file = resolve(type.file);
			return minimize(type);
		})
	],
	plugins: [
		tsPlugin
		// terser({ compress: { drop_console: true } })
	]
};
