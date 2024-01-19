import About from '../components/About';
import Blogs from '../components/Blogs';
import Browse from '../components/Browse';
import FindMore from '../components/FindMore';
import FindProperties from '../components/FindProperties';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import Hero from '../components/Hero';
import Nav2 from '../components/Nav2';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import OurAgents from '../components/OurAgents';
import OurProperty from '../components/OurProperty';
import OurServices from '../components/OurServices';
import Testimonials from '../components/Testimonials';
import Video from '../components/Video';
import WorkingProcess from '../components/WorkingProcess';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Nav2 />
            <Hero />
            <Browse />
            <About />
            <OurServices />
            <Video />
            <FindMore />
            <OurProperty />
            <FindProperties />
            <WorkingProcess />
            <OurAgents />
            <Testimonials />
            <NewsLetter />
            <Blogs />
            <Footer />
            <Footer2 />
        </div>
    );
};

export default Home;