import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (href) => {
        setOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav className={scrolled ? 'scrolled' : ''}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(12px, 3vw, 20px) 0' }}>
                    {/* Logo */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="nav-logo"
                        style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 900,
                            fontSize: 'clamp(12px, 3.5vw, 22px)',
                            textDecoration: 'none',
                            background: 'linear-gradient(135deg, #00F5FF, #8B5CF6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            letterSpacing: '-0.5px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '60vw',
                            flexShrink: 1,
                        }}
                    >
                        <span className="nav-logo-full">JAGANNITHY CHESHANTH</span>
                        <span className="nav-logo-short">CHESHANTH</span>
                    </motion.a>

                    {/* Desktop Links */}
                    <motion.div
                        className="hide-mobile"
                        style={{ display: 'flex', gap: 'clamp(20px, 5vw, 40px)', alignItems: 'center' }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {links.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                                style={{
                                    color: 'rgba(255,255,255,0.6)',
                                    textDecoration: 'none',
                                    fontSize: 'clamp(12px, 2vw, 14px)',
                                    fontWeight: 500,
                                    letterSpacing: '0.5px',
                                    transition: 'color 0.2s',
                                    position: 'relative',
                                }}
                                onMouseEnter={e => e.target.style.color = '#00F5FF'}
                                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                            >
                                {l.label}
                            </a>
                        ))}
                    </motion.div>

                    {/* Mobile Hamburger — visibility controlled by CSS */}
                    <button
                        className={`hamburger ${open ? 'open' : ''}`}
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        id="hamburger-btn"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>

            {/* Hamburger + Logo visibility */}
            <style>{`
        #hamburger-btn { display: none; }
        .nav-logo-short { display: none; }
        .nav-logo-full { display: inline; }
        @media (max-width: 768px) { #hamburger-btn { display: flex !important; } }
        @media (max-width: 480px) {
          .nav-logo-full { display: none; }
          .nav-logo-short { display: inline; }
        }
      `}</style>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="mobile-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {links.map((l, i) => (
                            <motion.a
                                key={l.label}
                                href={l.href}
                                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.3, delay: i * 0.08 }}
                            >
                                {l.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
