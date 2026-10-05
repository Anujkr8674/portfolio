import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Button from "./Button";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveUrl: string;
    githubUrl: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    >
      <div className="relative h-60 overflow-hidden">
        <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay buttons on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-background/40 backdrop-blur-sm">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-[#050508] hover:scale-110 transition-transform">
            <ExternalLink size={20} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:scale-110 transition-transform border border-border">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold font-space text-foreground mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm mb-6 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs font-medium px-3 py-1 rounded-full bg-background border border-border text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
