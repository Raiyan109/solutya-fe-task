import About from '../components/About';
import Browse from '../components/Browse';
import FindMore from '../components/FindMore';
import FindProperties from '../components/FindProperties';
import Hero from '../components/Hero';
import Nav2 from '../components/Nav2';
import Navbar from '../components/Navbar';
import OurProperty from '../components/OurProperty';
import OurServices from '../components/OurServices';
import Video from '../components/Video';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Nav2 />
            <Hero />
            {/* <Browse /> */}
            <About />
            <OurServices />
            <Video />
            <FindMore />
            <OurProperty />
            <FindProperties />
        </div>
    );
};

export default Home;