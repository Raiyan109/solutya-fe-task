import About from '../components/About';
import Browse from '../components/Browse';
import Hero from '../components/Hero';
import Nav2 from '../components/Nav2';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Nav2 />
            <Hero />
            <Browse />
            <About />
        </div>
    );
};

export default Home;