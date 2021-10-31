import HomeData from '../HomeData/HomeData';
import service1 from '../../images/mumbai.jpg'
import service2 from '../../images/hawaii.jpg'
import service3 from '../../images/sydney.jpg'
import service4 from '../../images/Sajek-Valley-4.jpg'
import service5 from '../../images/cox.jpg'
import service6 from '../../images/sylhet.jpg'
import './Home.css'

const intros = [
    {
        image: service1,
        name: 'Mumbai',
        details:'Mumbai, previously known as Bombay is one of the most populous and biggest cities of Maharashtra. Also the biggest metropolis of this state, Mumbai is also popular as the entertainment and financial capital.',
        price: '$90.00'
    },
    {
        image: service2,
        name: 'Hawaii',
        details: 'Hawaii is a state in the Western United States located in the Pacific Ocean about 2,000 miles (3,200 km) from the U.S. mainland. It is the only state outside North America, the only state that is an archipelago, and the only state in the tropics.',
        price:'$100.00'
    },
    {
        image: service3,
        name:'Sydney',
        details:'Sydney offers an urban mix of rich history and contemporary buzz, but with a distinctly Australian spirit. To understand why this city is so singular, take the clifftop coastal walk from Bondi to Coogee, where you’ll pass by beaches, rock pools, and lush parks.',
        price:'$110.00'
    },
    {
        image: service4,
        name:'Sajek-Belly',
        details:'Sajek is located in the verdant hills of Kasalong range of mountains amidst the serene and exotic beauty of nature. Lofty mountains, dense forest, sprawling grasslands and miles of hilly tracks feature the valley. The simple and basic indigenous lifestyle of local people is just fabulous for visitors to spend a day.',
        price:'$60.00'
    },
    {
        image: service5,
        name:'Coxsbazar',
        details:'Coxs Bazar, the most attractive tourist spots for Bangladesh and not only for Bangladesh its the longest sea beach in the world . Seventy-five miles (120 Kilo miters sandy sea beach with a gentle slop). and its the the tourist capital of Bangladesh',
        price:'$80.00'
    },
    {
        image: service6,
        name:'Sylhet',
        details:'Sylhet Division is the northeastern division of Bangladesh. It is bordered by the Indian states of Meghalaya, Assam and Tripura to the north, east and south respectively, and by the Bangladeshi divisions of Chittagong to the southwest and Dhaka and Mymensingh to the west.',
        price:'$70.00'
    }
]

const Home = () => {
    return (
        <div>
            <div className="banner">
                <div className="h-tag">
                    <h1>Life was meant for good friends and great adventures</h1>
                    <h3> Adventure Awaits, Go find it.</h3>
                </div>
            </div>
            <div className="home-card">
               {
                   intros.map(homeData => <HomeData homeData={homeData}></HomeData>)
               } 
            </div>
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={service4} class="d-block w-100" alt=""/>
                        </div>
                        <div class="carousel-item">
                            <img src={service5} class="d-block w-100" alt=""/>
                        </div>
                        <div class="carousel-item">
                            <img src={service6} class="d-block w-100" alt=""/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;