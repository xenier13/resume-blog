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
        <p>I am Mason Francis, a software engineer with aspirations in web development.</p>
        <p>I'm prepared to contribute my distinctive value and perspective to your upcoming deployable applications or projects.</p>
      </section>

      <br/>

      <section>
        <h2 className={utilStyles.headingLg}>Education</h2>
        <p className={utilStyles.headingSm}>Bachelor of Arts in Computer Science</p>
        <p className={utilStyles.headingSm}> 
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
          {allPostsData.map(({ id, startDate, endDate, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link className="hover:text-orange-400" href={`/posts/${id}`}><u>{title}</u></Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={startDate} /> - <Date dateString={endDate} />
              </small>
            </li>

          ))}
        </ul>
      </section>

      <section 
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        <h2 className={utilStyles.headingLg}>Skills</h2>
        <ul className={utilStyles.list}>
          {Skills.skills
          .sort((a,b) => {a.rating > b.rating ? 1 : -1;})
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
      </section>

    </Layout>
  );
}