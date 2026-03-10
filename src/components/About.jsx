import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function BentoBox({ children, style = {}, delay = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className={`glass-card ${className}`}
            style={{
                padding: 'clamp(20px, 4vw, 28px)',
                transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
                ...style,
            }}
        >
            {children}
        </motion.div>
    );
}

const timelineItems = [
    {
        year: '2012–2022',
        label: 'School',
        institution: 'V/Vavuniya Tamil Madhya Maha Vidyalayam',
        detail: 'Vavuniya, Sri Lanka',
        icon: '🏫',
    },
    {
        year: '2024–Present',
        label: 'University',
        institution: 'BSc (Hons) Computer Science',
        detail: 'University of Westminster, UK',
        icon: '🎓',
    },
];

const activities = [
    { text: "Prefect @ V/V.T.M.M.V", icon: "🎓" },
    { text: "National Drama Participant 2017", icon: "🎭" },
    { text: "School Cricket Captain 2018", icon: "🏏" },
    { text: "Athletic Champion 2019", icon: "🏆" },
    { text: "IIT Cricket Team Player", icon: "🏏" },
    { text: "Stage Craft Participant 2024", icon: "✨" },
    { text: "SLBA Accredited Umpire 2025", icon: "⚖️" }
];

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }}>
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: 60 }}
                >
                    <div className="section-label">About Me</div>
                    <h2 style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(36px, 5vw, 56px)',
                        fontWeight: 900,
                        letterSpacing: '-2px',
                        lineHeight: 1.1,
                    }}>
                        A developer with{' '}
                        <span className="gradient-text">purpose.</span>
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="bento-grid">

                    {/* Box 1 — Bio (spans 2 cols) */}
                    <BentoBox
                        className="bento-col-2"
                        delay={0.1}
                        style={{
                            background: 'linear-gradient(135deg, rgba(0,245,255,0.06) 0%, rgba(139,92,246,0.06) 100%)',
                            borderColor: 'rgba(0,245,255,0.15)',
                        }}
                    >
                        <div style={{
                            width: 44, height: 44, borderRadius: 12,
                            background: 'linear-gradient(135deg, #00F5FF20, #8B5CF620)',
                            border: '1px solid rgba(0,245,255,0.2)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            marginBottom: 20, fontSize: 22,
                        }}>👨‍💻</div>
                        <p style={{
                            fontSize: 11, fontWeight: 700, letterSpacing: '3px',
                            textTransform: 'uppercase', color: '#00F5FF', marginBottom: 12,
                        }}>Bio</p>
                        <p style={{
                            fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.75)',
                            fontWeight: 400,
                        }}>
                            I am a motivated developer bridging the gap between{' '}
                            <span style={{ color: '#fff', fontWeight: 600 }}>complex backend logic</span> and{' '}
                            <span style={{ color: '#fff', fontWeight: 600 }}>vibrant frontend experiences</span>.
                            Born in Vavuniya and now studying at the University of Westminster.Experienced in working on programming projects
                            and collaborating in teams. Eager to apply technical knowledge and learn new skills in a professional environment. I bring
                            a unique global perspective to every line of code I write.

                        </p>
                    </BentoBox>

                    {/* Box 2 — Education (spans 2 cols) */}
                    <BentoBox className="bento-col-2" delay={0.2}>
                        <p style={{
                            fontSize: 11, fontWeight: 700, letterSpacing: '3px',
                            textTransform: 'uppercase', color: '#8B5CF6', marginBottom: 20,
                        }}>Education Timeline</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            {timelineItems.map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: 16, position: 'relative' }}>
                                    {/* Line */}
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                                        <div style={{
                                            width: 36, height: 36, borderRadius: '50%',
                                            background: i === 1 ? 'rgba(0,245,255,0.15)' : 'rgba(139,92,246,0.15)',
                                            border: `1px solid ${i === 1 ? 'rgba(0,245,255,0.4)' : 'rgba(139,92,246,0.4)'}`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: 16, flexShrink: 0,
                                        }}>
                                            {item.icon}
                                        </div>
                                        {i < timelineItems.length - 1 && (
                                            <div style={{ width: 1, flex: 1, minHeight: 24, background: 'rgba(255,255,255,0.1)', margin: '4px 0' }} />
                                        )}
                                    </div>
                                    <div style={{ paddingBottom: i < timelineItems.length - 1 ? 20 : 0 }}>
                                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '1px' }}>
                                            {item.year}
                                        </span>
                                        <p style={{ fontSize: 13, color: '#fff', fontWeight: 600, marginTop: 2, marginBottom: 2 }}>
                                            {item.institution}
                                        </p>
                                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </BentoBox>

                    {/* Box 3 — Languages */}
                    <BentoBox delay={0.3}>
                        <p style={{
                            fontSize: 11, fontWeight: 700, letterSpacing: '3px',
                            textTransform: 'uppercase', color: '#00F5FF', marginBottom: 20,
                        }}>Languages</p>
                        {[
                            { lang: 'English', level: 90, color: '#00F5FF' },
                            { lang: 'Tamil', level: 100, color: '#8B5CF6' },
                            { lang: 'Sinhala', level: 65, color: '#F472B6' },
                        ].map(({ lang, level, color }) => (
                            <div key={lang} style={{ marginBottom: 16 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                                    <span style={{ fontSize: 13, fontWeight: 600 }}>{lang}</span>
                                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{level}%</span>
                                </div>
                                <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                                        style={{ height: '100%', background: color, borderRadius: 2 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </BentoBox>

                    {/* Box 3.5 — Contact details in the 1-col slot */}
                    <BentoBox delay={0.35}>
                        <p style={{
                            fontSize: 11, fontWeight: 700, letterSpacing: '3px',
                            textTransform: 'uppercase', color: '#00F5FF', marginBottom: 20,
                        }}>Contact</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            <a
                                href="tel:+94765743454"
                                style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 13 }}
                            >
                                <span style={{ fontSize: 16 }}>📞</span>
                                +94 765 743 454
                            </a>
                            <a
                                href="mailto:cheshanth14@gmail.com"
                                style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 12 }}
                            >
                                <span style={{ fontSize: 16 }}>📧</span>
                                cheshanth14@gmail.com
                            </a>
                            <div style={{
                                marginTop: 8,
                                background: 'linear-gradient(135deg, rgba(0,245,255,0.08), rgba(139,92,246,0.08))',
                                border: '1px solid rgba(255,255,255,0.06)',
                                borderRadius: 12,
                                padding: '12px',
                                textAlign: 'center',
                            }}>
                                <p style={{ fontSize: 24, fontWeight: 900, background: 'linear-gradient(135deg, #00F5FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>5+</p>
                                <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px' }}>Projects</p>
                            </div>
                        </div>
                    </BentoBox>

                    {/* Box 4 — Activities in the 2-col slot */}
                    <BentoBox delay={0.4} className="bento-col-2">
                        <p style={{
                            fontSize: 11, fontWeight: 700, letterSpacing: '3px',
                            textTransform: 'uppercase', color: '#8B5CF6', marginBottom: 20,
                        }}>Beyond the Classroom</p>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                            gap: 12
                        }}>
                            {activities.map((act, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    <span style={{ fontSize: 16 }}>{act.icon}</span>
                                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', fontWeight: 500, lineHeight: 1.2 }}>{act.text}</span>
                                </div>
                            ))}
                        </div>
                    </BentoBox>
                </div>
            </div>
        </section>
    );
}
