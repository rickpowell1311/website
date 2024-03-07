import Nav from "./components/navbar/nav"
import githubImg from "./assets/github.svg"
import linkedinImg from "./assets/linkedin.svg"
import logo from "./assets/logo.webp"
import { Section } from "./components/section/section"
import { useTypewriter } from "./hooks/typewriter"
import Launcher from "./components/launcher/launcher"
import CommandLineIcon from "./assets/command-line.svg"
import UserIcon from "./assets/user.svg"
import ArchiveBoxIcon from "./assets/archive-box.svg"
import QuestionMarkCircleIcon from "./assets/question-mark-circle.svg"
import { useEffect, useState } from "react"
import Console from "./components/console/console"
import { Download } from "./components/download/download"
import cv from "./assets/cv.pdf"
import circuitBoardImg from "./assets/circuit-board.webp";

const Program = ({ name = 'program', onClose = () => { }, onFinished = () => {}, output = ['Finished program!'] as string[], children = undefined as any }) => {

  const loading = useTypewriter({ delay: 1000, phrases: [`Loading ${name}...`, 'Done!'] })
  const main = useTypewriter({ start: loading.finished, phrases: output })

  useEffect(() => {
    if (main.finished) {
      onFinished()
    }
  }, [main.finished])

  const onClick = () => {
    if (loading.finished && main.finished) {
      onClose?.()
      return;
    }

    loading.rush()
    main.rush()
  }

  return (
    <div className={`w-full flex flex-col md:flex-row gap-4 animate-pop`}>
      <Console onClick={onClick} onClose={onClose}>
        {
          loading.typed.map((text, index) => {
            return (
              <Console.Line key={text}>
                <Console.Line.Text text={text} />
                {(index === loading.typed.length - 1 && !loading.finished) && <Console.Line.Cursor />}
              </Console.Line>
            )
          })
        }
        {
          loading.finished &&
          <>
            <Console.Line includeInputDelimiter={false}></Console.Line>
            {
              main.typed.map(text => {
                return (
                  <Console.Line key={text} includeInputDelimiter={false}>
                    <Console.Line.Text text={text} />
                  </Console.Line>
                )
              })
            }
            { children }
          </>
        }
        {
          main.finished &&
          <>
            <Console.Line includeInputDelimiter={false} />
            <Console.Line includeInputDelimiter={false}>
              <Console.Line.Text type="info" text="Finished! Click or tap on this window to exit" />
            </Console.Line>
          </>
        }
      </Console>
    </div>
  )
}

const AppLauncher = ({ layout = "grid" as "grid" | "nav", onProgramLaunched = (_: string) => { }, className = "" }) => {

  const [_, setProgram] = useState<string | undefined>()

  const onProgramSelected = (val: string) => {
    onProgramLaunched(val)
    setProgram(val)
  }

  return (
    <Launcher layout={layout} className={className}>
      <Launcher.Tile onClick={() => onProgramSelected('profile')}>
        <Launcher.Tile.Icon>
          <img src={UserIcon} alt="Profile" />
        </Launcher.Tile.Icon>
        <Launcher.Tile.Label>
          <p>Profile</p>
        </Launcher.Tile.Label>
      </Launcher.Tile>
      <Launcher.Tile onClick={() => onProgramSelected('skills')}>
        <Launcher.Tile.Icon>
          <img src={CommandLineIcon} alt="Skills" />
        </Launcher.Tile.Icon>
        <Launcher.Tile.Label>
          <p>Skills</p>
        </Launcher.Tile.Label>
      </Launcher.Tile>
      <Launcher.Tile onClick={() => onProgramSelected('cv')}>
        <Launcher.Tile.Icon>
          <img src={ArchiveBoxIcon} alt="CV" />
        </Launcher.Tile.Icon>
        <Launcher.Tile.Label>
          <p>CV</p>
        </Launcher.Tile.Label>
      </Launcher.Tile>
      <Launcher.Tile onClick={() => onProgramSelected('about')}>
        <Launcher.Tile.Icon>
          <img src={QuestionMarkCircleIcon} alt="?" />
        </Launcher.Tile.Icon>
        <Launcher.Tile.Label>
          <p>About</p>
        </Launcher.Tile.Label>
      </Launcher.Tile>
    </Launcher>
  )
}

const ProfileProgram = ({ onClose = () => {} }) => {
  return (
    <Program name="profile" output={[
      'Name: Rick Powell', 
      'Occupation: Software Engineer', 
      'Location: London, UK',
      'Years Experience: 13',
      '',
      'My mantra...',
      '1: Don\'t be afraid to ask for help',
      '2: There are no silver bullets',
      '3: Keep learning',
      '4: It\'s okay to make mistakes',
      '5: Take satisfaction in what you do'
    ]} onClose={onClose} />
  )
}

const SkillsProgram = ({ onClose = () => {}}) => {
  return (
    <Program name="skills" output={['Languages: C#, Javascript, TypeScript, Python, Node, F#, SQL', 'Cloud: Azure, Google Cloud Platform', 'Frontend frameworks: React, Angular', 'Backend frameworks: .NET, Node', 'Databases: SQL Server, PostgreSql, Cosmos', 'DevOps: Docker, Terraform, Pulumi, Kubernetes']} onClose={onClose} />
  )
}

const CvProgram = ({ onClose = () => {} }) => {
  const [showCv, setShowCv] = useState(false)

  const onProgramClose = () => {
    onClose?.()
    setShowCv(false)
  }

  return (
    <div className="flex-grow flex flex-col gap-8 items-center">
      <Program name="CV" output={['Generating download link...']} onFinished={() => setShowCv(true)} onClose={onProgramClose}>
      {
        showCv &&
        <>
          <Console.Line includeInputDelimiter={false} />
          <Console.Line includeInputDelimiter={false} />
          <Console.Line includeInputDelimiter={false}>
            <div className="flex">
              <Download url={cv} fileName="Rick Powell - CV.pdf" description="Download CV" onClick={e => e.stopPropagation()} />
            </div>
          </Console.Line>
          <Console.Line includeInputDelimiter={false} />
        </>
      }
      </Program>
    </div> 
  )
}

const AboutProgram = ({ onClose = () => {}}) => {
  return (
    <Program name="about" output={[
      'This website was made using React, TailwindCSS and Vite', 
      'If you notice any issues please email rickpowell1311@gmail.com or leave an issue on the linked github repository :)'
    ]} onClose={onClose} />
  )
}

const App = () => {

  const [program, setProgram] = useState<string | undefined>()

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-dvw h-dvh -z-10 overflow-hidden">
        <img src={circuitBoardImg} className="h-full w-full opacity-[0.05] object-cover scale-150" />
      </div>
      <header className="w-screen pb-8">
        <div className="container mx-auto">
          <Section>
            <Nav>
              <Nav.Group>
                <Nav.Logo href="/website/">
                  <img src={logo} className="max-h-16 min-h-8 min-w-8 max-w-8" />
                </Nav.Logo>
              </Nav.Group>
              <Nav.Group>
                <Nav.Logo href="https://github.com/rickpowell1311/website" external={true}>
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
            <AppLauncher layout="grid" className={`${program ? "hidden" : ""}`} onProgramLaunched={setProgram} />
          </Section>
          <Section>
            {
              program === 'profile' && <ProfileProgram onClose={() => setProgram(undefined)} />
            }
            {
              program === 'skills' && <SkillsProgram onClose={() => setProgram(undefined)} />
            }
            {
              program === 'cv' && <CvProgram onClose={() => setProgram(undefined)}/>
            }
            {
              program === 'about' && <AboutProgram onClose={() => setProgram(undefined)} />
            }
          </Section>
        </div>
      </main>
    </div>
  )
}

export default App
