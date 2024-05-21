import { useNavigate } from "react-router-dom";
import "./HomeMain.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom",
});

export const HomeMain = () => {
  const navigate = useNavigate();

  const handleexplore = () => {
    navigate("/academics");
  };

  const handleenquire = () => {
    navigate("/program");
  };

  return (
    <div className="home">
      <Helmet>
      <title>The Little Jewels Kindergarten - Nurturing Young Minds in Nagpur</title>
        <meta name="description" content="Embark on a delightful journey with The Little Jewels Kindergarten, a cherished institution nestled in the heart of Nagpur. As a proud feeder of Jain International School, our enchanting space is more than a kindergarten—it's a haven filled with love and warmth, dedicated to fostering the physical, mental, emotional, cognitive, and social growth of every young mind.

        At The Little Jewels, we transcend traditional education. We're more than a school; we're a home where laughter echoes in every corner, and curiosity is the guiding star. Managed by the venerable Sir Shantilal Badjate Charitable Trust, our legacy extends to Jain International School, Nagpur (a CBSE School), and S. B. Jain Institute of Technology, Management & Research.

        Our mission is to inspire children to become self-disciplined, innovative, caring, tolerant, honest, and friendly individuals. We've meticulously crafted a secure and joyous learning environment where well-trained and supportive teachers guide students with attention. Our child-friendly infrastructure boasts up-to-date facilities, interactive boards, and a hygienic ambiance.

        Experience play-way learning, engaging co-curricular activities, and smart classes that make education a captivating adventure. The Little Jewels Kindergarten is more than an institution; it's a promise of holistic development, creativity, and a lifetime of cherished memories.

        Come, join us, and let your child's journey of discovery and growth begin at The Little Jewels Kindergarten." />
        <meta name="keywords" content="Little Jewels Kindergarten, Nagpur, Jain International School, Child Development, Play-way Learning, Holistic Education" />
        <meta name="author" content="Virus1260, Shekhar Mishra" />
        

        {/* Google Tag Manager script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZYFTB6XCD2"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZYFTB6XCD2');
        `}
        </script>
      </Helmet>
      <div className="section">
        <div className="bodering">
          <div className="main-txt" data-aos="" data-aos-once="false">
            <p>LITTLE <span className="change">JEWELS</span> KINDERGARTEN</p>
            A Feeder Kindergarten of <br></br> The Jain International School, <br></br>Nagpur
            <div className="btns">
              <button onClick={handleexplore}>E x p l o r e</button>
              <button onClick={handleenquire}>E n q u i r e&nbsp; N o w</button>
            </div>
          </div>
        </div>

        <div className="box-img" data-aos="">
          <img src="/Home_Images/Kids4.png" alt="Home_Image" width={"200px"} />
        </div>
      </div>
    </div>
  );
};
