import Nav from "./components/navbar/nav"
import githubImg from "./assets/github.svg"
import linkedinImg from "./assets/linkedin.svg"
import logo from "./assets/logo.webp"
import { Section } from "./components/section/section"
import Console from "./components/console/Console"
import { useTypewriter } from "./hooks/typewriter"

const Program = ({ name = 'program', output = ['Finished program!'] as string[]}) => {

  const loading = useTypewriter({ delay: 2000, phrases: [`Loading ${name}...`]})
  const profile = useTypewriter({ start: loading.finished, phrases: output})

  return (
    <div className={`flex flex-col md:flex-row gap-4 ${!loading.finished ? 'animate-pulse' : ''}`}>
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
  return (
    <>
      <header className="w-screen">
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
            <Program name="profile" output={['Name: Rick Powell', 'Occupation: Software Engineer', 'Location: London, UK']} />
          </Section>
        </div>
      </main>
    </>
  )
}

export default App
