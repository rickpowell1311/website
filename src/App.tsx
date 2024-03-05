import Nav from "./components/navbar/nav"
import githubImg from "./assets/github.svg"
import linkedinImg from "./assets/linkedin.svg"
import logo from "./assets/logo.webp"
import { Section } from "./components/section/section"
import Console from "./components/console/Console"
import { useTypewriter } from "./hooks/typewriter"
import Launcher from "./components/launcher/launcher"
import CommandLineIcon from "./assets/command-line.svg"
import UserIcon from "./assets/user.svg"
import ArchiveBoxIcon from "./assets/archive-box.svg"
import QuestionMarkCircleIcon from "./assets/question-mark-circle.svg"
import { useState } from "react"

const Program = ({ name = 'program', output = ['Finished program!'] as string[]}) => {

  const loading = useTypewriter({ delay: 1000, phrases: [`Loading ${name}...`, 'Done!']})
  const profile = useTypewriter({ start: loading.finished, phrases: output})

  return (
    <div className={`flex flex-col md:flex-row gap-4 animate-pop`}>
      <Console>
          {
            loading.typed.map((text, index) => {
              return (
                <Console.Line key={text}>
                  <Console.Line.Text text={text} />
                  { (index === loading.typed.length - 1 && !loading.finished) && <Console.Line.Cursor /> }
                </Console.Line>
              )
            })
          }
          {
            loading.finished &&
            <>
              <Console.Line includeInputDelimiter={false}></Console.Line>
              {
                profile.typed.map(text => {
                  return (
                    <Console.Line key={text} includeInputDelimiter={false}>
                      <Console.Line.Text text={text} />
                    </Console.Line>
                  )
                })
              }
            </>
          }
      </Console>
    </div>
  )
}

const App = () => {

  const [program, setProgram] = useState<string | undefined>()

  return (
    <>
      <header className="w-screen pb-8">
        <div className="container mx-auto">
          <Section>
            <Nav>
              <Nav.Group>
                <Nav.Logo href="/">
                  <img src={logo} className="max-h-16 min-h-8 min-w-8 max-w-8" />
                </Nav.Logo>
              </Nav.Group>
              <Nav.Group>
                <Nav.Logo href="https://github.com/rickpowell1311" external={true}>
                  <img src={githubImg} className="max-h-8 min-h-8 min-w-8 max-w-8 invert" />
                </Nav.Logo>
                <Nav.Logo href="https://www.linkedin.com/in/rick-powell-8831712b/" external={true}>
                  <img src={linkedinImg} className="max-h-8 min-h-8 min-w-8 max-w-8" />
                </Nav.Logo>
              </Nav.Group>
            </Nav>
          </Section>
        </div>
      </header>
      <main className="w-screen">
        <div className="container mx-auto">
          <Section>
            <Launcher className={`${program !== undefined ? 'hidden': ''}`}>
              <Launcher.Tile onClick={() => setProgram('profile')}>
                <Launcher.Tile.Icon>
                  <img src={UserIcon} alt="Profile" />
                </Launcher.Tile.Icon>
                <Launcher.Tile.Label>
                  <p>Profile</p>
                </Launcher.Tile.Label>
              </Launcher.Tile>
              <Launcher.Tile onClick={() => setProgram('technologies')}>
                <Launcher.Tile.Icon>
                  <img src={CommandLineIcon} alt="Technologies" />
                </Launcher.Tile.Icon>
                <Launcher.Tile.Label>
                  <p>Technologies</p>
                </Launcher.Tile.Label>
              </Launcher.Tile>
              <Launcher.Tile onClick={() => setProgram('cv')}>
                <Launcher.Tile.Icon>
                  <img src={ArchiveBoxIcon} alt="CV" />
                </Launcher.Tile.Icon>
                <Launcher.Tile.Label>
                  <p>CV</p>
                </Launcher.Tile.Label>
              </Launcher.Tile>
              <Launcher.Tile onClick={() => setProgram('extra')}>
                <Launcher.Tile.Icon>
                  <img src={QuestionMarkCircleIcon} alt="Extra" />
                </Launcher.Tile.Icon>
                <Launcher.Tile.Label>
                  <p>Bonus</p>
                </Launcher.Tile.Label>
              </Launcher.Tile>
            </Launcher>
          </Section>
          <Section>
            {
              program === 'profile' && <Program name="profile" output={['Name: Rick Powell', 'Occupation: Software Engineer', 'Location: London, UK']} />
            }
          </Section>
        </div>
      </main>
    </>
  )
}

export default App
