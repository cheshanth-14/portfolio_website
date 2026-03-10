import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
    {
        id: 'petbuddy-web',
        title: 'PetBuddy Web',
        emoji: '🐕',
        tagline: 'Official Landing Page for PetBuddy',
        description:
            'A high-performance, premium landing page for PetBuddy, Sri Lanka\'s first unified digital ecosystem for pet adoption and care. Features a modern UI with smooth animations, responsive layouts, and rich visual storytelling — designed to enhance brand presence and user trust.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
        accent: '#F97316',
        accentDim: 'rgba(249, 115, 22, 0.08)',
        accentBorder: 'rgba(249, 115, 22, 0.2)',
        liveUrl: 'https://www.pettbuddy.lk/',
        highlights: [
            { icon: '✨', label: 'Modern Aesthetic' },
            { icon: '⚡', label: 'Vite Speed' },
            { icon: '📱', label: 'Fully Responsive' },
        ],
    },
    {
        id: 'pet-buddy-app',
        title: 'Pet Buddy App',
        emoji: '🐾',
        tagline: 'Full-stack pet adoption platform',
        description:
            'A complete full-stack pet adoption app featuring dynamic pet listings, an adoption form with backend integration, and a polished mobile UI — built with React Native and Tailwind CSS with rich micro-interactions.',
        tech: ['React Native', 'Firestore', 'Firebase', 'Node.js'],
        accent: '#00F5FF',
        accentDim: 'rgba(0,245,255,0.08)',
        accentBorder: 'rgba(0,245,255,0.2)',
        highlights: [
            { icon: '⚡', label: 'Micro-interactions' },
            { icon: '🔥', label: 'Firebase backend' },
            { icon: '📱', label: 'Mobile-first UI' },
        ],
    },
    {
        id: 'traffic-flow',
        title: 'Traffic Flow Analysis',
        emoji: '🚦',
        tagline: 'Python-powered data visualization',
        description:
            'A Python data-science project that ingests real-world traffic datasets, runs statistical analysis, and generates interactive visualizations to detect congestion patterns and automate traffic insights.',
        tech: ['Python', 'Histogram'],
        accent: '#8B5CF6',
        accentDim: 'rgba(139,92,246,0.08)',
        accentBorder: 'rgba(139,92,246,0.2)',
        highlights: [
            { icon: '📊', label: 'Data Visualization' },
            { icon: '🤖', label: 'Automation' },
            { icon: '🔬', label: 'Statistical Analysis' },
        ],
    },
    {
        id: 'percolation',
        title: 'Percolation Simulation',
        emoji: '🔲',
        tagline: 'Connectivity detection algorithm',
        description:
            'A Python simulation of the Percolation problem using random grid generation and Union-Find data structures to determine whether a system percolates — featuring Monte Carlo simulation for threshold estimation.',
        tech: ['Python', 'Algorithms', 'Pandas'],
        accent: '#F472B6',
        accentDim: 'rgba(244,114,182,0.08)',
        accentBorder: 'rgba(244,114,182,0.2)',
        highlights: [
            { icon: '🎲', label: 'Random Grid Gen' },
            { icon: '🔗', label: 'Connectivity Detection' },
            { icon: '📐', label: 'Monte Carlo' },
        ],
    },
    {
        id: 'estate-agent',
        title: 'Estate Agent App',
        emoji: '🏡',
        tagline: 'Full client-side property search platform',
        description:
            'A fully client-side Estate Agent web application built with React 19 and Vite. Features advanced property search with filters, drag-and-drop favourites, image galleries, floor plans, and an interactive location map — all persisted locally.',
        tech: ['React', 'Vite', 'CSS'],
        accent: '#34D399',
        accentDim: 'rgba(52,211,153,0.08)',
        accentBorder: 'rgba(52,211,153,0.22)',
        liveUrl: 'https://cheshanth-14.github.io/estate-agent-app/',
        highlights: [
            { icon: '🔍', label: 'Advanced Search' },
            { icon: '🖱️', label: 'Drag & Drop Favs' },
            { icon: '🗺️', label: 'Location Maps' },
        ],
    },
];

function ProjectCard({ project, delay }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="project-card"
            style={{
                background: hovered ? project.accentDim : 'rgba(255,255,255,0.03)',
                border: `1px solid ${hovered ? project.accentBorder : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 24,
                padding: 'clamp(20px, 5vw, 32px)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                transform: hovered ? 'translateY(-8px) scale(1.01)' : 'translateY(0) scale(1)',
                boxShadow: hovered ? `0 20px 60px ${project.accent}20, 0 0 0 1px ${project.accentBorder}` : 'none',
            }}
        >
            {/* Glow orb on hover */}
            <div
                style={{
                    position: 'absolute',
                    top: -60,
                    right: -60,
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${project.accent}20 0%, transparent 70%)`,
                    opacity: hovered ? 1 : 0,
                    transition: 'opacity 0.4s',
                    pointerEvents: 'none',
                }}
            />

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
                <div>
                    <div style={{
                        width: 52, height: 52, borderRadius: 14,
                        background: `${project.accent}15`,
                        border: `1px solid ${project.accentBorder}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 24, marginBottom: 16,
                        transition: 'transform 0.3s',
                        transform: hovered ? 'rotate(-5deg) scale(1.1)' : 'none',
                    }}>
                        {project.emoji}
                    </div>
                    <h3 style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(18px, 5vw, 22px)',
                        fontWeight: 800,
                        letterSpacing: '-0.5px',
                        marginBottom: 6,
                        color: '#fff',
                    }}>{project.title}</h3>
                    <p style={{ fontSize: 13, color: project.accent, fontWeight: 500, opacity: 0.8 }}>
                        {project.tagline}
                    </p>
                </div>

            </div>

            {/* Description */}
            <p style={{
                fontSize: 14,
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
                marginBottom: 24,
            }}>
                {project.description}
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                {project.highlights.map(({ icon, label }) => (
                    <div key={label} style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: 8,
                        padding: '6px 12px',
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.6)',
                    }}>
                        <span>{icon}</span>
                        <span>{label}</span>
                    </div>
                ))}
            </div>

            {/* Tech Stack */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: project.liveUrl ? 24 : 0 }}>
                {project.tech.map(t => (
                    <span key={t} style={{
                        padding: '4px 12px',
                        borderRadius: 6,
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.5px',
                        color: project.accent,
                        background: `${project.accent}12`,
                        border: `1px solid ${project.accent}25`,
                    }}>
                        {t}
                    </span>
                ))}
            </div>

            {/* Live Demo Button */}
            {project.liveUrl && (
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`live-demo-${project.id}`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        padding: '11px 0',
                        borderRadius: 12,
                        background: `${project.accent}15`,
                        border: `1px solid ${project.accentBorder}`,
                        color: project.accent,
                        textDecoration: 'none',
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: '0.5px',
                        transition: 'all 0.25s ease',
                        boxShadow: hovered ? `0 0 20px ${project.accent}30` : 'none',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = `${project.accent}25`;
                        e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = `${project.accent}15`;
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M9 2h5m0 0v5m0-5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    View Live Demo
                </a>
            )}
        </motion.div>
    );
}

export default function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="projects" style={{ padding: '120px 0', position: 'relative', zIndex: 1 }}>
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: 'clamp(32px, 6vw, 64px)' }}
                >
                    <div className="section-label">Projects</div>
                    <h2 style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(28px, 5vw, 56px)',
                        fontWeight: 900,
                        letterSpacing: '-2px',
                        lineHeight: 1.1,
                    }}>
                        Things I've{' '}
                        <span className="gradient-text">built.</span>
                    </h2>
                    <p style={{
                        marginTop: 16,
                        fontSize: 'clamp(13px, 3vw, 16px)',
                        color: 'rgba(255,255,255,0.4)',
                        maxWidth: 500,
                    }}>
                        A curated selection of projects that showcase my range — from mobile apps to data science.
                    </p>
                </motion.div>

                <style>{`
                    .projects-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                    }
                    @media (max-width: 900px) {
                        .projects-grid {
                            grid-template-columns: 1fr;
                            gap: 16px;
                        }
                    }
                    @media (max-width: 480px) {
                        .projects-grid {
                            gap: 14px;
                        }
                        .project-card {
                            border-radius: 16px !important;
                        }
                    }
                `}</style>

                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.id} project={p} delay={0.1 + i * 0.12} />
                    ))}
                </div>
            </div>
        </section>
    );
}
