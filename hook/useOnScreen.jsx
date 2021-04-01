import React, { useCallback, useEffect, useState } from 'react'

const useOnScreen = (ref) => {
    const [isInView, setIsInView] = useState(false)

    const isInViewport = useCallback((el) => {
        let rect = el.current.getBoundingClientRect()
        let vertInView = rect.top <= window.innerHeight && rect.top + rect.height >= 0
        let horInView = rect.left <= window.innerWidth && rect.left + rect.width >= 0
        return vertInView && horInView
    }, [])

    useEffect(() => {
        if (isInViewport(ref) && !isInView) {
            setIsInView(true)
        } else if (isInViewport(ref) && isInView) {
            setIsInView(true)
        } else {
            setIsInView(false)
        }
    }, [])

    return isInView
}

export default useOnScreen
