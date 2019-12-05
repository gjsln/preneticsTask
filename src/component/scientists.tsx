import * as React from 'react';
import './scientists.css';
const lawrenceTzang = require('../assets/images/lawrence-tzang.png');
const brianTomlinson = require('../assets/images/brian-tomlinson.png');
const hblDavidHeber = require('../assets/images/hbl-david-heber.png');
const hblKentBradley = require('../assets/images/hbl-kent-bradley.png');
const hblSimonSum = require('../assets/images/hbl-simon-sum.png');
const hblSteveHenig = require('../assets/images/hbl-steve-henig.png');
const hblSusanBowerman = require('../assets/images/hbl-susan-bowerman.png');
const hblZhenChen = require('../assets/images/hbl-zhen-chen.png');
const michaelYang = require('../assets/images/michael-yang.png');
const royVartabedian = require('../assets/images/roy-vartabedian.png');
const senthilSundaram = require('../assets/images/senthil-sundaram.png');
const stephenTsui = require('../assets/images/stephen-tsui.png');

export const ScientistComponent = () => {
  return (
    <main className='flex-main-container'>
      <div className='main-container'>
        <header className='header'>
          <h1>Our Scientists</h1>
        </header>
        <hr className='divider' />
        <section className='grid-container'>
          <section className='sub-title'>
            <h2>Scientists behind the "Nature" section: </h2>
            <h5>Who analysis and test your genetic information</h5>
          </section>

          <div className='flex-container wrapper'>
            <section className='grid-content'>
              <div className='image-container'>
                <img src={lawrenceTzang} className='image-content' />
                <div className='image-caption'>
                  <span className='caption-title'>
                    <strong>Dr. Lawrence Tzang, Ph.D.</strong>
                  </span>
                  <span className='caption-subtitle'>
                    Co-Founder And Chief Scientific Officer
                  </span>
                </div>
              </div>
            </section>

            <section className='grid-content'>
              <div className='image-container'>
                <img src={senthilSundaram} className='image-content' />
                <div className='image-caption'>
                  <span className='caption-title'>
                    <strong>Dr. Senthil Sundaram, MD</strong>
                  </span>
                  <span className='caption-subtitle'>
                    Chief Clinical Officer
                  </span>
                </div>
              </div>
            </section>

            <section className='grid-content'>
              <div className='image-container'>
                <img src={michaelYang} className='image-content' />
                <div className='image-caption'>
                  <span className='caption-title'>
                    <strong>Prof. Michael M Yang, PhD</strong>
                  </span>
                  <span className='caption-subtitle'>
                    Head and Chair Professor, Department of Biomedical Sciences,
                    City University of Hong Kong
                  </span>
                </div>
              </div>
            </section>

            <section className='grid-content'>
              <div className='image-container'>
                <img src={brianTomlinson} className='image-content' />
                <div className='image-caption'>
                  <span className='caption-title'>
                    <strong>Prof. Brain Tomlinson, MD</strong>
                  </span>
                  <span className='caption-subtitle'>
                    Adjunct Professor, Department of Medicine;
                    <br />
                    Former Head, Clinical Pharmacology, The Chinese University
                    of Hong Kong
                  </span>
                </div>
              </div>
            </section>

            <section className='grid-content'>
              <div className='image-container'>
                <img src={stephenTsui} className='image-content' />
                <div className='image-caption'>
                  <span className='caption-title'>
                    <strong>Prof. Stephen Tsui, PhD</strong>
                  </span>
                  <span className='caption-subtitle'>
                    Professor, School of Biomedical Sciences; Head Division of
                    Genomics and Bioinformatics, The Chinese University of Hong
                    Kong
                  </span>
                </div>
              </div>
            </section>

            <section className='grid-content'>
              <div className='image-container'>
                <img src={royVartabedian} className='image-content' />
                <div className='image-caption'>
                  <span className='caption-title'>
                    <strong>Dr. Roy E. Vartabedian, DrPH</strong>
                  </span>
                  <span className='caption-subtitle'>
                    Chronic Disease Prevention Specialist, New York
                    <br />
                    Times Best-Selling Author of Nutripoints
                  </span>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className='grid-container'>
          <section className='sub-title'>
            <h2>Scientists behind the "Nurture" section: </h2>
            <h5>Who evaluate your lifestyle choices</h5>
          </section>

          <div className='flex-container wrapper'>
            <section className='grid-content'>
              <div className='image-container'>
                <img src={hblKentBradley} className='image-content' />
                <div className='image-caption'>
                  <span className='caption-title'>
                    <strong>Dr. Kent Bradley, M.D., MBA, MPH</strong>
                  </span>
                  <span className='caption-subtitle'>
                    Chairman of Herbalife Nutrition Advisor Board;
                    <br />
                    Former President of Safeway Health
                  </span>
                </div>
              </div>
            </section>

            <section className='grid-content'>
              <div className='image-container'>
                <img src={hblSusanBowerman} className='image-content' />
                <div className='image-caption'>
                  <span className='caption-title'>
                    <strong>
                      Susan Bowerman, M.S., R.D., CSSD, CSOWM, FAND
                    </strong>
                  </span>
                  <span className='caption-subtitle'>
                    Senior Director of Worldwide Nutrition Education and
                    Training, Herbalife Nutrition
                  </span>
                </div>
              </div>
            </section>

            <section className='grid-content'>
              <div className='image-container'>
                <img src={hblDavidHeber} className='image-content' />
                <div className='image-caption'>
                  <span className='caption-title'>
                    <strong>Dr. David Herber, M.D., Ph.D., FACP, FASN</strong>
                  </span>
                  <span className='caption-subtitle'>
                    Chariman of Herbalife Nutrition Institute;
                    <br />
                    Founding director of the Center for Human Nutrition at the
                    University of California. The University of California as a
                    matter of policy does not endorse specific products or
                    services.
                    <br />
                    Dr. Heber's credentials as a professor are for
                    identification purposes only.
                  </span>
                </div>
              </div>
            </section>

            <section className='grid-content'>
              <div className='image-container'>
                <img src={hblSimonSum} className='image-content' />
                <div className='image-caption'>
                  <span className='caption-title'>
                    <strong>Dr. Simon Sum, DCN, RDN, ACSM-CPT, FAND</strong>
                  </span>
                  <span className='caption-subtitle'>
                    Senior Manager of Global Product Safety and Science,
                    Herbalife Nutrition
                  </span>
                </div>
              </div>
            </section>

            <section className='grid-content'>
              <div className='image-container'>
                <img src={hblZhenChen} className='image-content' />
                <div className='image-caption'>
                  <span className='caption-title'>
                    <strong>Prof. Zhen-Yu Chen, Ph.D</strong>
                  </span>
                  <span className='caption-subtitle'>
                    Professor and Head of Graduate Division of School of Life
                    Sciences, Chinese University of Hong Kong
                  </span>
                </div>
              </div>
            </section>

            <section className='grid-content'>
              <div className='image-container'>
                <img src={hblSteveHenig} className='image-content' />
                <div className='image-caption'>
                  <span className='caption-title'>
                    <strong>Dr. Steve Henig, Ph.D.</strong>
                  </span>
                  <span className='caption-subtitle'>
                    Former Chief Scientific Officer, Herbalife Nutrition
                  </span>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
      <div className='flex-side-border'></div>
    </main>
  );
};
