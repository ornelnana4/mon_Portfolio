import React, { useState, useEffect, useRef } from "react";
import "./App.css";

/* ─────────────────────────── DATA ─────────────────────────── */
const DATA = {
  name: "Ornella NANA",
  title: "Développeuse Full-Stack",
  tagline: "Java· Spring Boot ·PHP · Symfony ·Vue.js · React.js",
  status: "Recherche d'alternance en développement logiciel",
  contact: {
    phone: "+33 758 983 373",
    email: "ornelnana4@gmail.com",
    github: "https://github.com/ornelnana4/",
    linkedin: "https://www.linkedin.com/in/ornellanana",
    trailhead: "https://www.salesforce.com/trailblazer/ornellanana",
    location: "Rennes · Mobilité Nationale",
  },
  profile:
    "Développeuse Java/PHP junior spécialisée dans le développement d'applications web et la conception d'API avec Spring Boot et Symfony. J'apprécie concevoir des applications robustes, évolutives et maintenables en utilisant les bonnes pratiques du développement logiciel.",

  skills: [
    {
      category: "Langages",
      icon: "{ }",
      items: ["Java", "PHP", "JavaScript", "HTML5", "CSS3", "SQL"],
    },
    {
      category: "Frameworks, Bibliothèques & CMS",
      icon: "⚙",
      items: [
        "Spring Boot",
        "Symfony",
        "React.js",
        "Vue.js",
        "Bootstrap",
        "Twig",
        "Wordpress",
        "Elementor",
      ],
    },
    {
      category: "Salesforce",
      icon: "☁",
      items: [
        "Apex Classes & Triggers",
        "Visualforce",
        "Flow Builder",
        "Process Builder",
        "Validation Rules",
        "SOSL/SOQL",
        "Test Classes",
        "CRM Administration",
      ],
    },
    {
      category: "Outils & DevOps",
      icon: "🔧",
      items: [
        "Git / GitHub",
        "Docker",
        "Kubernetes",
        "VS Code",
        "Eclipse",
        "RabbitMQ",
        "GraphQL",
      ],
    },
    {
      category: "Méthodologies",
      icon: "◈",
      items: [
        "Scrum",
        "MVC",
        "Micro-services",
        "Design Patterns (DAO, Singleton, Factory, Builder, Composite)",
      ],
    },
    {
      category: "Outils IA",
      icon: "🤖",
      items: ["ChatGPT", "GitHub Copilot", "Claude", "Gemini","Perplexity"],
    },
  ],
  projects: [
    {
      name: "JAMAA BACKEND",
      subtitle: "Plateforme multi-bancaire",
      tech: [
        "Spring Boot",
        "React",
        "RabbitMQ",
        "Docker",
        "Kubernetes",
        "GraphQL",
      ],
      description:
        "Développement d'un système multi-bancaire complet basé sur 13 micro-services en Java Spring Boot. Communication asynchrone via RabbitMQ, API GraphQL, déploiement sur Kubernetes.",
      details: [
        "Architecture 13 micro-services en Java Spring Boot",
        "Communication asynchrone via RabbitMQ",
        "API GraphQL & déploiement Kubernetes",
        "Gestion comptes, cartes, transferts interbanques, recharges/retraits & notifications",
        "Collaboration en équipe sous méthodologie Scrum",
      ],
      link: "https://github.com/Noubissie237/jamaa-backend",
      color: "#C1121F",
    },
    {
      name: "VISITES TUTEUR",
      subtitle: "Application de suivi étudiants",
      tech: ["Symfony", "Doctrine", "Twig", "Bootstrap", "PDF Export"],
      description:
        "Application de gestion des visites de tuteurs auprès des étudiants en stage. Permet à un tuteur connecté de gérer ses étudiants, planifier des visites, remplir des comptes-rendus et les exporter en PDF.",
      details: [
        "Authentification et gestion des tuteurs",
        "Planification et suivi des visites en stage",
        "Remplissage de comptes-rendus en ligne",
        "Export PDF des rapports de visite",
        "Architecture MVC avec Symfony & Doctrine",
      ],
      link: "https://github.com/ornelnana4/projet-de-suivi-des-tudiants-par-les-tuteurs-lors-de-leur-stage",
      color: "#8B0000",
    },
    {
      name: "SITE VITRINE ACR",
      subtitle: "Association des Camerounais de Rennes",
      tech: ["WordPress", "Elementor", "CSS", "Responsive Design"],
      description:
        "Conception et réalisation complète du site vitrine de l'Association des Camerounais de Rennes (ACR). L'association ne disposait d'aucune présence en ligne - j'ai créé un site cohérent, responsive et fonctionnel pour améliorer sa visibilité.",
      details: [
        "Prise en main autonome de WordPress et Elementor en 1 semaine",
        "Création de 5 pages complètes : Accueil, À propos, Services, Contact, FAQ, Adhérer",
        'En-tête responsive avec menu de navigation et bouton "Adhérer" mis en avant',
        "Formulaire de contact et formulaire d'adhésion en ligne",
        "Intégration d'une carte Google Maps et des réseaux sociaux",
        "Identité visuelle cohérente : couleurs, typographie, mise en page",
        "Site mis en production et accessible en ligne",
      ],
      link: "https://asso-camer-rennes.fr/",
      linkLabel: "Voir le site",
      color: "#C1121F",
    },
    {
      name: "FLOWASSO",
      subtitle: "Application de gestion des activités – ACR",
      tech: [
        "ASP.NET Core",
        "C#",
        "React.js",
        "PostgreSQL",
        "Docker",
        "RabbitMQ",
        "Firebase Auth",
        "Swagger",
      ],
      description:
        "Conception et développement d'une application web de gestion des activités pour l'ACR. Architecture microservices complète couvrant membres, événements, finances, notifications et administration - nommée FlowAsso.",
      details: [
        "Recueil des besoins : entretiens individuels + questionnaire terrain auprès de 6 membres du bureau",
        "Rédaction du cahier des charges complet (validé en version 1.1 après 4 relectures)",
        "Conception UML : diagrammes de cas d'utilisation, de séquence, de classes et de déploiement",
        "Architecture 10 microservices en ASP.NET Core (C#) : identité, membres, événements, finances, notifications, médias, partenariats…",
        "ms-identite : authentification Firebase, gestion des rôles & jetons JWT - TERMINÉ",
        "ms-notifications : e-mails automatiques, rappels avant événement, messages groupés - TERMINÉ",
        "ms-medias : upload photos, galeries par événement, modération - TERMINÉ",
        "Back-office FlowAsso : tableau de bord admin, gestion membres/événements/finances - TERMINÉ",
        "Communication asynchrone entre services via RabbitMQ",
        "Bases de données PostgreSQL administrées avec pgAdmin",
        "Conteneurisation Docker, API Gateway, documentation Swagger",
      ],
      link: "",
      private: true,
    },
  ],
  education: [
    {
      degree: "Licence 3 MIAGE",
      school: "Université de Rennes - ISTIC",
      period: "2025 - 2026",
      detail: "Méthodes Informatiques Appliquées à la Gestion d'Entreprise",
      current: true,
    },
    {
      degree: "Master 1 Informatique",
      school: "Université de Yaoundé 1 – CAMEROUN",
      period: "2024 – 2025",
      detail: "Système d'information & Génie Logiciel",
      current: false,
    },
    {
      degree: "Licence Informatique",
      school: "Université de Yaoundé 1 – CAMEROUN",
      period: "2023 – 2024",
      detail: "Système d'information & Génie Logiciel",
      current: false,
    },
    {
      degree: "Baccalauréat Scientifique",
      school: "Lycée Classique de Bafang – CAMEROUN",
      period: "2020 – 2021",
      detail: "",
      current: false,
    },
  ],
  certifications: [
    {
      label: "92 Badges Trailhead + 1 Superbadge",
      link: "https://www.salesforce.com/trailblazer/ornellanana",
      details: [
        "Parcours complet sur la plateforme Trailhead de Salesforce",
        "Modules couvrant CRM, Apex, LWC, administration, automatisation",
        "1 Superbadge validant des compétences avancées sur des cas réels",
      ],
    },
    {
      label: "Certification Salesforce Certified Platform Foundations",
      link: null,
      details: [
        "Certification officielle Salesforce validant les connaissances fondamentales de la plateforme.",
        "Compréhension de l'écosystème Salesforce et des principaux produits CRM.",
        "Maîtrise de la navigation dans Salesforce Lightning Experience et de l'interface utilisateur.",
        "Connaissance du modèle de données Salesforce : objets, champs et relations.",
        "Création et personnalisation de rapports et de tableaux de bord pour le suivi des indicateurs.",
        "Compréhension des principes fondamentaux de la gestion des données et des bonnes pratiques Salesforce.",
      ],
    },
    {
      label: "Certification Scrum Fundamentals",
      link: null,
      details: [
        "Certification validant la compréhension des fondamentaux de la méthodologie Agile Scrum.",
        "Maîtrise des rôles Scrum : Product Owner, Scrum Master et équipe de développement, ainsi que de leurs responsabilités.",
        "Connaissance des événements Scrum : Sprint, Sprint Planning, Daily Scrum, Sprint Review et Sprint Retrospective.",
        "Compréhension des artefacts Scrum : Product Backlog, Sprint Backlog et Increment, ainsi que de leur utilisation pour le suivi des projets.",
        "Application des principes Agile et Scrum dans le cadre des projets Jamaa Backend et FlowAsso pour favoriser la collaboration, l'organisation du travail et les livraisons itératives.",
      ],
    },
    {
      label: "Stage Salesforce – Cloud-Architects (juin 2022 – août 2023)",
      link: null,
      details: [
        "Découverte et prise en main complète de l'écosystème Salesforce",
        "Formation sur Trailhead : Apex, LWC, SOQL, administration CRM",
        "Préparation et obtention de la certification Salesforce Platform Foundations",
        "Premiers développements sur une org Salesforce réelle",
      ],
    },
    {
      label: "Stage Développement Web – Openxtech (juin – déc 2024)",
      link: null,
      details: [
        "HTML5 & CSS3 : structuration sémantique, mise en page responsive",
        "Bootstrap : création d'interfaces mobiles-first, grilles, composants UI",
        "JavaScript : manipulation du DOM, événements, logique front-end",
        "Réalisation de pages web complètes et intégrées en production",
      ],
    },
  ],
  softSkills: [
    "Rigoureuse & organisée",
    "Travailleuse & persévérante",
    "Esprit d'équipe",
    "Sens des responsabilités",
    "Humble & sociable",
  ],
  languages: [
    { lang: "Français", level: "Natif", pct: 100 },
    { lang: "Anglais", level: "Professionnel", pct: 40 },
  ],
};

/* ─────────────────────────── HOOKS ─────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────── COMPONENTS ─────────────────────────── */

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ["Profil", "Compétences", "Projets", "Parcours", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (s) => {
    setActive(s);
    setMenuOpen(false);
    document
      .getElementById(s.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand" onClick={() => handleNav("Profil")}>
        <span className="brand-initials">ON</span>
        <span className="brand-name">Ornella NANA</span>
      </div>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {sections.map((s) => (
          <li key={s}>
            <button
              className={active === s ? "active" : ""}
              onClick={() => handleNav(s)}
            >
              {s}
            </button>
          </li>
        ))}
        <li>
          <a className="nav-cta" href={`tel:${DATA.contact.phone}`}>
            Me contacter
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  const [ref, visible] = useInView(0.1);
  return (
    <section id="profil" className="hero" ref={ref}>
      <div className={`hero-content ${visible ? "fade-in" : ""}`}>
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          {DATA.status}
        </div>
        <h1 className="hero-name">
          {DATA.name.split(" ").map((w, i) => (
            <span key={i} className={i === 1 ? "name-accent" : ""}>
              {w}{" "}
            </span>
          ))}
        </h1>
        <p className="hero-title">{DATA.title}</p>
        <p className="hero-tagline">{DATA.tagline}</p>
        <p className="hero-profile">{DATA.profile.split("\n\n")[0]}</p>
        <div className="hero-actions">
          <a href={`mailto:${DATA.contact.email}`} className="btn-primary">
            M'envoyer un email
          </a>
          <a
            href={DATA.contact.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Voir GitHub
          </a>
          <a
            href={DATA.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
          <a
            href={DATA.contact.trailhead}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            {" "}
            Trailhead
          </a>
          <a
            href="/CV_NANA_ORNELLA.pdf"
            download="CV_NANA_ORNELLA.pdf"
            className="btn-download"
          >
            ⬇ Télécharger mon CV
          </a>
        </div>
        <div className="hero-meta">
          <span>📍 {DATA.contact.location}</span>
          <span>📞 {DATA.contact.phone}</span>
        </div>
      </div>
      <div className={`hero-visual ${visible ? "slide-in" : ""}`}>
        <div className="avatar-ring">
          <div className="avatar-inner">
            <span>ON</span>
          </div>
          <div className="orbit orbit-1">
            <div className="orbit-dot"></div>
          </div>
          <div className="orbit orbit-2">
            <div className="orbit-dot"></div>
          </div>
        </div>
        <div className="tech-chips">
          {[
            "Salesforce",
            "Spring Boot",
            "JavaFx",
            "JDBC",
            "React.js",
            "LWC",
            "Docker",
            "Kubernetes",
            "Wordpress",
            "Elementor",
            "Canva",
          ].map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`skill-card ${visible ? "fade-up" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="skill-icon">{skill.icon}</div>
      <h3 className="skill-category">{skill.category}</h3>
      <div className="skill-tags">
        {skill.items.map((item) => (
          <span key={item} className="skill-tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="compétences" className="section skills-section">
      <div className="section-header">
        <span className="section-label">EXPERTISE</span>
        <h2 className="section-title">Compétences techniques</h2>
        <p className="section-sub">
          Des compétences variées, du développement full-stack à Salesforce en
          passant par DevOps.
        </p>
      </div>
      <div className="skills-grid">
        {DATA.skills.map((s, i) => (
          <SkillCard key={s.category} skill={s} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`project-card ${visible ? "fade-up" : ""}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="project-header">
        <div>
          <span className="project-number">0{index + 1}</span>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        {project.private ? (
          <span className="project-private">🔒</span>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link-btn"
            title={project.linkLabel || "Voir sur GitHub"}
          >
            {project.linkLabel ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            )}
          </a>
        )}
      </div>
      <p className="project-desc">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="project-tech-tag">
            {t}
          </span>
        ))}
      </div>
      <button className="project-toggle" onClick={() => setExpanded(!expanded)}>
        {expanded ? "▲ Moins de détails" : "▼ Voir les détails"}
      </button>
      {expanded && (
        <ul className="project-details">
          {project.details.map((d, i) => (
            <li key={i}>
              <span className="detail-bullet">▸</span>
              {d}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Projects() {
  return (
    <section id="projets" className="section projects-section">
      <div className="section-header">
        <span className="section-label">RÉALISATIONS</span>
        <h2 className="section-title">Projets concrets</h2>
        <p className="section-sub">
          Des projets collaboratifs et académiques avec de vraies architectures
          en production.
        </p>
      </div>
      <div className="projects-grid">
        {DATA.projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function CertItem({ cert }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="cert-item-wrap">
      <div
        className="cert-item"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        <span className="cert-check">✓</span>
        <div style={{ flex: 1 }}>
          {cert.link ? (
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="cert-link"
              onClick={(e) => e.stopPropagation()}
            >
              {cert.label}
            </a>
          ) : (
            <span>{cert.label}</span>
          )}
        </div>
        <span className="cert-toggle">{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <ul className="cert-details">
          {cert.details.map((d, i) => (
            <li key={i}>
              <span className="detail-bullet">▸</span>
              {d}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Timeline() {
  return (
    <section id="parcours" className="section parcours-section">
      <div className="section-header">
        <span className="section-label">PARCOURS</span>
        <h2 className="section-title">Formation & Certifications</h2>
      </div>
      <div className="parcours-grid">
        <div className="timeline-col">
          <h3 className="col-title">🎓 Formation</h3>
          <div className="timeline">
            {DATA.education.map((e, i) => (
              <div
                key={i}
                className={`timeline-item ${e.current ? "current" : ""}`}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-body">
                  <span className="timeline-period">{e.period}</span>
                  <h4 className="timeline-degree">{e.degree}</h4>
                  <p className="timeline-school">{e.school}</p>
                  {e.detail && <p className="timeline-detail">{e.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="certs-col">
          <h3 className="col-title">🏆 Certifications & Stages</h3>
          <div className="certs-list">
            {DATA.certifications.map((c, i) => (
              <CertItem key={i} cert={c} />
            ))}
          </div>
          <div className="soft-skills">
            <h3 className="col-title">💡 Qualités personnelles</h3>
            <div className="soft-tags">
              {DATA.softSkills.map((s) => (
                <span key={s} className="soft-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="languages-block">
            <h3 className="col-title">🌍 Langues</h3>
            {DATA.languages.map((l) => (
              <div key={l.lang} className="lang-row">
                <div className="lang-info">
                  <span className="lang-name">{l.lang}</span>
                  <span className="lang-level">{l.level}</span>
                </div>
                <div className="lang-bar">
                  <div
                    className="lang-fill"
                    style={{ width: `${l.pct}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [ref, visible] = useInView();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className={`contact-inner ${visible ? "fade-in" : ""}`}>
        <span className="section-label">CONTACT</span>
        <h2 className="section-title">Travaillons ensemble</h2>
        <p className="contact-intro">
          Je recherche une alternance en développement logiciel. N'hésitez pas à
          me contacter pour discuter de vos projets !
        </p>
        <div className="contact-cards">
          <button className="contact-card" onClick={copyEmail}>
            <span className="contact-icon">✉</span>
            <div>
              <p className="contact-label">Email</p>
              <p className="contact-value">{DATA.contact.email}</p>
              {copied && <span className="copied-badge">Copié !</span>}
            </div>
          </button>
          <a href={`tel:${DATA.contact.phone}`} className="contact-card">
            <span className="contact-icon">📞</span>
            <div>
              <p className="contact-label">Téléphone</p>
              <p className="contact-value">{DATA.contact.phone}</p>
            </div>
          </a>
          <a
            href={DATA.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">in</span>
            <div>
              <p className="contact-label">LinkedIn</p>
              <p className="contact-value">ornellanana</p>
            </div>
          </a>
          <a
            href={DATA.contact.github}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon github-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </span>
            <div>
              <p className="contact-label">GitHub</p>
              <p className="contact-value">ornelnana4</p>
            </div>
          </a>
          <a
            href={DATA.contact.trailhead}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">☁️</span>
            <div>
              <p className="contact-label">Trailhead</p>
              <p className="contact-value">Trailblazer Profile</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Ornella NANA · Développeuse Full-Stack</p>
      <p className="footer-sub">Conçu avec passion · Rennes, France</p>
    </footer>
  );
}

/* ─────────────────────────── APP ─────────────────────────── */
export default function App() {
  const [active, setActive] = useState("Profil");

  useEffect(() => {
    const sectionIds = [
      "profil",
      "compétences",
      "projets",
      "parcours",
      "contact",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label =
              entry.target.id.charAt(0).toUpperCase() +
              entry.target.id.slice(1);
            setActive(
              label === "Compétences"
                ? "Compétences"
                : label.charAt(0).toUpperCase() + label.slice(1),
            );
          }
        });
      },
      { threshold: 0.3 },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar active={active} setActive={setActive} />
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
