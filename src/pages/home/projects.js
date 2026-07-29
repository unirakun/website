import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Social, Avatar, WagleMark } from "../../components"

const InfoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  outline: none;
  text-decoration: none;
  & > * {
    margin: 1rem 0;
    text-align: center;
  }
`

const Card = styled.div`
  min-width: 20em;
  box-shadow: 0 0 15px -5px ${({ theme }) => theme.fg};
  border-radius: 0.5em;
  padding: 1em 3em;
  width: 15em;
  height: auto;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 0 25px -5px ${({ theme }) => theme.fg};
  }
  background-color: ${({ bg, theme }) => bg || theme.fg};
  color: ${({ fg, theme }) => fg || theme.bg};
`

const Title = styled.span`
  font-size: 2em;
  font-weight: bold;
  margin-right: 0.3em;
  color: ${({ color, theme }) => color || theme.bg};
`

const Description = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: ${({ color, theme }) => color || theme.grey};
`

// Mirrors Avatar's circle, but hosts wagle's animated SVG mark instead of a png.
const MarkCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10em;
  height: 10em;
  background-color: #151a21;
  border-radius: 50%;
`

const Projects = ({ className }) => {
  return (
    <div className={className}>
      <Card fg="#fff" bg="#F8F0E3">
        <InfoLink to="https://kojimo.fr">
          <Avatar id="kojimo" />
          <Title color="#214da4">Kojimo</Title>
          <Description color="#214da4">
            The Business Accelerator for Estate Agents.
          </Description>
        </InfoLink>
      </Card>
      <Card fg="#fff" bg="#0e1116">
        <InfoLink to="https://wagle.sh">
          <MarkCircle>
            <WagleMark size={130} />
          </MarkCircle>
          <Title color="#f2a93b">Wagle</Title>
          <Description color="#9aa4b3">
            Feature flags & remote config, agent-native over MCP
          </Description>
        </InfoLink>
      </Card>
      <Card fg="#fff" bg="#4f39f6">
        <InfoLink to="https://qr.rakun.sh">
          <Avatar id="qrakun" />
          <Title>QRakun</Title>
          <Description color="#c8c3ed">
            Real-time analytics for your sharable links and QR codes
          </Description>
        </InfoLink>
      </Card>
    </div>
  )
}

export default styled(Projects)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  min-height: 40em;

  ${Social} {
    color: ${({ theme }) => theme.light};
  }
`
