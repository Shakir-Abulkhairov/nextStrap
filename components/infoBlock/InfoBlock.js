
import InfoBlockAstronaut from './InfoBlockAstronaut';
import { Container, Row, Col ,Button} from 'react-bootstrap';
import cn from 'classnames';;
import Link  from 'next/link';
import style from '../../styles/InfoBlock.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../Slider';




function InfoBlock() {
  const astronauts = [
    {
      name:'Лусид, Шэннон',
      img:'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR2mCdEDVI95guoLKQl-HjevXgV7t6xMcnp3kvCUTX_UgnKVxGpUxDK4YSq&s=19',
      descr:'Ше́ннон Мати́льда Уэллс Лу́сид — американская женщина-астронавт и биохимик. Совершила 5 космических полётов',
      link:'https://ru.wikipedia.org/wiki/%D0%9B%D1%83%D1%81%D0%B8%D0%B4,_%D0%A8%D1%8D%D0%BD%D0%BD%D0%BE%D0%BD'
    },
    {
      name:'Нил Армстронг',
      img:'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTaoBvQwWKS2oJZkwVQoJl0bW2Imbsj68ujwBUMrkPHE7_bN6LL4tx3k8RsSQ&s=19',
      descr:'Нил О́лден А́рмстронг — американский астронавт НАСА, лётчик-испытатель, космический инженер, профессор университета...',
      link:'https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%BC%D1%81%D1%82%D1%80%D0%BE%D0%BD%D0%B3,_%D0%9D%D0%B8%D0%BB'
    },
    {
      name:'Олдрин, Базз',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNu5LvBaS0biZOOas8inmHnz5ZQ3wGOcfGKQwOKZasFg&s',
      descr:'Э́двин Ю́джин О́лдрин-младший, известный как Базз Олдрин, — американский авиационный инженер, бывший астронавт и лётчик. ',
      link:'https://ru.wikipedia.org/wiki/%D0%9E%D0%BB%D0%B4%D1%80%D0%B8%D0%BD,_%D0%91%D0%B0%D0%B7%D0%B7'
    },
    {
      name:'Алан Бин',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDLiEnCmNNSDZLxOP2F-dH4qnVNCaWAtIzAQzkKFqjQ&s',
      descr:'Алан Лаверн Бин — астронавт США. Четвёртый человек, ступивший на поверхность Луны.',
      link:'https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BD,_%D0%90%D0%BB%D0%B0%D0%BD'
    },
    {
      name:'Стэнли Глен Лав',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpLfPD__Ky1XIhhgD-M7dELaLANaUUW5OYbv7RGghV&usqp=CAE&s',
      descr:'Стэнли Глен Лав — американский учёный и астронавт. Совершил один космический полёт общей продолжительностью 12 суток...',
      link:'https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D0%B2,_%D0%A1%D1%82%D1%8D%D0%BD%D0%BB%D0%B8_%D0%93%D0%BB%D0%B5%D0%BD'
    },
    {
      name:'Майкл Коллинз',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrsEAVNGUwfwtDl7Sb1kyJE2znEbjGVTzdKmCwgh0r&usqp=CAE&s',
      descr:'Майкл «Майк» Ко́ллинз — американский астронавт и лётчик-испытатель, бригадный генерал ВВС США ирландского происхождения.',
      link:'https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BB%D0%BB%D0%B8%D0%BD%D0%B7,_%D0%9C%D0%B0%D0%B9%D0%BA%D0%BB_(%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%BD%D0%B0%D0%B2%D1%82)'
    },
    
  ]
  return (
    <>
      <div className={style.wrapper}>
           <Container>
            <h2 className={cn(style.title,style.white)}> planetary satellites </h2>
            <div className={cn(style.subtitle,style.white)}>lorem ipsum dolor sit am</div>
                <div className='d-flex '>
                  <Row >
                        <Col md={7}>
                            <div className='mt-5'>
                                <Slider />
                            </div>
                        </Col>
                        <Col md={5}>
                              <div className={cn(style.blockText,style.white)}>
                              <h2 className={cn(style.title,style.white)}> Оппортью́нити </h2>
                              или MER-B — второй марсоход космического агентства НАСА из двух, запущенных США в рамках проекта Mars Exploration Rover. Был выведен с помощью ракеты-носителя Дельта-2 7 июля 2003 года.
                                <br/>
                                <br/>
                                <br/>
                                Он достиг поверхности Марса 25 января 2004 года, тремя неделями позже первого марсохода «Спирит», успешно доставленного в другой район Марса, смещённый по долготе примерно на 180 градусов[8]. «Оппортьюнити» совершил посадку в кратере Игл, на плато Меридиана.
                              </div>
                        </Col>                    
                    </Row>
                </div>
                <div>
                    <Row>
                        <h2 className={cn(style.title, style.white, 'mt-5')}> astronauts</h2>
                          {
                            astronauts.map(({name,img,descr,link})=>{
                                return(
                                  <InfoBlockAstronaut name={name} img={img} descr={descr} link={link}/>
                                )
                            })
                          }
                      </Row>
                    <Link href='/About'>
                      <a>
                        <Button variant="outline-dark" className={style.btn}>About</Button>
                      </a>
                  </Link>
                </div>
           </Container>    
      </div>
 
    </>
  )
}

export default InfoBlock

