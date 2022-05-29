import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../styles/ItemDetails.module.css';
import ItemDetails from '../../components/items/ItemDetails';
const MoonDetails = ({planet}) =>{
    if(!planet) return 'oops,they are all destroyed'
    const {id} = planet
    const dataEx = (data) =>{
        if(!data){
            return  'данных нет'
        }
        return data
    }
    return(
        <div className={style.wrapper}>
           {planet && <div>
                    <Head>
                        <title>{`Moon:${id}`}</title>
                    </Head>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <ItemDetails dataEx={dataEx} planet={planet}/>
                            </Col>
                        </Row>
                    </Container>
               </div>}
        </div>
    )
}
export async function getServerSideProps({query}) {
    const res = await fetch(`http://localhost:3000/bodies/${query.id}`)
    const planet = await res.json()
    
    return {
        props:{
            planet:planet
        }
    }
  
}
export default MoonDetails;