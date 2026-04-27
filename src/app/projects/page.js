const projects = [
  {
    name: "LaunchPad CRM",
    summary:
      "A sales dashboard that tracks leads, automates follow-ups, and visualizes conversion trends.",
    stack: "Next.js, PostgreSQL, Prisma, Chart.js",
  },
  {
    name: "CityEats Finder",
    summary:
      "A restaurant discovery platform with filters, user reviews, maps, and curated local lists.",
    stack: "React, Node.js, Express, MongoDB",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            <p>
              <strong>Stack:</strong> {project.stack}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
