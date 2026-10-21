
"use client";

const email = "samamagithub@gmail.com";
const github = "https://github.com/samama-javed19";

const focusAreas = [
  {
    number: "01",
    icon: "✳",
    title: "Prompt Engineering",
    description:
      "Exploring how thoughtful prompts can help AI deliver useful, accurate results.",
    accent: "purple",
  },
  {
    number: "02",
    icon: "◇",
    title: "Agentic AI",
    description:
      "Learning how intelligent agents can plan tasks, use tools, and work toward goals.",
    accent: "cyan",
  },
  {
    number: "03",
    icon: "⟳",
    title: "AI Automation",
    description:
      "Discovering ways to connect workflows and simplify repetitive tasks.",
    accent: "pink",
  },
];

const skills = [
  "Agentic AI",
  "Prompt Engineering",
  "AI Agents",
  "AI Automation",
  "Python — learning",
  "AI Workflows",
  "Creative Thinking",
  "Media & Communication",
];

const projects = [
  {
    number: "01",
    type: "CONCEPT PROJECT",
    title: "AI Personal Assistant",
    description:
      "A learning concept for an AI assistant that organizes tasks and helps users find information.",
    tags: ["AI Agents", "Prompt Design"],
  },
  {
    number: "02",
    type: "WORKFLOW CONCEPT",
    title: "Smart Workflow Ideas",
    description:
      "Exploring how AI tools could connect everyday tasks into smoother digital workflows.",
    tags: ["Automation", "AI Tools"],
  },
  {
    number: "03",
    type: "CREATIVE EXPLORATION",
    title: "AI-Powered Experiences",
    description:
      "Investigating how creativity, communication, and artificial intelligence can work together.",
    tags: ["Media", "Generative AI"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="text-xl font-bold tracking-tight">
            samama<span className="text-violet-600">.ai</span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
            <a className="transition hover:text-violet-600" href="#home">Home</a>
            <a className="transition hover:text-violet-600" href="#about">About</a>
            <a className="transition hover:text-violet-600" href="#what-i-do">What I Do</a>
            <a className="transition hover:text-violet-600" href="#skills">Skills</a>
            <a className="transition hover:text-violet-600" href="#projects">Projects</a>
          </div>

          <a
            href={`mailto:${email}`}
            className="rounded-full border border-violet-300 px-4 py-2 text-sm font-medium transition hover:bg-violet-50"
          >
            Let&apos;s Connect ↗
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
      >
        <div className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-violet-100 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-cyan-50 blur-[100px]" />

        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-medium tracking-[0.16em] text-violet-700">
            <span className="text-cyan-600">✳</span>
            CURIOUS · CREATIVE · BUILDING
          </div>

          <p className="mb-2 text-sm font-medium tracking-[0.25em] text-slate-500">
            HELLO, I&apos;M
          </p>

          <h1 className="text-6xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl md:text-8xl">
            SAMAMA<span className="text-violet-600">.</span>
          </h1>

          <h2 className="mt-5 text-xl font-bold tracking-[0.12em] text-violet-700 sm:text-2xl">
            AGENTIC AI DEVELOPER
          </h2>

          <p className="mt-3 text-sm text-slate-500 sm:text-base">
            Media Student <span className="px-2 text-violet-500">•</span>
            University of Sargodha
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-700">
            I&apos;m Samama — an aspiring Agentic AI Developer fascinated by
            prompt engineering, intelligent automation, and the future of AI.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            I&apos;m currently studying Media at the University of Sargodha,
            exploring how creativity, communication, and artificial
            intelligence can come together to solve problems and create
            smarter digital experiences. I&apos;m learning by experimenting,
            asking questions, and turning ideas into projects.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {focusAreas.map((item) => (
              <article
                key={item.number}
                className={`rounded-2xl border bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  item.accent === "cyan"
                    ? "border-cyan-200 hover:shadow-cyan-100"
                    : item.accent === "pink"
                    ? "border-pink-200 hover:shadow-pink-100"
                    : "border-violet-200 hover:shadow-violet-100"
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`text-2xl ${
                      item.accent === "cyan"
                        ? "text-cyan-600"
                        : item.accent === "pink"
                        ? "text-pink-500"
                        : "text-violet-600"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="text-xs text-slate-400">{item.number}</span>
                </div>

                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              Explore My Work →
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium transition hover:border-violet-400 hover:bg-violet-50"
            >
              My Story
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
            <a className="transition hover:text-violet-700" href={`mailto:${email}`}>
              ✉ {email}
            </a>
            <a
              className="transition hover:text-cyan-700"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              ◉ GitHub Profile ↗
            </a>
          </div>
        </div>

        {/* PORTRAIT: FILE IS IN THE PUBLIC FOLDER */}
        <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
          <div className="absolute inset-8 rounded-full bg-violet-200/70 blur-[85px]" />
          <div className="absolute -inset-2 rotate-3 rounded-[2rem] border border-cyan-300" />
          <div className="absolute -inset-2 -rotate-3 rounded-[2rem] border border-violet-300" />

          <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-2 shadow-[0_20px_70px_rgba(91,33,182,0.12)]">
            <img
              src="/samama-portrait.png"
              alt="Samama — aspiring Agentic AI Developer"
              className="aspect-[4/5] w-full rounded-[1.3rem] bg-slate-100 object-cover object-center"
            />

            <div className="absolute inset-x-2 bottom-2 rounded-b-[1.2rem] bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent px-6 pb-6 pt-20">
              <p className="text-xs tracking-[0.2em] text-cyan-200">
                LEARNING · EXPLORING · BUILDING
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                The future is a work in progress.
              </p>
            </div>
          </div>

          <div className="absolute -right-2 top-12 rounded-2xl border border-violet-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:-right-8">
            <span className="text-xs text-slate-500">CURRENT FOCUS</span>
            <p className="mt-1 text-sm font-semibold text-violet-700">
              Agentic AI ✳
            </p>
          </div>

          <div className="absolute -left-2 bottom-16 rounded-2xl border border-cyan-200 bg-white/95 p-3 shadow-lg backdrop-blur sm:-left-8">
            <span className="text-xs text-slate-500">MY APPROACH</span>
            <p className="mt-1 text-sm font-semibold text-cyan-700">
              Curiosity first ◇
            </p>
          </div>
        </div>
      </section>

      {/* INTEREST STRIP */}
      <div className="border-y border-slate-200 bg-slate-50 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-semibold tracking-[0.22em] text-slate-600 sm:gap-x-10 sm:text-sm">
          <span>THINK</span><span className="text-violet-500">✳</span>
          <span>CREATE</span><span className="text-violet-500">✳</span>
          <span>PROMPT</span><span className="text-violet-500">✳</span>
          <span>EXPLORE</span><span className="text-violet-500">✳</span>
          <span>BUILD</span><span className="text-violet-500">✳</span>
          <span>EVOLVE</span>
        </div>
      </div>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20"
      >
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-700">
            01 / THE PERSON BEHIND THE PROMPTS
          </p>
          <h2 className="max-w-lg text-3xl font-bold leading-tight sm:text-4xl">
            A media student with an{" "}
            <span className="text-violet-700">AI-first mindset.</span>
          </h2>
          <p className="mt-6 leading-7 text-slate-700">
            Hi, I&apos;m Samama. I&apos;m studying Media at the University of
            Sargodha while building my knowledge of Agentic AI and prompt
            engineering.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            What excites me is the possibility of combining how people
            communicate with the way intelligent systems think and work.
            I&apos;m curious about how carefully designed prompts, AI tools,
            and connected workflows can turn complicated ideas into practical
            solutions.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            I&apos;m at the beginning of my journey, learning through
            experimentation and creating projects that help me grow.
          </p>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-8 sm:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-200/60 blur-3xl" />
          <p className="text-xs font-semibold tracking-[0.2em] text-violet-700">
            MY MINDSET
          </p>
          <p className="mt-5 text-6xl leading-none text-violet-300">“</p>
          <h3 className="relative text-2xl font-semibold leading-snug text-slate-900">
            Ask better questions.
            <br />
            Imagine bigger possibilities.
            <br />
            Build something meaningful.
          </h3>
          <p className="mt-5 max-w-md leading-7 text-slate-600">
            I believe curiosity and creativity are powerful starting points
            for understanding and using AI.
          </p>
          <p className="mt-7 text-right text-sm italic text-violet-700">
            — Samama
          </p>
        </div>
      </section>

      {/* WHAT I DO */}
      <section id="what-i-do" className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-700">
            02 / WHAT I DO
          </p>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.7fr]">
            <div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Curious about AI.
                <br />
                Driven to <span className="text-violet-700">create.</span>
              </h2>
              <p className="mt-5 max-w-sm leading-7 text-slate-600">
                I&apos;m exploring tools and ideas that make artificial
                intelligence more useful, creative, and capable.
              </p>
              <a
                href="#skills"
                className="mt-6 inline-block rounded-full border border-violet-300 px-5 py-3 text-sm font-medium transition hover:bg-violet-100"
              >
                Explore My Skills →
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {focusAreas.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100"
                >
                  <span className="text-3xl text-violet-600">{item.icon}</span>
                  <h3 className="mt-5 font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-700">
          03 / SKILLS &amp; INTERESTS
        </p>
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold">Tools I&apos;m exploring.</h2>
            <p className="mt-4 max-w-md leading-7 text-slate-600">
              Concepts and technologies I&apos;m learning about and building
              my understanding in, one experiment at a time.
            </p>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`rounded-full border px-4 py-3 text-sm font-medium transition hover:-translate-y-0.5 ${
                  index % 3 === 0
                    ? "border-violet-200 bg-violet-50 text-violet-800"
                    : index % 3 === 1
                    ? "border-cyan-200 bg-cyan-50 text-cyan-800"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                ✳ &nbsp;{skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-700">
            04 / SELECTED EXPLORATIONS
          </p>

          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Ideas in progress.</h2>
              <p className="mt-3 text-slate-600">
                Small steps toward bigger possibilities.
              </p>
            </div>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-violet-700 transition hover:text-cyan-700"
            >
              Visit my GitHub ↗
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-light text-violet-600">
                    {project.number}
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.13em] text-slate-500">
                    {project.type}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-slate-900 transition group-hover:text-violet-700">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs text-slate-500">
            These are concept and learning projects, not claims of completed
            client work.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-violet-100 blur-[80px]" />

        <p className="relative mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-700">
          05 / GET IN TOUCH
        </p>

        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              Let&apos;s build something
              <br />
              amazing <span className="text-violet-700">together.</span>
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Have an idea, a question, or an opportunity to learn together?
              I&apos;d love to hear from you.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${email}`}
              className="rounded-full bg-violet-600 px-7 py-4 text-center font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              ✉ &nbsp; Say Hello
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-7 py-4 text-center font-medium transition hover:border-cyan-400 hover:bg-cyan-50"
            >
              ◉ &nbsp; GitHub Profile ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm sm:px-8 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="text-lg font-bold">
            samama<span className="text-violet-600">.ai</span>
          </a>
          <p className="text-slate-500">Built with curiosity, creativity &amp; AI.</p>
          <a href="#home" className="text-slate-500 transition hover:text-violet-700">
            ↑ Back to top
          </a>
        </div>
      </footer>
    </main>
  );
}
