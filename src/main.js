import addAssetsBaseUrl from './addAssetsBaseUrl'
import addAssetsBaseUrlFromArray from './addAssetsBaseUrlFromArray'
import addAssetsBaseUrlFromObject from './addAssetsBaseUrlFromObject'
import addAssetsBaseUrlFromRichText from './addAssetsBaseUrlFromRichText'
import addZero from './addZero'
import chTimeHello from './chTimeHello'
import CustomEventEmitter from './CustomEventEmitter'
import deepClone from './deepClone'
import extend from './extend'
import getNumberPercent from './getNumberPercent'
import getPaginationPageCount from './getPaginationPageCount'
import getQueryParameters from './getQueryParameters'
import hideSourceName from './hideSourceName'
import isEmpty from './isEmpty'
import isFunction from './isFunction'
import isUndefined from './isUndefined'
import numPrecision from './numPrecision'
import obj2Arr from './obj2Arr'
import obj2UrlQuery from './obj2UrlQuery'
import parseTime from './parseTime'
import randomIntegerNumFromRange from './randomIntegerNumFromRange'
import randomNumFromRange from './randomNumFromRange'
import resApiFail from './resApiFail'
import resApiSuccess from './resApiSuccess'
import sourceNameConversion from './sourceNameConversion'
import splitToGroup from './splitToGroup'
import toInt from './toInt'
import welcomeFromArr from './welcomeFromArr'

// DOM
import addClass from './dom/addClass'
import elementScrollToBottom from './dom/elementScrollToBottom'
import findTitleElement from './dom/findTitleElement'
import h from './dom/h'
import isIE from './dom/isIE'
import isMac from './dom/isMac'
import removeClass from './dom/removeClass'
import setRem from './dom/setRem'
import toggleClass from './dom/toggleClass'

// node
import sortPkgName from './node/sortPkgName'

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

const fu = {
	version: '0.3.0-Beta.5',
	...allModules.basic,
	...allModules.dom,
	...allModules.node,
}

Object.defineProperty(fu, 'basic', {
	value: allModules.basic,
	writable: false,
	enumerable: true,
	configurable: false,
})

Object.defineProperty(fu, 'dom', {
	value: allModules.dom,
	writable: false,
	enumerable: true,
	configurable: false,
})

Object.defineProperty(fu, 'node', {
	value: allModules.node,
	writable: false,
	enumerable: true,
	configurable: false,
})

function freezeObj(obj) {
	if (typeof obj === 'object') {
		Object.freeze(obj)
	}
	for (let k in obj) {
		if (typeof obj === 'object' && obj.hasOwnProperty(k)) freezeObj(obj[k])
	}
}
freezeObj(fu)

export default fu
