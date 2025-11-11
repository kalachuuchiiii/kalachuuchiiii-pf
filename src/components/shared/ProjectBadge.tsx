import type { Project } from "../../types/project";



export const ProjectBadge = ({ project }: { project: Project }) => {
  return (
    <div className="p-2 hover:bg-muted rounded-lg">
      <h1 className="font-bold">{project.name}</h1>
      <p className="text-sm opacity-70">{project.type}</p>
    </div>
  );
};