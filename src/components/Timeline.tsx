import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Nov 2022 - Dec 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Nokia - Sunnyvale, CA</h4>
            <p>
              Golang, Docker, Kubernetes, Helm, gRPC, Microservices, CI/CD, Distributed Systems, Backend Development, Alarm Monitoring Systems
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2021 - Nov 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Configuration Management Engineer II</h3>
            <h4 className="vertical-timeline-element-subtitle">Exact Sciences - Redwood City, CA</h4>
            <p>
              C#, Azure DevOps Server, CI/CD Pipelines, Git, Perforce, Salesforce, Informatica, Release Management, Automation, Build Systems, DevOps
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2020 - Sep 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Configuration Management Engineer I</h3>
            <h4 className="vertical-timeline-element-subtitle">Exact Sciences - Redwood City, CA</h4>
            <p>
              Python, Shell Scripting, Azure DevOps, CI/CD, Build Validation, Release Automation, Git, Workflow Optimization
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2019 - Sep 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Release Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Genomic Health Inc. - Redwood City, CA</h4>
            <p>
              Azure DevOps Server, Git, TFVC, CI/CD Pipelines, Release Management, Build Monitoring, Version Control, Documentation
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;