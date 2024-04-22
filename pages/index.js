import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Skills from '../skills/skills.json';
import { Progress } from 'flowbite-react';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return{
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {

  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingSm}>
        <p>mason.francis0@gmail.com</p>
        <p className="italics">+1 (401) 660-5854</p>
      </section>

      <br/>

      <section className={utilStyles.headingSm}>
        <p>I am dedicated to advancing the autonomous vehicle industry, aiming to leverage my expertise in maintenance, troubleshooting, and issue reporting to drive its evolution towards safer, more reliable, and environmentally friendly transportation. </p>
        <br/>
        <p>With flexible availability for all shifts and locations, I am eager to embrace customer-facing roles, contributing to the industry's growth and acceptance.</p>
      </section>

      <br/>

      <section>
        <h2 className={utilStyles.headingLg}>Education</h2>
        <p  className={utilStyles.headingSm}>Bachelor of Arts in Computer Science</p>
        <p  className={utilStyles.headingSm}> 
        <Link className="hover:text-orange-400" href={`https://www.uri.edu/`}><u>University of Rhode Island</u></Link>, August 2016
        </p>
      </section>

      <br/>

      <section>
      <h2 className={utilStyles.headingLg}> Github</h2>
        <p className={utilStyles.headingSm}>
          My Github account can be found <Link className="hover:text-orange-400" href={`https://github.com/xenier13`}><u>here</u></Link>.
        </p>
      </section>

      <br/>

      <section className={`${utilStyles.headingSm} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Job Experience</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, startDate, endDate, title, currentEmployer }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link className="hover:text-orange-400" href={`/posts/${id}`}><u>{title}</u></Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={startDate} /> - { currentEmployer == "true" ? 'Present'  : <Date dateString={endDate} /> }
              </small>
            </li>

          ))}
        </ul>
      </section>

    
      {/* <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        <h2 className={utilStyles.headingLg}>Skills</h2>
        <ul className={utilStyles.list}>
          {Skills.skills
            .sort((a, b) => { a.rating > b.rating ? 1 : -1; })
            .map((item, i) =>
              <li key={i}>
                <br />
                <div className="text-black font-serif font-bold">{item.skill}</div>
                <div>
                  <Progress className="text-base text-center" progress={item.rating} color="indigo" size="xl" />
                </div>
              </li>
            )}
        </ul>
      </section> */}
    
    </Layout>
  );
}