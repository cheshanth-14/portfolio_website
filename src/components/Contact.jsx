import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const GitHubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [copied, setCopied] = useState('');

    const copyToClipboard = (text, key) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(key);
            setTimeout(() => setCopied(''), 2000);
        });
    };

    return (
        <section id="contact" style={{ padding: '120px 0 80px', position: 'relative', zIndex: 1 }}>
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: 80 }}
                >
                    <div className="section-label" style={{ justifyContent: 'center' }}>Contact</div>
                    <h2 style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(36px, 8vw, 72px)',
                        fontWeight: 900,
                        letterSpacing: '-3px',
                        lineHeight: 1.05,
                        marginBottom: 20,
                    }}>
                        Let's build something{' '}
                        <span className="gradient-text">great.</span>
                    </h2>
                    <p style={{
                        fontSize: 'clamp(14px, 4vw, 18px)',
                        color: 'rgba(255,255,255,0.45)',
                        maxWidth: 480,
                        margin: '0 auto 48px',
                        lineHeight: 1.6,
                    }}>
                        Open to innovative projects, collaborations, and new opportunities.
                        Don't hesitate to reach out!
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <style>{`
                    .contact-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 20px;
                        max-width: 940px;
                        margin: 0 auto 80px;
                    }
                    @media (max-width: 900px) {
                        .contact-grid {
                            grid-template-columns: 1fr;
                            gap: 16px;
                            max-width: 500px;
                        }
                    }
                    @media (max-width: 480px) {
                        .contact-grid {
                            gap: 12px;
                        }
                    }
                `}</style>
                <div className="contact-grid">
                    {[
                        {
                            key: 'phone',
                            icon: '📞',
                            label: 'Phone',
                            value: '+94 765 743 454',
                            copy: '+94765743454',
                            href: 'tel:+94765743454',
                            accent: '#00F5FF',
                        },
                        {
                            key: 'email',
                            icon: '📧',
                            label: 'Email',
                            value: 'cheshanth14@gmail.com',
                            copy: 'cheshanth14@gmail.com',
                            href: 'mailto:cheshanth14@gmail.com',
                            accent: '#8B5CF6',
                        },
                        {
                            key: 'social',
                            icon: '🌐',
                            label: 'Socials',
                            value: 'Connect with me',
                            href: '#',
                            accent: '#F472B6',
                            isSocial: true,
                            links: [
                                { label: 'GitHub', url: 'https://github.com/cheshanth-14', icon: <GitHubIcon /> },
                                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jagannithy-cheshanth-975128304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', icon: <LinkedInIcon /> },
                                { label: 'Instagram', url: 'https://www.instagram.com/cheshanth_14?igsh=MXdmc3o0dWRrc3NhaA%3D%3D&utm_source=qr', icon: <InstagramIcon /> },
                            ]
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.key}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                            className="glass-card"
                            style={{ padding: 'clamp(20px, 5vw, 32px)', position: 'relative', overflow: 'hidden' }}
                        >
                            <div style={{
                                position: 'absolute', top: -30, right: -30,
                                width: 120, height: 120, borderRadius: '50%',
                                background: `radial-gradient(circle, ${item.accent}15 0%, transparent 70%)`,
                                pointerEvents: 'none',
                            }} />

                            <div style={{
                                width: 52, height: 52, borderRadius: 14,
                                background: `${item.accent}12`,
                                border: `1px solid ${item.accent}25`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 24, marginBottom: 20,
                            }}>
                                {item.icon}
                            </div>

                            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: item.accent, marginBottom: 8 }}>
                                {item.label}
                            </p>
                            <p style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 20, wordBreak: 'break-all' }}>
                                {item.value}
                            </p>

                            {!item.isSocial ? (
                                <div style={{ display: 'flex', gap: 10 }}>
                                    <a
                                        href={item.href}
                                        id={`contact-${item.key}-action`}
                                        style={{
                                            flex: 1,
                                            padding: '10px 0',
                                            textAlign: 'center',
                                            borderRadius: 10,
                                            background: `${item.accent}15`,
                                            border: `1px solid ${item.accent}30`,
                                            color: item.accent,
                                            textDecoration: 'none',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            transition: 'background 0.2s',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.background = `${item.accent}25`}
                                        onMouseLeave={e => e.currentTarget.style.background = `${item.accent}15`}
                                    >
                                        {item.key === 'phone' ? 'Call' : 'Email'}
                                    </a>
                                    <button
                                        onClick={() => copyToClipboard(item.copy, item.key)}
                                        id={`copy-${item.key}`}
                                        style={{
                                            flex: 1,
                                            padding: '10px 0',
                                            borderRadius: 10,
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            color: copied === item.key ? '#00ff88' : 'rgba(255,255,255,0.5)',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            transition: 'all 0.2s',
                                        }}
                                    >
                                        {copied === item.key ? '✓ Copied!' : 'Copy'}
                                    </button>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', gap: 10 }}>
                                    {item.links.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                flex: 1,
                                                padding: '10px 0',
                                                textAlign: 'center',
                                                borderRadius: 10,
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                color: 'rgba(255,255,255,0.6)',
                                                textDecoration: 'none',
                                                fontSize: 11,
                                                fontWeight: 800,
                                                transition: 'all 0.3s ease',
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.background = `${item.accent}15`;
                                                e.currentTarget.style.borderColor = `${item.accent}30`;
                                                e.currentTarget.style.color = item.accent;
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                                            }}
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        paddingTop: 60,
                        marginTop: 40,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 32,
                    }}
                >
                    {/* Social Row */}
                    <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 24px)', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {[
                            { icon: <GitHubIcon />, label: 'GitHub', url: 'https://github.com/cheshanth-14' },
                            { icon: <LinkedInIcon />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/jagannithy-cheshanth-975128304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
                            { icon: <InstagramIcon />, label: 'Instagram', url: 'https://www.instagram.com/cheshanth_14?igsh=MXdmc3o0dWRrc3NhaA%3D%3D&utm_source=qr' },
                        ].map((soc) => (
                            <a
                                key={soc.label}
                                href={soc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: 48, height: 48, borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'rgba(255,255,255,0.4)',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none',
                                    fontSize: 18,
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.borderColor = 'var(--cyan)';
                                    e.currentTarget.style.background = 'var(--cyan-dim)';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {soc.icon}
                            </a>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <p style={{
                            fontFamily: 'Montserrat', fontWeight: 900, fontSize: 'clamp(18px, 4vw, 24px)',
                            background: 'linear-gradient(135deg, #00F5FF, #8B5CF6)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            letterSpacing: '-1px',
                        }}>
                            JAGANNITHY CHESHANTH
                        </p>
                        <p style={{ fontSize: 'clamp(11px, 2.5vw, 13px)', color: 'rgba(255,255,255,0.3)', marginTop: 8, letterSpacing: '0.5px', textAlign: 'center' }}>
                            Copy rights to Jagannithy Cheshanth · © {new Date().getFullYear()}
                        </p>
                    </div>

                    <p style={{ fontSize: 'clamp(10px, 2.5vw, 12px)', color: 'rgba(255,255,255,0.25)', fontWeight: 500, textAlign: 'center' }}>
                        No 16 rohini road wellawate Colombo.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
