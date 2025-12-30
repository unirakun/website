import React from "react"
import styled from "styled-components"
import Summary from "./summary"
import Experience from "./experience"
import getId from "./getExperienceId"

const Experiences = ({ className, children = [] }) => (
  <div className={className}>
    <h1>Some Experiences</h1>

    {/* TODO: construct id here ? Maybe in API... */}

    <Summary columns={2}>{children}</Summary>

    {children.map((experience) => (
      <Experience key={getId(experience)} {...experience} />
    ))}
  </div>
)

export default styled(Experiences)`
  grid-area: experiences;
  margin: 0 auto;
  padding: 0 1em;

  & > h1 {
    text-align: center;
    margin: 0 auto;
  }

  & > ${Experience} {
    max-width: 70em;
    margin: 10em auto;
  }

  @media print {
    & > ${Experience} {
      max-width: 70em;
      margin: 5em auto;
    }

    & > ${Summary} {
      font-size: 0.7em;
    }
  }
`
