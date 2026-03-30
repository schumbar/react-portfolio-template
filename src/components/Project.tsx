import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://gemini-hackthon-flood-scout.vercel.app/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://gemini-hackthon-flood-scout.vercel.app/" target="_blank" rel="noreferrer"><h2>Flood Scout (Gemini Hackathon)</h2></a>
                <p>FloodScout is a serverless Next.js application that uses Google Gemini AI to instantly analyze flood-damaged buildings from a single photograph. It provides comprehensive structural insights, hazard detection, repair cost estimates, and confidence scoring in under 10 seconds — built in response to the Swat Valley flood disaster.</p>
            </div>
            <div className="project">
                <a href="https://github.com/schumbar/CMPE255_Team_Project" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/schumbar/CMPE255_Team_Project" target="_blank" rel="noreferrer"><h2>Research Paper Summarization</h2></a>
                <p>A Flask-based web application that summarizes complex PDF documents using NLP and machine learning models, designed to parse and condense extensive research paper text into high-precision summaries. The app is deployed live on Heroku.</p>
            </div>
            <div className="project">
                <a href="https://github.com/schumbar/AI-Agent-Video-Fact-Finder" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/schumbar/AI-Agent-Video-Fact-Finder" target="_blank" rel="noreferrer"><h2>AI Agent Video Fact Finder</h2></a>
                <p>Video Fact Finder is a multi-agent application that analyzes YouTube videos and produces a summarized version of their content using OpenAI and Perplexity AI agents working in tandem. Users simply input a YouTube URL and the agents handle transcription, analysis, and summarization automatically.</p>
            </div>
            <div className="project">
                <a href="https://github.com/schumbar/CMPE-258-Final-Project/tree/main" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/schumbar/CMPE-258-Final-Project/tree/main" target="_blank" rel="noreferrer"><h2>Infinite Interact: Multi-Agent Operational Suite</h2></a>
                <p>A multi-agent operational suite that uses LangChain and OpenAI to build five distinct AI agents: a Multimedia Agent for YouTube video Q&A, a PandasAI Agent for CSV querying and plotting, a Presentation Agent for generating PowerPoints, a README Generator Agent, and a Web Scraping Agent.</p>
            </div>
            <div className="project">
                <a href="https://github.com/schumbar/N8N_Projects" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/schumbar/N8N_Projects" target="_blank" rel="noreferrer"><h2>N8N Projects</h2></a>
                <p>N8N_Projects is a public collection of N8N workflow automation projects built as coursework assignments, covering three application types: a chat frontend for customer support, a backend-triggered service (e.g., Kafka or email handling), and a human-in-the-loop app that invokes a human agent when AI assistance is insufficient.</p>
            </div>
            <div className="project">
                <a href="https://github.com/schumbar/AIDevX" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/schumbar/AIDevX" target="_blank" rel="noreferrer"><h2>AIDevX</h2></a>
                <p>AIDevX is a platform for software development AI agents that can do anything a human developer can — modify code, run commands, browse the web, and call APIs. It runs locally via Docker and supports multiple LLM providers, with Anthropic Claude 3.7 Sonnet recommended as the primary model.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
