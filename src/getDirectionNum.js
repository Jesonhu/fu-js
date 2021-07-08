/**
 * 判断两点间方向数值
 *
 * @author Jesonhu
 * @create 2020/09/23
 * @param {*} a 开始触碰点 X 坐标
 * @param {*} r 开始触碰点 Y 坐标
 * @param {*} e 离开触碰点 X 坐标
 * @param {*} l 离开触碰点 Y 坐标
 * @return {Number} s 1: 向上, 2: 向下, 3:向左, 4:向右, 0: 无法判断方向.
 */
function getDirectionNum(a, r, e, l) {
	/** 垂直位移距离 */
	var o = r - l,
		/** 水平位移距离 */
		t = e - a,
		s = 0
	if (Math.abs(t) < 2 && Math.abs(o) < 2) return s

	var i = (function (a, r) {
		return (180 * Math.atan2(r, a)) / Math.PI
	})(t, o)

	i >= -45 && i < 45
		? (s = 4)
		: i >= 45 && i < 135
		? (s = 1)
		: i >= -135 && i < -45
		? (s = 2)
		: ((i >= 135 && i <= 180) || (i >= -180 && i < -135)) && (s = 3)

	return s
}

export default getDirectionNum
