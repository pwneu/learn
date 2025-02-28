import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cybersecurity Training',
    description: (
      <>
       Enhance your skills with our in-depth courses covering a wide range of cybersecurity topics, from fundamental principles to advanced techniques.
      
      </>
    ),
  },
  {
    title: 'Hands-On Labs and Simulations',
    description: (
      <>
       Gain practical experience through interactive labs and simulations that replicate real-world scenarios, helping you to apply what you've learned in a safe environment.
     
      </>
    ),
  },
  {
    title: 'Up-to-Date Content',
    description: (
      <>
        Stay current with the latest trends and threats in cybersecurity through continuously updated content that reflects the evolving landscape of digital security.
       
      </>
    ),
  },
  {
    title: 'Flexible Learning Options',
    description: (
      <>
       Access courses at your own pace, anytime and anywhere, with our user-friendly LMS platform designed to fit into your busy schedule.
     
      </>
    ),
  },
  {
    title: 'Engaging Capture the Flag (CTF) Competitions',
    description: (
      <>
        Test your skills in real-world scenarios with our exciting CTF challenges. Compete against peers, solve complex problems, and earn recognition for your achievements.

      </>
    ),
  },
  {
    title: 'Cybersecurity Law in the Philippines',
    description: (
      <>
        As part of the curriculum, you will gain a thorough understanding of Republic Act No. 10175 – the Cybercrime Prevention Act of 2012.
      
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      
      <div className="text--center padding-horiz--md">
        <Heading as="h4">{title}</Heading>
        <p>{description}</p>  
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
