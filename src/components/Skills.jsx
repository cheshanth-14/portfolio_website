import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const techSkills = [
    { label: 'Python', icon: '🐍' },
    { label: 'Java', icon: '☕' },
    { label: 'JavaScript', icon: '⚡' },
    { label: 'React', icon: '⚛️' },
    { label: 'React Native', icon: '⚛️' },
    { label: 'MySQL', icon: '🗄️' },
    { label: 'Node.js', icon: '🟢' },
    { label: 'Firebase', icon: '🔥' },
    { label: 'TypeScript', icon: '📘' },
    { label: 'HTML & CSS', icon: '🎨' },
    { label: 'Git', icon: '</>' },
    { label: 'Figma', icon: '✍' },
];

const softSkills = [
    { label: 'Problem Solving', icon: '🧩' },
    { label: 'Work Ethic', icon: '💪' },
    { label: 'Team Collaboration', icon: '🤝' },
    { label: 'Critical Thinking', icon: '🔍' },
    { label: 'Adaptability', icon: '🌊' },
    { label: 'Communication', icon: '💬' },
    { label: 'Time Management', icon: '⏱️' },
    { label: 'Creativity', icon: '✨' },
];

function MarqueeRow({ items, reverse = false, color = '#00F5FF' }) {
    // Double items for seamless loop
    const doubled = [...items, ...items];

    return (
        <div className="marquee-wrapper" style={{ padding: '8px 0' }}>
            <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
                {doubled.map((item, i) => (
                    <div
                        key={i}
                        className="marquee-item"
                        style={{
                            color: 'rgba(255,255,255,0.7)',
                            borderColor: `${color}20`,
                        }}
                    >
                        <span style={{ fontSize: 16 }}>{item.icon}</span>
                        <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.5px' }}>
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
            {/* Fade edges */}
            <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: 80,
                background: 'linear-gradient(to right, #0A0A0A, transparent)',
                pointerEvents: 'none', zIndex: 2,
            }} />
            <div style={{
                position: 'absolute', right: 0, top: 0, bottom: 0, width: 80,
                background: 'linear-gradient(to left, #0A0A0A, transparent)',
                pointerEvents: 'none', zIndex: 2,
            }} />
        </div>
    );
}

// Helper to find icon by label
function getIcon(name) {
    const tech = [
        { label: 'Python', icon: '🐍' },
        { label: 'Java', icon: '☕' },
        { label: 'JavaScript', icon: '⚡' },
        { label: 'React', icon: '⚛️' },
        { label: 'React Native', icon: '⚛️' },
        { label: 'MySQL', icon: '🗄️' },
        { label: 'Firebase', icon: '🔥' },
        { label: 'HTML & CSS', icon: '🎨' },
        { label: 'Git', icon: '</>' },
        { label: 'Figma', icon: '✍' },
    ];
    return tech.find(t => t.label === name)?.icon || '✨';
}

function SkillCard({ name, level, color, index }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'relative',
                padding: '16px',
                background: hovered ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${hovered ? color : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '24px',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                overflow: 'hidden',
                boxShadow: hovered ? `0 20px 60px -10px ${color}20` : 'none',
                transform: hovered ? 'translateY(-8px)' : 'none',
                backdropFilter: 'blur(20px)',
            }}
        >
            {/* Ultra-High-End Noise Texture Overlay */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                opacity: 0.03, pointerEvents: 'none', zIndex: 0
            }} />

            {/* Mesh Flare Glow - Scaled Down */}
            <div style={{
                position: 'absolute',
                top: hovered ? '-10%' : '-30%',
                right: hovered ? '-10%' : '-30%',
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                filter: 'blur(40px)',
                opacity: hovered ? 0.3 : 0.06,
                transition: 'all 0.8s ease',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: hovered ? `${color}20` : 'rgba(255,255,255,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    border: `1px solid ${hovered ? color : 'rgba(255,255,255,0.1)'}`,
                    transition: 'all 0.4s ease',
                    transform: hovered ? 'rotate(8deg) scale(1.1)' : 'none',
                }}>
                    {getIcon(name)}
                </div>
                <div style={{ textAlign: 'right' }}>
                    <span style={{
                        fontSize: '20px',
                        fontWeight: 900,
                        color: hovered ? '#fff' : color,
                        fontFamily: 'Montserrat, sans-serif',
                        lineHeight: 1,
                        letterSpacing: '-1px',
                        transition: 'color 0.3s'
                    }}>
                        {level}<span style={{ fontSize: '10px', opacity: 0.5, marginLeft: '1px' }}>%</span>
                    </span>
                </div>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <h4 style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    color: '#fff',
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '-0.3px',
                    marginBottom: '10px'
                }}>
                    {name}
                </h4>

                <div style={{
                    height: '6px',
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: '100px',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${level}%`, backgroundColor: color }}
                        transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            height: '100%',
                            borderRadius: '100px',
                            boxShadow: `0 0 10px ${color}`,
                            position: 'relative'
                        }}
                    />
                </div>
            </div>

            <style>{`
                @keyframes shimmer {
                    from { transform: translateX(-100px); }
                    to { transform: translateX(300px); }
                }
            `}</style>
        </motion.div>
    );
}

function SkillGrid() {
    const skills = [
        { name: 'Python', level: 85, color: '#00F5FF' },
        { name: 'React', level: 78, color: '#00F5FF' },
        { name: 'React Native', level: 75, color: '#8B5CF6' },
        { name: 'Figma', level: 88, color: '#eb7f1aff' },
        { name: 'HTML & CSS', level: 86, color: '#380e98ff' },
        { name: 'Java', level: 80, color: '#8B5CF6' },
        { name: 'JavaScript', level: 76, color: '#F472B6' },
        { name: 'MySQL', level: 72, color: '#564974ff' },
        { name: 'Git', level: 78, color: '#f7ecefff' },
        { name: 'Firebase', level: 70, color: '#00F5FF' },
    ];

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(var(--skills-cols, 3), 1fr)',
            gap: 'clamp(12px, 3vw, 16px)',
            marginTop: '32px',
        }}>
            <style>{`
                @media (max-width: 1200px) {
                    :root { --skills-cols: 2 !important; }
                }
                @media (max-width: 768px) {
                    :root { --skills-cols: 2 !important; }
                }
                @media (max-width: 480px) {
                    :root { --skills-cols: 1 !important; }
                }
            `}</style>
            {skills.map((skill, i) => (
                <SkillCard key={skill.name} {...skill} index={i} />
            ))}
        </div>
    );
}

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="skills" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }}>
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: 'clamp(32px, 6vw, 64px)', textAlign: 'center' }}
                >
                    <div className="section-label" style={{ justifyContent: 'center' }}>
                        <span style={{ display: 'block', width: 32, height: 1, background: 'var(--cyan)', opacity: 0.6 }} />
                        Skills
                    </div>
                    <h2 style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(36px, 8vw, 56px)',
                        fontWeight: 900,
                        letterSpacing: '-2px',
                        lineHeight: 1.1,
                    }}>
                        My <span className="gradient-text">toolkit.</span>
                    </h2>
                    <p style={{ marginTop: 16, fontSize: 'clamp(14px, 3vw, 16px)', color: 'rgba(255,255,255,0.4)' }}>
                        Technologies and competencies I bring to every project.
                    </p>
                </motion.div>
            </div>

            {/* Marquee rows — full width */}
            <div style={{ marginBottom: 12 }}>
                <p style={{
                    fontFamily: 'Montserrat',
                    fontSize: 11, fontWeight: 700, letterSpacing: '3px',
                    textTransform: 'uppercase', color: '#00F5FF',
                    textAlign: 'center', marginBottom: 16,
                }}>
                    Technical
                </p>
                <MarqueeRow items={techSkills} color="#00F5FF" />
            </div>
            <div style={{ marginBottom: 64 }}>
                <p style={{
                    fontFamily: 'Montserrat',
                    fontSize: 11, fontWeight: 700, letterSpacing: '3px',
                    textTransform: 'uppercase', color: '#8B5CF6',
                    textAlign: 'center', marginBottom: 16, marginTop: 24,
                }}>
                    Soft Skills
                </p>
                <MarqueeRow items={softSkills} reverse color="#8B5CF6" />
            </div>

            {/* Proficiency Grid */}
            <div className="container">
                <div
                    className="glass-card"
                    style={{ padding: 'clamp(16px, 4vw, 24px)' }}
                >
                    <h3 style={{
                        fontFamily: 'Montserrat', fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 800,
                        letterSpacing: '-0.5px', marginBottom: 2,
                    }}>
                        Proficiency Levels
                    </h3>
                    <p style={{ fontSize: 'clamp(11px, 2.5vw, 12px)', color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>
                        Self-assessed skill depth across core technologies
                    </p>
                    <SkillGrid />
                </div>
            </div>
        </section>
    );
}
