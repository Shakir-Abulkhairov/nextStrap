
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import {Col,Row,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Promo.module.css';


function Promo() {
  return (
    <>
        <div className={style.promo}>
            <Container>
                <Row>
                      <Col md={5} className={style.text}>
                        Welcome to the Moons
                        <div>discover new beauties</div>
                       <Link href="/moons">
                          <a>
                            <Button variant="outline-dark" className={style.btn}>Start</Button>
                          </a>
                       </Link>
                      </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Promo