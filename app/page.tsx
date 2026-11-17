import { ArrowDown, ArrowUpRight, Mail, Radio, Sparkles } from 'lucide-react'

const projects = [
  { title: 'Vibe Music', type: 'Mobile · Social', description: 'A cross-platform social music experience with real-time chat, streaming-service connections, and a serverless AWS foundation.', stack: 'React Native · Expo · AWS · WebSockets', repo: 'Vibe-Music', featured: true },
  { title: 'Mandate', type: 'Web3 · Developer tools', description: 'A policy engine for agent spend approvals: signed decisions, independently verifiable receipts, and an auditable approval queue.', stack: 'TypeScript · Fastify · viem · React', repo: 'mandate', featured: true },
  { title: 'ExpressPostals', type: 'Full-stack · Logistics', description: 'Shipment operations from pickup request to tracking, with a focused admin dashboard and a secure, validated API.', stack: 'Next.js · Express · MongoDB', repo: 'ExpressPostals' },
  { title: 'Chain Lab', type: 'Web3 · Learning', description: 'A local blockchain learning lab for Solidity and TypeScript. Explore ERC-20 transfers, escrow, payment reconciliation, confirmations, and reorgs—without a live network.', stack: 'Solidity · TypeScript · EVM', repo: 'chain-lab' },
  { title: 'Report System', type: 'Full-stack · Tools', description: 'A reporting system built to turn structured information into clearer, more actionable workflows.', stack: 'TypeScript · Web', repo: 'report-system' },
  { title: 'Sniffer', type: 'Developer tools', description: 'A compact utility project exploring practical detection and inspection workflows.', stack: 'TypeScript · Tooling', repo: 'sniffer' },
  { title: 'ICPC News Scraper', type: 'Automation · Data', description: 'A scraper that gathers and organizes news content into a more useful, searchable stream.', stack: 'TypeScript · Automation', repo: 'icpc-news-scraper' },
  { title: 'Podcaster', type: 'Web · Media', description: 'A podcast streaming web app built around discovering and listening to audio content.', stack: 'Web · Audio', repo: 'Podcaster' },
  { title: 'Astroverse', type: 'Social · Web', description: 'A small-scale social app for sharing, exploring, and connecting around community content.', stack: 'Web · Social', repo: 'astroverse' },
  { title: 'Wellstay', type: 'Mobile · Marketplace', description: 'A hospitality and wellness marketplace with role-aware access, payments, and real-time chat.', stack: 'React Native · Express · MongoDB', repo: '', note: 'Walkthrough available on request' },
]

const skillGroups = [
  ['Frontend & mobile', 'React', 'Next.js', 'React Native', 'Expo', 'Tailwind CSS'],
  ['Backend & APIs', 'Node.js', 'TypeScript', 'Fastify', 'Express', 'REST', 'WebSockets'],
  ['Data & cloud', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'AWS', 'Docker'],
  ['Quality & Web3', 'Vitest', 'Jest', 'CI/CD', 'Solidity', 'viem', 'EIP-712'],
]

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article className={`project-card ${project.featured ? 'project-featured' : ''}`}>
      <div className="project-topline"><span className="project-index">{String(index + 1).padStart(2, '0')}</span><span className="project-type">{project.type}</span></div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <p className="project-stack">{project.stack}</p>
      <div className="project-link-wrap">{project.repo ? <a className="repo-link" href={`https://github.com/Clive-co/${project.repo}`} target="_blank" rel="noreferrer">View source on GitHub <ArrowUpRight aria-hidden="true" /></a> : <span className="repo-note">{project.note}</span>}</div>
    </article>
  )
}

export default function Page() {
  return (
    <main>
      <header className="site-header"><a className="wordmark" href="#home" aria-label="Clive Odum, home">CO<span>.</span></a><nav aria-label="Main navigation"><a href="#work">Selected work</a><a href="#about">About</a><a href="#contact">Contact</a></nav><a className="header-cta" href="mailto:odumclive@gmail.com">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a></header>
      <section className="hero" id="home"><div className="hero-grid" aria-hidden="true" /><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> OPEN TO THE RIGHT OPPORTUNITY</p><h1>I build things<br />that <span>work</span> in the<br />real world<span className="period">.</span></h1><p className="hero-lede">Full-stack software engineer shaping thoughtful products across web, mobile, APIs, and on-chain systems.</p><div className="hero-actions"><a className="button-primary" href="#work">Explore my work <ArrowDown aria-hidden="true" /></a><a className="text-link" href="mailto:odumclive@gmail.com">Get in touch <ArrowUpRight aria-hidden="true" /></a></div><div className="hero-meta"><span>BASED IN NIGERIA</span><span className="meta-line" /><span>BUILDING FOR WHAT&apos;S NEXT</span></div></div><div className="hero-aside"><div className="portrait-frame"><img src="https://media.licdn.com/dms/image/v2/D4D03AQEgboHZ_sKhJQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692878300738?e=1796256000&v=beta&t=enKVrBJy7PibGWtyLZLlDmintlzKM8haRw9pr5sehdQ" alt="Clive Odum" /><span className="portrait-ring" /><span className="portrait-label">CLIVE ODUM <span>01 / 01</span></span></div><div className="orbit-note"><Sparkles aria-hidden="true" /><span>Curious by default.<br />Deliberate by design.</span></div></div><div className="hero-index">01 <span>—</span> 04</div></section>
      <section className="ticker" aria-label="Areas of focus"><div className="ticker-track"><span>FULL-STACK ENGINEERING</span><i>✳</i><span>PRODUCT THINKING</span><i>✳</i><span>WEB · MOBILE · WEB3</span><i>✳</i><span>FULL-STACK ENGINEERING</span><i>✳</i><span>PRODUCT THINKING</span><i>✳</i><span>WEB · MOBILE · WEB3</span></div></section>
      <section className="work-section section-wrap" id="work"><div className="section-heading"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>Ideas, made <span>real.</span></h2></div><p className="section-intro">A collection of products and experiments, built end to end. Every link leads to source code—these projects are not hosted demos.</p></div><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div><a className="all-projects" href="https://github.com/Clive-co" target="_blank" rel="noreferrer"><span className="social-letter" aria-hidden="true">GH</span> More on GitHub <ArrowUpRight aria-hidden="true" /></a></section>
      <section className="about-section" id="about"><div className="section-wrap about-inner"><div className="about-heading"><p className="eyebrow">03 / THE APPROACH</p><h2>Engineer&apos;s<br />mind. <span>Builder&apos;s</span><br />instinct.</h2></div><div className="about-content"><p className="about-statement">I care about the details people feel—and the systems they never have to think about.</p><p className="about-body">I&apos;m a full-stack engineer with 3 years of experience building web and mobile products in TypeScript. I work across the stack: from considered interfaces and reliable APIs to data models, cloud infrastructure, and the tests that keep it all moving. I like untangling complex problems, shipping with care, and making technology feel useful.</p><div className="skills-grid">{skillGroups.map(([title, ...skills]) => <div className="skill-group" key={title}><h3>{title}</h3><p>{skills.map((skill, index) => <span key={skill}>{skill}{index < skills.length - 1 && <b> · </b>}</span>)}</p></div>)}</div><div className="impact-note"><Radio aria-hidden="true" /><p>From event-driven systems and real-time collaboration to signed on-chain payments—I enjoy building where the moving parts matter.</p></div></div></div></section>
      <section className="contact-section section-wrap" id="contact"><div className="contact-top"><p className="eyebrow">04 / YOUR NEXT GREAT HIRE?</p><span>MY INBOX IS OPEN <span className="status-dot" /></span></div><h2>Let&apos;s make<br />something <span>matter.</span></h2><a className="contact-email" href="mailto:odumclive@gmail.com">odumclive@gmail.com <ArrowUpRight aria-hidden="true" /></a><div className="social-links"><a href="https://github.com/Clive-co" target="_blank" rel="noreferrer"><span className="social-letter" aria-hidden="true">GH</span> GitHub</a><a href="https://linkedin.com/in/clive-odum-2193b9193" target="_blank" rel="noreferrer"><span className="social-letter" aria-hidden="true">in</span> LinkedIn</a><a href="https://x.com/thereal_coca" target="_blank" rel="noreferrer"><span className="x-mark">𝕏</span> X / Twitter</a><a href="mailto:odumclive@gmail.com"><Mail aria-hidden="true" /> Email</a></div></section>
      <footer className="site-footer"><a className="wordmark" href="#home">CO<span>.</span></a><p>Thoughtfully built by Clive Odum · 2026</p><a href="#home">Back to top ↑</a></footer>
    </main>
  )
}
