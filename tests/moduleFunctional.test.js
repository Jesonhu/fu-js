import addAssetsBaseUrl from '../src/addAssetsBaseUrl'
import addAssetsBaseUrlFromArray from '../src/addAssetsBaseUrlFromArray'
import addAssetsBaseUrlFromObject from '../src/addAssetsBaseUrlFromObject'
import addAssetsBaseUrlFromRichText from '../src/addAssetsBaseUrlFromRichText'
import addZero from '../src/addZero'
import chTimeHello from '../src/chTimeHello'
import CustomEventEmitter from '../src/CustomEventEmitter'
import deepClone from '../src/deepClone'
import extend from '../src/extend'
import getNumberPercent from '../src/getNumberPercent'
import getPaginationPageCount from '../src/getPaginationPageCount'
import getQueryParameters from '../src/getQueryParameters'
import hideSourceName from '../src/hideSourceName'
import isEmpty from '../src/isEmpty'
import isFunction from '../src/isFunction'
import isUndefined from '../src/isUndefined'
import numPrecision from '../src/numPrecision'
import obj2Arr from '../src/obj2Arr'
import obj2UrlQuery from '../src/obj2UrlQuery'
import parseTime from '../src/parseTime'
import randomIntegerNumFromRange from '../src/randomIntegerNumFromRange'
import randomNumFromRange from '../src/randomNumFromRange'
import resApiFail from '../src/resApiFail'
import resApiSuccess from '../src/resApiSuccess'
import sourceNameConversion from '../src/sourceNameConversion'
import splitToGroup from '../src/splitToGroup'
import toInt from '../src/toInt'
import welcomeFromArr from '../src/welcomeFromArr'

// DOM
import addClass from '../src/dom/addClass'
import elementScrollToBottom from '../src/dom/elementScrollToBottom'
import findTitleElement from '../src/dom/findTitleElement'
import h from '../src/dom/h'
import isIE from '../src/dom/isIE'
import isMac from '../src/dom/isMac'
import removeClass from '../src/dom/removeClass'
import setRem from '../src/dom/setRem'
import toggleClass from '../src/dom/toggleClass'

// node
import sortPkgName from '../src/node/sortPkgName'

const allModules = {
	// Basic
	basic: {
		addAssetsBaseUrl: addAssetsBaseUrl,
		addAssetsBaseUrlFromArray: addAssetsBaseUrlFromArray,
		addAssetsBaseUrlFromObject: addAssetsBaseUrlFromObject,
		addAssetsBaseUrlFromRichText: addAssetsBaseUrlFromRichText,
		addZero: addZero,
		chTimeHello: chTimeHello,
		CustomEventEmitter: CustomEventEmitter,
		deepClone: deepClone,
		extend: extend,
		getNumberPercent: getNumberPercent,
		getPaginationPageCount: getPaginationPageCount,
		getQueryParameters: getQueryParameters,
		hideSourceName: hideSourceName,
		isEmpty: isEmpty,
		isFunction: isFunction,
		isUndefined: isUndefined,
		numPrecision: numPrecision,
		obj2Arr: obj2Arr,
		obj2UrlQuery: obj2UrlQuery,
		parseTime: parseTime,
		randomIntegerNumFromRange: randomIntegerNumFromRange,
		randomNumFromRange: randomNumFromRange,
		resApiFail: resApiFail,
		resApiSuccess: resApiSuccess,
		sourceNameConversion: sourceNameConversion,
		splitToGroup: splitToGroup,
		toInt: toInt,
		welcomeFromArr: welcomeFromArr,
	},

	// DOM
	dom: {
		addClass: addClass,
		elementScrollToBottom: elementScrollToBottom,
		findTitleElement: findTitleElement,
		h: h,
		isIE: isIE,
		isMac: isMac,
		removeClass: removeClass,
		setRem: setRem,
		toggleClass: toggleClass,
	},

	//Node
	node: {
		sortPkgName: sortPkgName,
	},
}

const tests = [
	{
		arg1: { ...allModules.basic, ...allModules.dom, ...allModules.node },
		result: [1, 2],
	},
]

tests.map((i, idx) => {
	const obj = i.arg1
	const result = i.result
	for (let k in obj) {
		if (obj.hasOwnProperty(k)) {
			test(`moduleFunctional: ${k}`, () => {
				expect(obj[k] instanceof Function).toBeTruthy()
			})
		}
	}
})
