import style from'../../styles/ItemList.module.scss';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
function ItemList({planet}) {
  return (
      <>
          <div className={style.card}>
            <div className={style.rounded}>
                 <Image width="100%" height="100%" layout="responsive" objectFit="contain"  className="card-img-top" src={planet.src} alt="Card image cap"/>
            </div>
                  <div className="card-body">
                      <p className="card-text">{planet.name}</p>
                  </div>
          </div>
      </>
  )
}

export default ItemList