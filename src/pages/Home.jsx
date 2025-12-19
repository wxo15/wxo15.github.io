import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home(fromRight) {

  useEffect(() => {

    class TxtRotate {
      constructor(el, toRotate) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.waitPeriod = 1000;
        this.typingPeriod = 200;
        this.deletingPeriod = 100;
        this.txt = '';
        this.isDeleting = false;
        this.tick();
      }

      tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

        let delta = (this.isDeleting) ? this.deletingPeriod : this.typingPeriod;

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.waitPeriod;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = this.waitPeriod;
        }

        setTimeout(() => this.tick(), delta);
      }
    }

    // Run the TxtRotate on all elements with class 'txt-rotate'
    const elements = document.getElementsByClassName('txt-rotate');
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-rotate');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate));
      }
    }
  }, []); // empty dependency array = run once after mount

  const translateX = fromRight ? "-100vw" : "100vw"

  return (
    <motion.div
      initial={{ opacity: 1, x: translateX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
    <section id="home" className="s-general">
        <div className="home-bg-container">
          <img src="/images/Vector_2677.jpg" className="home-bg" alt="" />
        </div>
        <div className="home-content">
          <div className="center_of_container flex">
            <h1>
                Engineer<br></br>ready to <span
                className="txt-rotate"
                data-rotate='[ " create", " code", " help", " innovate"]'>
            </span><span id="txt-rotate-cursor">.</span>
            </h1>
            </div>
            <h6 style={{marginTop: "auto"}}>Background vector created by liuzishan - www.freepik.com</h6>
        </div>
          

    </section>
    </motion.div>
  );
}