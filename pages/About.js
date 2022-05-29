import Link from 'next/link';

import {Button,Container,Accordion} from 'react-bootstrap';
import style from '../styles/About.module.css';


function About() {
  return (
    <div className={style.wrapper}>    
      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>FAQ</Accordion.Header>
            <Accordion.Body>
               this is a project that has bootstrap and next !!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Why?</Accordion.Header>
            <Accordion.Body>
              because it's interesting!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className={style.btn}>
          <Link href='/'>
            <a>
              <Button varian='outline-dark'>Home</Button>
            </a>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default About