import "./App.css";
import bannerPhoto from "./assets/images/banner-image.png";
import hIMG1 from "./assets/images/image1.png";
import hIMG2 from "./assets/images/image2.png";
import hIMG3 from "./assets/images/image3.png";
import hIMG4 from "./assets/images/image4.png";
import runIMG from "./assets/images/run.jpg";
import excerciseIMG1 from "./assets/images/exercise1.jpg";
import excerciseIMG2 from "./assets/images/exercise2.png";
import excerciseIMG3 from "./assets/images/exercise3.png";
import excerciseIMG4 from "./assets/images/exercise4.png";
import excerciseIMG5 from "./assets/images/exercise5.jpg";
import excerciseIMG6 from "./assets/images/exercise6.jpg";
import trainerIMG1 from "./assets/images/trainer1.png";
import trainerIMG2 from "./assets/images/trainer2.png";
import trainerIMG3 from "./assets/images/trainer3.png";
import trainerIMG4 from "./assets/images/trainer4.png";
import trainerIMG5 from "./assets/images/trainer5.png";
import trainerIMG6 from "./assets/images/trainer6.png";

function App() {
  return (
    <div className="body-style">
      {/* header */}
      <header>
        <nav>
          <div className="nav-title">
            <h2 className="orange">Fitness</h2>
          </div>
          <div className="nav-menu">
            <ul>
              <li>
                <a className="home" href="">
                  Home
                </a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </div>
          <div className="nav-menu-bar">
            <i className="fa-solid fa-bars text-white"></i>
          </div>
        </nav>

        <div className="banner">
          <div className="banner-content">
            <h1 className="lg:text-7xl md:text-6xl sm:text-3xl text-2xl text-white">
              Get body in <br />
              <span>shape</span> & stay <br />
              healthy
            </h1>
            <p className="white50">
              A huge selection of health and fitness content, healthy recipes
              and transformation stories to help you get fit and stay fit!
            </p>
            <div className="banner-btn">
              <button className="btn-primary">Join Club Now!</button>
              <button className="btn-primary d-app">Download App</button>
            </div>
          </div>
          <div className="banner-image">
            <img src={bannerPhoto} alt="" />
            <div className="tutorial">
              <div>
                <i className="fa-solid fa-circle-play text-[#e6533c]"></i>
              </div>
              <div className="text-white">
                <h4>350+</h4>
                <p className="white65">Video Tutorial</p>
              </div>
            </div>
            <div className="workout">
              <div className="text-white">
                <h4>500+</h4>
                <p className="white65">Free Workout Videos</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* habits section */}
        <section className="habits">
          <div className="section-content">
            <h2 className="section-title">Change Your Habits</h2>
            <p className="section-info">
              Change begins with a single step. Small, daily fitness habits
              build strength, endurance, and a healthier, happier you.
            </p>
          </div>
          <div className="habits-content">
            <div className="habits-image-content">
              <div className="habits-image">
                <img src={hIMG1} alt="" />
              </div>
              <h4>Movement</h4>
              <p>
                Daily small movements build fitness and lead to a healthier &
                happier you.
              </p>
            </div>
            <div className="habits-image-content">
              <div className="habits-image">
                <img src={hIMG2} alt="" />
              </div>
              <h4>Time</h4>
              <p>
                Manage your time wisely to prioritize fitness; consistency
                ensures lasting results.
              </p>
            </div>
            <div className="habits-image-content">
              <div className="habits-image">
                <img src={hIMG3} alt="" />
              </div>
              <h4>Practice</h4>
              <p>
                Consistent practice habits turn fitness goals into everyday
                achievements.
              </p>
            </div>
            <div className="habits-image-content">
              <div className="habits-image">
                <img src={hIMG4} alt="" />
              </div>
              <h4>Weight Loss</h4>
              <p>
                Weight loss success comes from persistence and healthy lifestyle
                choices.
              </p>
            </div>
          </div>
        </section>
        {/* run section  */}
        <section>
          <div className="run">
            <div className="run-content">
              <h2 className="section-title">
                Run an Extra <br />
                Mile Easily
              </h2>
              <p className="section-info">
                Adding an extra run to your fitness routine pushes your limits
                and accelerates progress. Each additional mile strengthens
                endurance, boosts metabolism, and enhances overall health,
                bringing you closer to your goals.
              </p>
              <button className="btn-primary hover:bg-[#e6533c]/60! transition">
                Join Now
              </button>
            </div>
            <div className="run-image">
              <img src={runIMG} alt="" />
            </div>
          </div>
        </section>
        {/* training section  */}
        <section className="training">
          <div className="training-content">
            <h2 className="section-title">Trainings and Exercises</h2>
            <p className="section-info">
              Effective training and exercise are essential for fitness.
              Consistent effort transforms your body, enhances strength, and
              boosts overall health.
            </p>
          </div>
          <div className="training-image">
            <div className="training-image-box exercise-image1">
              <img src={excerciseIMG1} alt="" />
              <p>Leg press</p>
            </div>
            <div className="training-image-box exercise-image2">
              <img src={excerciseIMG2} alt="" />
              <p>Push ups</p>
            </div>
            <div className="training-image-box exercise-image3">
              <img src={excerciseIMG3} alt="" />
              <p>Jump workout</p>
            </div>
            <div className="training-image-box exercise-image4">
              <img src={excerciseIMG4} alt="" />
              <p>Leg exercise</p>
            </div>
            <div className="training-image-box exercise-image5">
              <img src={excerciseIMG5} alt="" />
              <p>Leg workout</p>
            </div>
            <div className="training-image-box exercise-image6">
              <img src={excerciseIMG6} alt="" />
              <p>Sit ups</p>
            </div>
          </div>
        </section>
        {/* calculator section  */}
        <section className="calculator">
          <h2 className="section-title">BMI Calculator</h2>
          <p className="section-info">
            Monitor your fitness progress with a BMI calculator. It offers
            valuable information on body weight relative to height and overall
            health.
          </p>
        </section>
        <div className="calculator2">
          <div className="calculator-content">
            <div className="calculator-chart">
              <h3>BMI Calculator Chart</h3>
              <table>
                <thead>
                  <tr>
                    <th>BMI</th>
                    <th>Weight Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Below 18.5</td>
                    <td>Underweight</td>
                  </tr>
                  <tr>
                    <td>18.5 - 24.9</td>
                    <td>Healthy</td>
                  </tr>
                  <tr>
                    <td>25.0 - 29.9</td>
                    <td>Overweight</td>
                  </tr>
                  <tr>
                    <td>30.0 - and Above</td>
                    <td>Obese</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bmi-calculate">
              <h3>Calculate your BMI</h3>
              <p>
                BMI calculators help gauge body fat levels. Regular checks can
                guide your fitness journey and adjustments for a healthier
                lifestyle.
              </p>
              <div className="input-table">
                <div className="input-row-col2">
                  <input type="number" placeholder="Height/cm" />
                  <input type="number" placeholder="Weight/kg" />
                </div>
                <div className="input-row-col2">
                  <input type="number" placeholder="Age" />
                  <select>
                    <option value="">Gender</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Other</option>
                  </select>
                </div>
                <div className="input-row-col1">
                  <select name="" id="">
                    <option value="">Select an activity factor</option>
                    <option value="">Light exercise (1-3 days per week)</option>
                    <option value="">
                      Moderate exercise (3-5 days per week)
                    </option>
                    <option value="">Heavy exercise (6-7 days per week)</option>
                  </select>
                </div>
              </div>
              <button className="btn-primary hover:bg-[#e6533c]/60! transition">
                Calculate
              </button>
            </div>
          </div>
        </div>
        {/* team section  */}
        <section className="team">
          <div className="team-content">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-info">
              A gym instructor guides your fitness journey with expertise and
              motivation. Their support helps you achieve goals and maximize
              results.
            </p>
          </div>
          <div className="team-members">
            <div className="single-member">
              <img src={trainerIMG1} alt="" />
              <div className="member-info">
                <h4>Jerome Bell</h4>
                <p>Trainer</p>
              </div>
            </div>
            <div className="single-member">
              <img src={trainerIMG2} alt="" />
              <div className="member-info">
                <h4>Cameron Williamson</h4>
                <p>Trainer</p>
              </div>
            </div>
            <div className="single-member">
              <img src={trainerIMG3} alt="" />
              <div className="member-info">
                <h4>Darrell Steward</h4>
                <p>Trainer</p>
              </div>
            </div>
            <div className="single-member">
              <img src={trainerIMG4} alt="" />
              <div className="member-info">
                <h4>Dianne Russell</h4>
                <p>Trainer</p>
              </div>
            </div>
            <div className="single-member">
              <img src={trainerIMG5} alt="" />
              <div className="member-info">
                <h4>Cody Fisher</h4>
                <p>Trainer</p>
              </div>
            </div>
            <div className="single-member">
              <img src={trainerIMG6} alt="" />
              <div className="member-info">
                <h4>Theresa Webb</h4>
                <p>Trainer</p>
              </div>
            </div>
          </div>
        </section>
        {/* additional section  */}
        <section className="additional">
          <div className="additional-content">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-info">
              We ensure a comprehensive fitness experience, offering everything
              you need for effective workouts and overall health improvement.
            </p>
          </div>
          <div className="additional-items">
            <div className="additional-single-item">
              <div>
                <i
                  className="fa-solid fa-dumbbell"
                  style={{ color: "#e6e6e6" }}
                ></i>
              </div>
              <div className="additional-item-info">
                <h4>Free Weights</h4>
                <p>Exercise as much as you can anytime.</p>
              </div>
            </div>
            <div className="additional-single-item">
              <div>
                <i
                  className="fa-solid fa-shower"
                  style={{ color: " #e6e6e6" }}
                ></i>
              </div>
              <div className="additional-item-info">
                <h4>Private Showers</h4>
                <p>Take bath any time in your own shower.</p>
              </div>
            </div>
            <div className="additional-single-item">
              <div>
                <i
                  className="fa-solid fa-heart-pulse"
                  style={{ color: "#e6e6e6" }}
                ></i>
              </div>
              <div className="additional-item-info">
                <h4>Cardio Equipments</h4>
                <p>Tread mill, ropes, bicycles and many more.</p>
              </div>
            </div>
            <div className="additional-single-item">
              <div>
                <i
                  className="fa-solid fa-restroom"
                  style={{ color: "#e6e6e6" }}
                ></i>
              </div>
              <div className="additional-item-info">
                <h4>Private Bathrooms</h4>
                <p>Come anytime and enjoy your workout.</p>
              </div>
            </div>
            <div className="additional-single-item">
              <div>
                <i
                  className="fa-solid fa-prescription-bottle"
                  style={{ color: "#e6e6e6" }}
                ></i>
              </div>
              <div className="additional-item-info">
                <h4>Energy Drinks</h4>
                <p>Get protein powder and supplement for free.</p>
              </div>
            </div>
            <div className="additional-single-item">
              <div>
                <i
                  className="fa-solid fa-user-shield"
                  style={{ color: "#e6e6e6" }}
                ></i>
              </div>
              <div className="additional-item-info">
                <h4>Personal Trainer</h4>
                <p>Get professional and unique workout tips.</p>
              </div>
            </div>
            <div className="additional-single-item">
              <div>
                <i
                  className="fa-solid fa-suitcase-medical"
                  style={{ color: "#e6e6e6" }}
                ></i>
              </div>
              <div className="additional-item-info">
                <h4>First Aid</h4>
                <p>Get first aid treatment anytime as you need.</p>
              </div>
            </div>
            <div className="additional-single-item">
              <div>
                <i
                  className="fa-solid fa-hot-tub-person"
                  style={{ color: "#e6e6e6" }}
                ></i>
              </div>
              <div className="additional-item-info">
                <h4>Hot Water Spa</h4>
                <p>Relax in warm tub after workout.</p>
              </div>
            </div>
            <div className="additional-single-item">
              <div>
                <i
                  className="fa-solid fa-water-ladder"
                  style={{ color: "#e6e6e6" }}
                ></i>
              </div>
              <div className="additional-item-info">
                <h4>Swimming Pool</h4>
                <p>Playful cardio with swimming exercise.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* footer section  */}
      <footer>
        <div className="all-footer">
          <div className="footer-content">
            <div className="footer-col1">
              <h2 className="orange">Fitness</h2>
              <p className="white50">
                Fitness is a journey, not a destination. Consistent effort and
                dedication transform your body and mind for lifelong well-being.
              </p>
            </div>
            <div className="footer-col2">
              <div>
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a className="transition hover:text-white!" href="">
                      Service
                    </a>
                  </li>
                  <li>
                    <a className="transition hover:text-white!" href="">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="transition hover:text-white!" href="">
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a className="transition hover:text-white!" href="">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Get Started</h3>
                <ul>
                  <li>
                    <a className="transition hover:text-white!" href="">
                      Fitness
                    </a>
                  </li>
                  <li>
                    <a className="transition hover:text-white!" href="">
                      Platform
                    </a>
                  </li>
                  <li>
                    <a className="transition hover:text-white!" href="">
                      Workout Library
                    </a>
                  </li>
                  <li>
                    <a className="transition hover:text-white!" href="">
                      App Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <p className="white50">All rights reserved @Fitness 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
