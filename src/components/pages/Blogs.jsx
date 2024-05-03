import React, { useState } from "react";
import Layout from '../Layout'
import Carousel from 'react-material-ui-carousel';
import Typography from '@mui/material/Typography';
import music from '../../img/Music.jpg'
import books from '../../img/books.webp'
import sweets from '../../img/sweets.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { RWebShare } from 'react-web-share';
import './Blogs.css'
import firstbl from '../../img/firstbl.png'
import secondbl from '../../img/secondbl.webp'
import thirdbl from '../../img/thirdbl.webp'
import fourthbl from '../../img/fourthbl.png'
import fifthbl from '../../img/fifthbl.webp'
import sixthbl from '../../img/sixthbl.webp'
function Blogs() {
    const [articles] = useState([
        {
            id: 1,
            title: 'Sweets for coffee',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            url: 'https://www.youtube.com/watch?app=desktop&v=YQRN5G_qY98',
            image: sweets
        },
        {
            id: 2,
            title: 'Books for coffee',
            description: 'Six books to read while drinking your afternoon or coffee',
            url: 'https://www.youtube.com/watch?app=desktop&v=YQRN5G_qY98',
            image: books
        },
        {
            id: 3,
            title: 'Music for coffee',
            description: 'Morning Relaxing Music - Coffee Music and Sunshine - The most beautiful love song in the world',
            url: 'https://www.youtube.com/watch?app=desktop&v=YQRN5G_qY98',
            image: music
        }
    ]);

    const [coffees] = useState([
        {
            id: 1,
            title: 'ESPRESSOS',
            description: 'Browse hundreds of espresso reviews to find your next favorite espresso beans.',
            url: 'https://www.coffeereview.com/types/espresso/',
            image: firstbl
        },
        {
            id: 2,
            title: 'TASTING REPORTS',
            description: 'Enjoy access to hundreds of our monthly tasting reports with reviews.',
            url: 'https://www.coffeereview.com/category/articles/',
            image: secondbl
        },
        {
            id: 3,
            title: 'TOP-RATED COFFEES',
            description: 'View outstanding coffees that have earned 94 points or more from Coffee Review.',
            url: 'https://www.coffeereview.com/highest-rated-coffees/',
            image: thirdbl
        },
        {
            id: 4,
            title: 'GREEN COFFEES',
            description: 'Discover reviews of green (unroasted) coffee beans.',
            url: 'https://www.coffeereview.com/types/green/',
            image: fourthbl
        },
        {
            id: 5,
            title: 'BEST VALUE COFFEES',
            description: 'Enjoy coffees that deliver both high ratings and great value.',
            url: 'https://www.coffeereview.com/types/best-value-coffees/',
            image: fifthbl
        },
        {
            id: 6,
            title: '台灣送評的咖啡豆',
            description: 'See coffees and espressos from roasters in Taiwan.',
            url: 'https://www.coffeereview.com/types/coffees-from-taiwan/',
            image:  sixthbl
        }
    ]);

    return (
        <Layout>
            <div className="blogs">
                <div className='movie-carousel-container' >
                    <Carousel>
                        {articles.map((article) => (
                            <div key={article.title} className='movie-card-container'>
                                <div className="movie-card" style={{
                                    backgroundImage: `url(${article.image})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',

                                }}>
                                    <div className="movie-detail">
                                        <div className="text2">
                                            <h1 className='titleBg'>{article.title}</h1>
                                            <Typography
                                                className="description"
                                                variant="p"
                                            >
                                                {article.description}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="main">
                    <div className="container2" style={{ marginTop: '80px', display: 'flex', flexWrap: 'wrap' }}>
                        {coffees.map((coffee) => (
                            <div className="card-wrapper" key={coffee.title} style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <Card sx={{ width: 300, flex: 1 }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ height: 200 }}
                                            image={coffee.image}
                                            alt={coffee.title}
                                        />
                                        <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '150px' }}>
                                            <div>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {coffee.title}
                                                </Typography>
                                                <Typography className="description" variant="body4" color="GrayText" sx={{ maxHeight: '5rem', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', lineHeight: '1.5rem', flex: 1 }}>
                                                    {coffee.description}
                                                </Typography>
                                            </div>
                                            <div>
                                                <RWebShare
                                                    data={{
                                                        url: coffee.url,
                                                        title: coffee.title,
                                                    }}
                                                    onClick={() => console.log('shared successfully!')}
                                                >
                                                    <Button style={{ marginLeft: '40px', marginRight: '10px' }} size="small">
                                                        Share
                                                    </Button>
                                                </RWebShare>
                                                <Button size="small" href={coffee.url}>
                                                    More
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Blogs;
