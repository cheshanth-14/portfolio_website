import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouchDevice(hasTouch);
    }, []);
    useEffect(() => {
        let rafId;
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let curX = mouseX, curY = mouseY;

        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
            }
        };

        const animate = () => {
            curX += (mouseX - curX) * 0.12;
            curY += (mouseY - curY) * 0.12;
            if (cursorRef.current) {
                const size = isHovering ? 40 : 30;
                cursorRef.current.style.transform = `translate(${curX - size / 2}px, ${curY - size / 2}px)`;
            }
            rafId = requestAnimationFrame(animate);
        };

        const onEnter = (e) => {
            const el = e.target;
            if (
                el.tagName === 'A' ||
                el.tagName === 'BUTTON' ||
                el.closest('a') ||
                el.closest('button') ||
                el.classList.contains('project-card') ||
                el.closest('.project-card')
            ) {
                setIsHovering(true);
            }
        };

        const onLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', onMove);
        document.addEventListener('mouseover', onEnter);
        document.addEventListener('mouseout', onLeave);
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onEnter);
            document.removeEventListener('mouseout', onLeave);
            cancelAnimationFrame(rafId);
        };
    }, []);

    if (isTouchDevice) return null;

    return (
        <>
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    border: `1.5px solid ${isHovering ? '#8B5CF6' : '#00F5FF'}`,
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transition: 'border-color 0.2s, width 0.2s, height 0.2s',
                    mixBlendMode: 'normal',
                    ...(isHovering ? {
                        width: 48,
                        height: 48,
                        background: 'rgba(139,92,246,0.1)',
                    } : {}),
                }}
            />
            <div
                ref={dotRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: isHovering ? '#8B5CF6' : '#00F5FF',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    transition: 'background 0.2s',
                    boxShadow: isHovering
                        ? '0 0 12px #8B5CF6'
                        : '0 0 12px #00F5FF',
                }}
            />
        </>
    );
}
