const projects = [
  {
    name: "LaunchPad CRM",
    summary:
      "A CRM platform for managing leads, sales pipelines, and customer follow-ups with role-based access.",
    stack: "React, PHP, MySQL",
  },
  {
    name: "CityEats Finder",
    summary:
      "A restaurant discovery and review app with advanced search filters and location-based recommendations.",
    stack: "Angular, PHP, MySQL",
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
