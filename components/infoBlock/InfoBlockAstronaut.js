import Image from 'next/image';
import style from '../../styles/InfoBlock.module.css';
import {Col,Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const infoBlockAstronaut =({name,img,descr,link}) =>{
    return (
        <Col md={3}>
            <Card className={style.card}>
                <Image className={style.img} src={img} width="100%" height="100%" layout="responsive" objectFit="contain" alt="Card image cap" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {descr}
                    </Card.Text>
                </Card.Body>
                <a href={link} class="btn btn-primary btn-lg " role="button" >Подробнее</a>
            </Card>

        </Col>
    )

  
}

export default infoBlockAstronaut;