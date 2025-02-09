import "./App.css";
import bannerPhoto from "./assets/images/banner-image.png";
import hIMG1 from "./assets/images/image1.png";
import hIMG2 from "./assets/images/image2.png";
import hIMG3 from "./assets/images/image3.png";
import hIMG4 from "./assets/images/image4.png";

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
      </main>
    </div>
  );
}

export default App;
