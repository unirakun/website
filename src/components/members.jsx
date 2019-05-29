import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from './image'
import { css } from '@emotion/core'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Members = ({ id }) => {
  const { allMembersJson } = useStaticQuery(
    graphql`
      query {
        allMembersJson {
          edges {
            node {
              name
              firstName
              image
              title
              color
              cv
              links {
                icon
                link
              }
            }
          }
        }
      }
    `
  )

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background: #fff;
        margin: auto;
        justify-content: space-around;
      `}
    >
      {allMembersJson.edges.map(({ node: member }) => (
        <div
          key={member.name}
          css={css`
            border-radius: .5em;
            box-shadow: 0 0 0 1px #e2e9ed;
            width: calc(100vw - 2em);
            max-width: 25em;
            margin: 1em;
            & > * {
              margin: 1rem 0;
            }
          `}
        >
          <OutboundLink
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              outline: none;
              text-decoration: none;
              & > * {
                margin: 1rem 0;
              }
            `}
            href={member.cv}
          >
            <div
              css={css`
                width: 10em;
                height: 10em;
                border-radius: 50%;
                overflow: hidden;
              `}
            >
              <Img
                css={css`
                  display: block;
                  width: 100%;
                  max-width: 100%;
                `}
                fileName={member.image}
              />
            </div>

            <span
              css={css`
                font-size: 2em;
                color: ${member.color};
              `}
            >
              {`${member.firstName} `}
              <span
                css={css`
                  color: #333;
                `}
              >
                {member.name}
              </span>
            </span>
            <span
              css={css`
                font-size: 1.3em;
                color: #6f808a;
              `}
            >
              {member.title}
            </span>
          </OutboundLink>
          <div
            css={css`
            width: 100%;
            display: flex;
            justify-content: space-evenly;
          `}
          >
            {member.links.map(({ link, icon }) => (
              <OutboundLink
                key={icon}
                href={link}
                css={css`
                  color: ${member.color};
                  font-size: 2em;
                  outline: none;
                  text-decoration: none;
                `}
              >
                <i className={`brand-${icon}`} />
              </OutboundLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Members
