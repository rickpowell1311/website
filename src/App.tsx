import Nav from "./components/navbar/nav"
import githubImg from "./assets/github.svg"
import linkedinImg from "./assets/linkedin.svg"
import logo from "./assets/logo.webp"
import { Section } from "./components/section/section"

const App = () => {
  return (
    <>
      <header className="w-screen">
        <div className="container mx-auto">
          <Section>
            <Nav>
              <Nav.Group>
                <Nav.Logo href="/">
                  <img src={logo} className="max-h-8 min-h-8 min-w-8 max-w-8"/>
                </Nav.Logo>
              </Nav.Group>
              <Nav.Group>
                <Nav.Logo href="https://github.com/rickpowell1311" external={true}>
                  <img src={githubImg} className="max-h-8 min-h-8 min-w-8 max-w-8 invert"/>
                </Nav.Logo>
                <Nav.Logo href="https://www.linkedin.com/in/rick-powell-8831712b/" external={true}>
                  <img src={linkedinImg} className="max-h-8 min-h-8 min-w-8 max-w-8"/>
                </Nav.Logo>
              </Nav.Group>
            </Nav>
          </Section>
        </div>
      </header>
      <main className="w-screen">
        <div className="container mx-auto">
          <Section>
            <h1 className="text-3xl font-bold underline">
              Hello world!
            </h1>
          </Section>
        </div>
      </main>
    </>
  )
}

export default App
