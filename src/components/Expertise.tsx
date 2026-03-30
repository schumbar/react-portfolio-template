import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Golang",
  "Python",
  "C#",
  "TypeScript",
  "JavaScript",
  "Neo4J",
  "MongoDB",
  "SQLite",
];

const labelsSecond = [
  "Docker",
  "Kubernetes",
  "Helm",
  "Terraform",
  "Jenkins",
  "Azure DevOps Server",
  "CI/CD",
  "Postman",
  "Ubuntu Linux",
];

const labelsThird = ["AI Agents", "Data Science", "Artificial Intelligence"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Backend Web Development</h3>
            <p>
              I design and build scalable backend systems and microservices
              using Golang and Python, with hands-on experience developing
              high-performance APIs and distributed systems within containerized
              environments like Docker and Kubernetes.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              I implement and optimize CI/CD pipelines, release management
              workflows, and infrastructure automation using tools like Azure
              DevOps, Jenkins, Docker, Kubernetes, and Terraform—improving
              deployment reliability, reducing manual effort, and increasing
              system stability.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAI & LLM</h3>
            <p>
              I apply AI and machine learning concepts, including AI agents and
              model deployment, to build intelligent systems and enhance
              developer workflows, with a focus on integrating modern AI
              capabilities into scalable software solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
