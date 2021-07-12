import React, { Component} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

//---------------------Carousselle ------------------------------------
class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0,
      images:this.props.images
    };
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
      this.state.activeIndex === this.state.images.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.images.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
   
    const { activeIndex } = this.state;

    const slides = this.state.images.map((item) => {

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
          items={this.state.images}
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
//-------------------------------END CAROUSSEL ------------------------------------------------



//-------------------------------------------------------------------------------------
const Home = ({images})=> {
  console.log(images)
    return(
      
      <div className="container">
      <div classeName="row" style={{marginTop:"15px"}}>
          <div className="col">
          <HomeCarousel images={images} /> 
          </div>
      
      </div>
      <h1 style={{color: "#ffc947", textAlign:"center"}}>Home</h1>
      </div>
    
  
    )


}


export default Home;

