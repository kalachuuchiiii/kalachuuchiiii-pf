import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { AspectRatio } from "../ui/aspect-ratio";
import { Button } from "../ui/button";
import { LucideSquareArrowOutUpRight } from "lucide-react";



export const ProjectCard = ({ project }: {project: Project}) => {

    return (
      <div className="w-full max-w-5xl  pb-8 overflow-hidden rounded-4xl bg-zinc-900 space-y-2 mx-auto ">
        <div className="flex items-center mx-auto">
          <AspectRatio ratio={16 / 9}>
            <Link target="_blank" to={project.link}>
              <img
                className="w-full hover:scale-102 transition-transform duration-400    h-full object-cover bg-muted"
                src={project.img}
              />
            </Link>
          </AspectRatio>
        </div>
        <div className="px-8 pt-4 space-y-3">
          <div className="flex items-center gap-2 ">
            <p className="unbounded-text">{project.name}</p>
            <p className="p-2 rounded-full backdrop-brightness-150 w-fit px-6">
              {project.type}
            </p>
          </div>
          <p>{project.description}</p>
        </div>
        <div className="px-8 w-full py-4 flex justify-end">
          <Link target="_blank" to={project.repoLink}>
            <Button variant={"link"}>
              Code <LucideSquareArrowOutUpRight />
            </Button>
          </Link>
        </div>
      </div>
    );
}