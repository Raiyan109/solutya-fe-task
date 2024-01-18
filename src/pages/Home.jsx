import About from '../components/About';
import Browse from '../components/Browse';
import FindMore from '../components/FindMore';
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
            <FindMore />
        </div>
    );
};

export default Home;