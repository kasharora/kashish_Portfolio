import React,{ useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Project.css'; // Create this CSS file for your custom styles
import portfolioprojectpic from './portfolioprojectpic.jpg';
import imagetosketchconvertor from './imagetosketchconvertor.jpg';
import systeemoperatebyvoice from './systeemoperatebyvoice.jpg';
import wordcounter from './wordcounter.png';
import youtubevideodownloaderpic from './youtubevideodownloaderpic.jpg';

const Project = () => {
const sliderRef=useRef(null);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
};
  const handlePrev = () => {
    if(sliderRef.current)
    sliderRef.current.slickPrev();
  };
  const handleNext = () => {
    if(sliderRef.current)
    sliderRef.current.slickNext();
  };
  return (
    <div id="Project">
    <div className='Project_title'>My Project</div>
    <Slider ref={sliderRef }className='Slides'{...settings}>
      {/* Project Cards */}
      <div className="project-slide">
      <img className="project-slide1" src={portfolioprojectpic} alt='Project1'></img><h2 >Portfolio Project</h2><p className='parag'>A diverse portfolio showcasing my expertise in web development, graphic design, and content creation. Highlights include responsive websites, visually appealing designs, and engaging multimedia content, reflecting my versatile skills and creativity.</p></div>
      <div className="project-slide">
      <img className="project-slide1"src={imagetosketchconvertor} alt='Project2'></img> <h2 >Image To Sketch Converter</h2><p className='parag'>An image to sketch converter software that transforms photos into artistic sketches. Utilizing advanced algorithms, it preserves key details while adding an expressive, hand-drawn quality, providing a unique and creative output.</p>
      </div>
      <div  className="project-slide"><img className="project-slide1"src={systeemoperatebyvoice} alt='Project3'></img><h2 >Voice controller</h2><p className='parag'>A voice controller system enabling hands-free operation of devices. Utilizing natural language processing and voice recognition, it interprets spoken commands for seamless interaction with smart devices, offering convenience and accessibility.</p></div>
      <div className="project-slide"><img className="project-slide1"src={wordcounter} alt='Project4'></img><h2>Word Counter</h2><p className='parag'>A word counter tool accurately tallying the number of words in a given text. Essential for writers, students, and professionals, it provides efficient and precise word count statistics for effective communication.</p></div>
      <div className="project-slide"><img className="project-slide1" src={youtubevideodownloaderpic} alt='Project5'></img><h2>YouTube Video Downloader</h2><p className='parag'>A YouTube video downloader allowing users to save videos for offline viewing. This software extracts and downloads videos in various formats, enhancing accessibility and enabling users to enjoy content without an internet connection.</p></div>
    </Slider>
    <div className='Button'>
      <center>
        <button className='Button_class' onClick={handlePrev}>Prev Button</button>
        <button className='Button_class' onClick={handleNext}>Next Button</button></center>
    </div></div>
  );
};
export default Project;
