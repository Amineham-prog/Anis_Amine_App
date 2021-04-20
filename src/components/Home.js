import React, { Component} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

//---------------------Carousselle ------------------------------------
const items = [
  {
    src:"img/item0.png",
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src:"img/item3.png",
    altText: "Slide 2",
    caption: "Slide 2"
  },

  {
    src:"img/item2.png",
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {

      return (
              
           <CarouselItem
          className="carouselImg"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="d-block img-fluid"/>
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>             
       
      );
    });



    return (
      <Carousel classeName="mycarousel"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
        
      </Carousel>
    );
  }
}




//-------------------------------------------------------------------------------------

const Home = ()=> {
    return(
      <div className="container">
      <div classeName="row" style={{marginTop:"15px"}}>
          <div className="col">
          <HomeCarousel /> 
          </div>
      
      </div>
      <h1 style={{color: "#ffc947", textAlign:"center"}}>Home</h1>
      </div>
    
  
    )


}


export default Home;

