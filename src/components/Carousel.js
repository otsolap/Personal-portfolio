import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import otso from '../assets/images/Otso.png';
import metsanOtus from '../assets/images/MetsanOtus.png';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Otso Lappalainen",
                    subTitle: "Professional profile.",
                    imgSrc: otso,
                    link: 'https://www.linkedin.com/in/otsolap/',
                    selected: false
                },
                {
                    id: 1,
                    title: "Metsän Otus",
                    subTitle: "Youtube profile",
                    imgSrc: metsanOtus, 
                    link: 'https://www.youtube.com/channel/UC4t1gUHiI6hTPyAOR3zlqaw',
                    selected: false
                },
                {
                    id: 2,
                    title: "Playlist of the Day",
                    subTitle: "Playlist of the Day Application generates a playlist which catches your vibes in the day. We provide you a quick quiz to finalize music genre, from there, newly created playlist is available for you after you have logged in to Spotify.",
                    imgSrc: 'https://source.unsplash.com/DBGwy7s3QY0',
                    link: 'https://daily-playlist-frontend.herokuapp.com/',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            } 
        });

      this.setState({
          items
      });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }


}

export default Carousel;