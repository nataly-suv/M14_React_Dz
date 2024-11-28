import style from "./aboutOnMainPage.module.css";
import damien from "../../assets/About/damien.png";
import star from "../../assets/About//star2.png";
import fb from "../../assets/Social/fb.png";
import tw from "../../assets/Social/tw.png";
import ins from "../../assets/Social/in.png";

const AboutOnMainPage = () => {
  return (
    <section className={style.about}>
      {/* шапка разреда About */}
      <div className={style.about__header}>
        <div className={style.about__header_left}>
          <p className={style.category}>About</p>
          <h2 className={style.name}>I am Damien</h2>
        </div>
        <div className={style.about__header_right}>
          <button className={style.header__btn}>Know More &#8594;</button>
        </div>
      </div>
      {/* контент блока */}
      <div className={style.about__content}>
        {/* фото */}
        <div className={style.about__imgBox}>
          <img src={damien} alt="damien" className={style.about__img} />
        </div>
        <div className={style.about__description}>
          {/* introduction */}
          <div className={style.introduction}>
            <div className={style.introduction_title}>
              <img src={star} alt="star" />
              <h3 className={style.introduction_titleText}>Introduction</h3>
            </div>
            <p className={style.introduction_text}>
              My journey as a photographer has been a lifelong quest to capture
              the extraordinary in the ordinary, to freeze fleeting moments in
              time, and to share the world's beauty as I see it. Based in the
              enchanting landscapes of the USA, I find inspiration in every
              corner of this diverse and vibrant country. Join me as we embark
              on a visual odyssey, where each photograph tells a story, and
              every frame is a piece of my heart.
            </p>
          </div>
          {/* контакты */}
          <div className={style.contact}>
            <div className={style.contact__title}>
              <img src={star} alt="star" />
              <h3 className={style.contact_titleText}>Contact Information</h3>
            </div>
            <div className={style.contact__data}>
              <div className={style.contact__data_item}>
                <p className={style.contact__item_title}>Email</p>
                <a
                  href="mailto:damienbraun@gmail.com"
                  className={style.contact__item_text}
                >
                  damienbraun@gmail.com
                </a>
              </div>
              <div className={style.contact__data_item}>
                <p className={style.contact__item_title}>Phone Number</p>
                <a href="tel:+79265535353" className={style.contact__item_text}>
                  +7 (926) 553-53-53
                </a>
              </div>
            </div>
          </div>
          {/* социальные сети, кнопки */}
          <div className={style.addInfo}>
            <div className={style.social}>
              <a href="#" className={style.icon}>
                <img src={fb} alt="social" className={style.icon__img}/>
              </a>
              <a href="#" className={style.icon}>
                <img src={tw} alt="social" className={style.icon__img}/>
              </a>
              <a href="#" className={style.icon}>
                <img src={ins} alt="social" className={style.icon__img}/>
              </a>
            </div>
            <div className={style.buttons}>
                <button className={style.button}>Let’s Work</button>
                <button className={style.button}>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOnMainPage;
