import { projects } from "../data/constants/projects"
import { ProjectCard } from "./shared/ProjectCard"


export const Projects = () => {

    return (
      <div className="w-full min-h-screen overflow-x-auto">
        <div className="w h-full space-y-6   bg-emerald-900">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </div>
    );
}