import Image from "next/image";

const projects = [
  {
    number: "01",
    category: "Навчальний проєкт",
    title: "TravelTrucks",
    description: "Пошук кемперів · обране · бронювання",
    image: "/projects/travel-trucks.png",
    href: "https://travel-trucks-gules-chi.vercel.app/",
  },
  {
    number: "02",
    category: "Гра · React",
    title: "Ну ти поняв",
    description: "Гра на одному пристрої · онлайн-лобі",
    image: "/projects/nu-ty-poniav.png",
    href: "https://nu-ty-poniav.vercel.app/",
  },
  {
    number: "03",
    category: "Застосунок · Next.js",
    title: "NoteHub",
    description: "Нотатки · сортування · бекенд",
    image: "/projects/notehub.png",
    href: "https://09-auth-two-mu-17.vercel.app/",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top">
          ANNA PAVELKO
        </a>

        <nav aria-label="Головна навігація">
          <a href="#work">Проєкти</a>
          <a href="#contact">Контакт</a>
        </nav>
      </header>

      <main id="top" className="page-shell">
        <section className="hero">
          <div>
            <p className="eyebrow">Full-stack developer · Київ, Україна</p>
            <h1>
              Створюю
              <br />
              <em>цифрові речі.</em>
            </h1>
          </div>

          <div className="hero-copy">
            <p>
              Перетворюю макети з Figma на адаптивні сайти й створюю
              функціональні вебзастосунки. Працюю з HTML, CSS, JavaScript, React
              і Next.js та дбаю про деталі й зручність на різних екранах.
            </p>
            <a className="text-link" href="#work">
              Переглянути проєкти <span aria-hidden="true">↘</span>
            </a>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-heading">
            <h2>Вибрані проєкти</h2>
            <span>01 — 03</span>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <a
                className="project-card"
                key={project.number}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Відкрити проєкт ${project.title} у новій вкладці`}
              >
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.number}</span>
                </div>

                <div className="project-art">
                  <Image
                    src={project.image}
                    alt={`${project.title} — головна сторінка`}
                    fill
                    sizes="(max-width: 600px) 78vw, (max-width: 900px) 38vw, 25vw"
                    className="preview-image"
                  />
                </div>

                <div className="project-caption">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div>
            <p className="eyebrow">Контакт</p>
            <h2>Відкрита до нових проєктів.</h2>
          </div>

          <div className="contact-links">
            <a className="text-link" href="mailto:anyapavelko24@gmail.com">
              Написати на пошту <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/anna-pavelko"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link"
              href="https://github.com/PavelkoAnna"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <footer className="site-footer">
          <span>© 2026 Anna Pavelko</span>
          <span>Київ, Україна</span>
        </footer>
      </main>
    </>
  );
}
