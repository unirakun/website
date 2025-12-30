import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Avatar, Background, Age, Social } from '../../../components'
import Skills from './skills'

const Who = ({ className, id, next, who, skills }) => {
  const {
    name,
    firstName,
    what,
    birthday,
    worksSince,
    socials,
  } = who

  return (
    <Background className={className} secondary>
      <Avatar className="avatar" id={id} />
      <Link to={`/${next}`} className="other">
        <Avatar className="avatar" id={next} />
      </Link>

      <div className="description">
        <h1>{`${firstName} ${name}`}</h1>
        <h2>{what}</h2>
      </div>

      <div className="age-experience">
        <Age from={birthday} suffix=" years old - " />
        <Age from={worksSince} suffix=" years of experience" />
      </div>

      <div className="socials">
        {socials.map(social => <Social key={social.id} {...social} text />)}
      </div>

      <Skills>{skills}</Skills>

    </Background>
  )
}

Who.defaultProps = {
  who: {
    socials: [],
  },
  skills: [],
}

export default styled(Who)`
  min-height: 20em;
  grid-area: who;
  padding-top: 4em;
  padding-bottom: 4em;
  display: grid;
  align-items: center;
  position: relative;
  grid-template-columns: 5em 10em auto 1fr auto auto 5em;
  grid-template-rows: 3em 3em 3em 3em auto;
  grid-template-areas:
    ". socials avatar . . . ."
    ". socials avatar description . . ."
    ". socials avatar . . . ."
    ". socials avatar age-experience . . ."
    "skills skills skills skills skills skills skills";

  & > .other {
    font-size: 0.5em;
    cursor: pointer;

    @media print {
      display: none;
    }

    & > .avatar {
      opacity: 0.3;
      position: absolute;
      top: 1em;
      right: 1em;

      &:hover {
        opacity: 1;
      }
    }
  }

  & > .avatar {
    grid-area: avatar;
    justify-self: end;
    margin: 0 3em;
  }

  & > .description {
    grid-area: description;
  }

  & > .age-experience {
    grid-area: age-experience;
    min-height: 1em;
    align-self: baseline;
  }

  & > .socials {
    grid-area: socials;
    justify-self: end;
    min-width: 12em;

    & > ${Social} {
      display: flex;
      align-items: center;
      font-size: 1em;
      color: ${({ theme }) => theme.light};

      & span {
        margin-left: 1em;
        text-decoration: underline;
      }
    }

    & > *:not(:first-child) {
      margin-top: 1em;
    }
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      ". socials avatar ."
      "description description description description"
      "age-experience age-experience age-experience age-experience"
      "skills skills skills skills";
    text-align: center;

    & > .avatar {
      justify-self: end;
      margin-left: 3em;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "socials avatar avatar ."
      "description description description description"
      "age-experience age-experience age-experience age-experience"
      "skills skills skills skills";

    & > .socials {
      min-width: inherit;
      justify-self: start;
      margin-left: 1em;

      & > a {
        & > span {
          display: none;
        }
      }
    }

    & > .avatar {
      justify-self: center;
    }
  }

  & > * {
    z-index: 10;
  }
`
