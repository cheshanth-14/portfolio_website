import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const NAME = 'CHESHANTH';

function SplitText({ text, delay = 0 }) {
    return (
        <span style={{ display: 'inline-block', overflow: 'hidden' }}>
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    style={{ display: 'inline-block' }}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: delay + i * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </span>
    );
}

// Floating particle canvas
function ParticleField() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let w, h;
        let particles = [];

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                r: Math.random() * 1.5 + 0.3,
                dx: (Math.random() - 0.5) * 0.3,
                dy: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.5 + 0.1,
                color: Math.random() > 0.5 ? '0,245,255' : '139,92,246',
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > w) p.dx *= -1;
                if (p.y < 0 || p.y > h) p.dy *= -1;
            });
            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 0,
                opacity: 0.7,
            }}
        />
    );
}

export default function Hero() {
    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: 'clamp(60px, 10vw, 80px)',
            }}
        >
            <ParticleField />

            {/* Decorative orbs */}
            <div style={{
                position: 'absolute', top: '15%', left: '5%',
                width: 300, height: 300, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)',
                filter: 'blur(40px)', pointerEvents: 'none',
                animation: 'float 8s ease-in-out infinite',
            }} />
            <div style={{
                position: 'absolute', bottom: '10%', right: '5%',
                width: 400, height: 400, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
                filter: 'blur(50px)', pointerEvents: 'none',
                animation: 'float 10s ease-in-out infinite reverse',
            }} />

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (max-width: 1024px) {
          .hero-name { font-size: clamp(60px, 12vw, 120px) !important; }
        }
        @media (max-width: 768px) {
          .hero-name { font-size: clamp(42px, 12vw, 80px) !important; letter-spacing: -1px !important; }
          .hero-sub { font-size: 15px !important; }
          .hero-btns { flex-direction: column !important; gap: 12px !important; width: 100%; }
          .hero-btns a { width: 100%; text-align: center; justify-content: center; }
        }
        @media (max-width: 480px) {
          .hero-name { font-size: clamp(32px, 14vw, 56px) !important; letter-spacing: -1px !important; margin-bottom: 16px !important; }
          .hero-sub { font-size: 14px !important; }
        }
      `}</style>

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

                {/* Pulse Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ marginBottom: 32 }}
                >
                    <div className="pulse-badge" style={{ display: 'inline-flex' }}>
                        <div className="pulse-dot" />
                        Available for innovative projects
                    </div>
                </motion.div>

                {/* Hey I'm */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: 'rgba(255,255,255,0.5)',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        marginBottom: 12,
                    }}
                >
                    Hey, I'm
                </motion.p>

                {/* Split Name */}
                <h1
                    className="hero-name"
                    style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(72px, 12vw, 160px)',
                        fontWeight: 900,
                        letterSpacing: '-3px',
                        lineHeight: 1,
                        marginBottom: 24,
                        whiteSpace: 'nowrap',
                        background: 'linear-gradient(135deg, #00F5FF, #8B5CF6, #F472B6, #00F5FF)',
                        backgroundSize: '300% 300%',
                        animation: 'textGradient 8s linear infinite',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 30px rgba(0, 245, 255, 0.3))',
                    }}
                >
                    <SplitText text={NAME} delay={0.5} />
                </h1>

                {/* Subtitle */}
                <motion.div
                    className="hero-sub"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.1 }}
                    style={{
                        fontSize: 'clamp(14px, 4vw, 20px)',
                        fontWeight: 400,
                        color: 'rgba(255,255,255,0.6)',
                        maxWidth: 600,
                        margin: '0 auto 16px',
                        lineHeight: 1.6,
                    }}
                >
                    Crafting logic with{' '}
                    <span style={{ color: '#00F5FF', fontWeight: 600 }}>Python</span>,{' '}
                    <span style={{ color: '#8B5CF6', fontWeight: 600 }}>Java</span>,{' '}
                    <span style={{ color: '#8be983', fontWeight: 600 }}>Node.Js</span>,{' '}
                    <span style={{ color: '#00F5FF', fontWeight: 600 }}>React Native</span> , and{' '}
                    <span className="gradient-text" style={{ fontWeight: 600 }}>Figma</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    style={{
                        fontSize: 'clamp(12px, 3vw, 14px)',
                        color: 'rgba(255,255,255,0.4)',
                        marginBottom: 32,
                        letterSpacing: '0.5px',
                    }}
                >
                    Computer Science Student at University of Westminster
                </motion.p>



                {/* CTA Buttons */}
                <motion.div
                    className="hero-btns"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    style={{
                        display: 'flex',
                        gap: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <a
                        href="#projects"
                        className="btn-primary"
                        onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                        style={{ textDecoration: 'none' }}
                    >
                        <span style={{ position: 'relative' }}>View My Work</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ position: 'relative' }}>
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        className="btn-outline"
                        onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                        style={{ textDecoration: 'none' }}
                    >
                        Get In Touch
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2 }}
                    style={{
                        position: 'absolute',
                        bottom: -80,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 8,
                    }}
                >
                    <span style={{ fontSize: 11, letterSpacing: '3px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(0,245,255,0.6), transparent)' }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
