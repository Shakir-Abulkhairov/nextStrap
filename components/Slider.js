import { Carousel } from 'react-bootstrap'
import Image from 'next/image'
function Slider({ img }) {
    return (
        <Carousel>
            <Carousel.Item>
                <Image
                    src={'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2020_29/2463761/180613-mars-rover-ew-102p.jpg'}
                    width={700} height={500} alt />
                <Carousel.Caption>
                    <h3>1 fragment</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src={'https://c4.wallpaperflare.com/wallpaper/272/567/734/curiosity-mars-rover-wallpaper-preview.jpg'}
                    width={700} height={500} alt />

                <Carousel.Caption>
                    <h3>2 fragment</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src={'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/07/23/08/mars-4k-images.png?quality=75&width=982&height=726&auto=webp'}
                    width={700} height={500} alt />

                <Carousel.Caption>
                    <h3>3 fragment</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider