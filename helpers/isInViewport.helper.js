export const isInViewport = (el) => {
	if (el.current) {
		let rect = el.current.getBoundingClientRect()
		let vertInView = rect.top <= window.innerHeight && rect.top + rect.height >= 0
		let horInView = rect.left <= window.innerWidth && rect.left + rect.width >= 0
		return vertInView && horInView
	} else {
		return false
	}
}
