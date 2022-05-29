import cn from 'classnames';
import {Button,Badge} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../styles/ItemDetails.module.css';

function ItemDetails({planet,dataEx}) {
    const {name,src,gravity,discoveryDate,discoveredBy,polarRadius,isPlanet,id,sideralOrbit} = planet;
    
  return (
      <>
          <div className={cn('mt-5', style.block)}>
              <div className={style.img}>
                  <Image src={src} width={300} height={300} className={style.rounded} />
              </div>
              <div className={style.infoBlock}>
                  <Badge pill bg="dark">Название:{dataEx(name)}</Badge>
                  <Badge pill bg="dark">Гравитация:{dataEx(gravity)}</Badge>
                  <Badge pill bg="dark">Дата открытия:{dataEx(discoveryDate) }</Badge>
                  <Badge pill bg="dark">Ученый открывший:{dataEx(discoveredBy) }</Badge>
                  <Badge pill bg="dark">Полярный Радиус:{dataEx(polarRadius) }</Badge>
                  <Badge pill bg="dark">Сидеральная орбита:{dataEx(sideralOrbit)}</Badge>
                  <Badge pill bg="dark">
                    {isPlanet ? '' : 'Не'} является планетой
                  </Badge>
                  <Link href='/moons'>
                      <a>
                        <Button className={style.btn} variant="outline-dark">Home</Button>
                      </a>
                  </Link>
              </div>
          </div>
      </>
  )
}

export default ItemDetails