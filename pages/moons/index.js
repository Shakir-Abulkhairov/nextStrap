import {Row,Col,Container,Button} from 'react-bootstrap';
import Link from 'next/link';
import ItemList from '../../components/items/ItemList';
import style from'../../styles/ItemList.module.scss';

const Moons = ({planets}) =>{
console.log(planets)
    return(
        <>
            <div className={style.wrapper}>
                <Container>
                  <Row>
                     {
                         planets.map((planet)=>{
                             return (
                                <Col md={3} key={planet.id}>
                                    <Link href={`/moons/${planet.id}`}>
                                        <a>
                                             <ItemList planet={planet}/>
                                        </a>
                                    </Link>
                                </Col>
                             )
                         })
                     }
                  <Link href='/'>
                     <a>
                        <Button className={style.btn}  variant="outline-dark">Home</Button>
                     </a>
                  </Link>
                  </Row>
                </Container>
            </div>
        </>
    )
}
export async function getStaticProps() {
    try {
        const response = await fetch('http://localhost:3000/bodies');
        const body = await response.json();
        if (!body) {
            return {
                notFound: true,
            }
        }
        return {
            props: {
                planets: body
            }
        }
    } catch (e) {
        return {
            props: {
                planets: null
            }
        }
    }
  }

export default Moons;

