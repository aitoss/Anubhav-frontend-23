// import { Link } from "react-router-dom";
import Author from "./_Child/Author";
// import company from "../../assets/images/company.png";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import noogler from "../../assets/images/noogler.png"
import Tags from "./_Child/Tags"
import {
  RiTwitterXLine,
  RiLinkedinFill,
  RiInstagramFill,
} from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from "../../constants";
import ReactQuill from "react-quill";
import Articles from "./Articles";
import { formatDate } from "../../services/date";
import BlogCardLoading from "./BlogCardLoading";
import { ReadTime } from "../../services/date";

const Blog = () => {

  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [similarArticles, setSimilarArticles] = useState(null);
  const [timeStamp, setTimeStamp] = useState('');
  let readingTime = 1;

  const fetchBlogData = async () => {
    const response = await axios.get(BACKEND_URL + '/blog/' + id);
    setBlogData(response.data)
    setTimeStamp(formatDate(response.data.createdAt))
    const article = response.data;
    readingTime = ReadTime(article.description);
    await fetchSimilarBlogs(article.title, article.articleTags.join(',') ,article.companyName);
  }

  const fetchSimilarBlogs = async (title, articleTags, companyName) =>{
    const params = {
      q: title,
      company: companyName,
      tags: articleTags
    }
    const response = await axios.get(BACKEND_URL + '/search', {
      params: params
    })
    console.log(response.data);
    setSimilarArticles(response.data);
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div className="container items-center lg:p-6 mx-auto lg:mx-auto lg:w-[75%] p-3 lg:px-20">
      <br /><br /><br />
      <div className="data items-start lg:justify-start justify-center flex-col lg:p-4 space-y-2 md:mt-0  ">
        <div className="heading">
          <a
            className="text-2xl lg:text-5xl font-bold text-gray-700 hover:text-gray-800"
            href="/link"
          >
            {blogData?.title}
          </a>
        </div>
        <Author person={{ name: blogData?.author?.name, company: blogData?.companyName }} />
        <Tags data={blogData?.articleTags} ></Tags>
        <div className="flex pb-4 lg:gap-10 items-center">
          <p className="text-gray-500">{`${readingTime} mins read • ${timeStamp}`}</p>
          <div className="flex gap-3 ml-auto">
            <a href="#">
              <CiHeart color="#888888" />
            </a>
            <a href="#">
              <CiBookmark color="#888888" />
            </a>
          </div>
        </div>
        <div className="lorem-container text-black py-3 flex flex-col items-center justify-center">
          <div className="lg:h-[400px] lg:pb-4 flex flex-col items-center justify-center">
            <img src={noogler} className="w-full lg:h-full" alt="" />
          </div>
          <div className="w-full text-[18px] bg-white shadow-none rounded-lg">
            {/* <p className="mb-4">STEP is a Google <strong className="text-blue-600">Software Student Training in Engineering Program</strong>, which is open to all students studying in their second year and enrolled in a Bachelor’s Program. It requires the ability to complete a full-time, 10-12 week internship between May and August.</p>
            <p className="mb-4">Off-campus applications are generally open around November and December on their careers page. For on-campus, Google visits several campuses to hire STEP interns.</p>
            <p className="mb-4">Yes, the journey begins from here 😉</p>
            <p className="mb-4"><strong className="text-blue-600">Hola readers,</strong></p>
            <p className="mb-4">I am Kamakshi Dixit, a STEP intern at Google in 2022.&nbsp;</p>
            <p className="mb-4">So, before moving ahead, I want to include that I was also selected in WE Talent Sprint Program Supported by Google in my first year only and participated in many coding challenges, which includes 30 days of Google Cloud too.<br></br></p>
            <p className="mb-4">I have mentioned all these major achievements in my resume (link) and applied here <strong className="text-blue-600">without any referral</strong> (I will suggest taking a referral if you can, because it can prioritize your application in resume shortlisting).</p>
            <p className="mb-4">So after submitting my first internship form, I was eagerly waiting for the result, which is the first step <strong className="text-blue-600">RESUME SHORTLISTING</strong> in any off-campus application.<br></br></p>
            <p className="mb-4"><strong className="text-blue-600">Main Points to be remembered for resume shortlisting</strong></p>
            <ul className="list-disc pl-4 mb-4">
              <li>Your resume should be clean and try to keep it within 1 page.</li>
              <li>Include all important sections like education, work experience, technical skills, projects, and your fields of interests.</li>
              <li>Ask 4-5 friends to review it, avoid grammatical mistakes, and keep it simple.</li>
              <li>Many people ask to use a LaTeX template, but in my case, I used a Word document and then converted it to PDF. So it’s up to you what you prefer.</li>
            </ul>
            <p className="mb-4">So, I finally received an email on 5<sup>th</sup> Jan at 12:59 pm that my candidature has been shortlisted. This email gave me immense pleasure and happiness, but lots of preparation had to be done for the next round.</p>
            <p className="mb-4">After shortlisting, there were two <strong className="text-blue-600">CODING INTERVIEWS</strong> for which they asked to choose the interview preferences.&nbsp;</p>
            <p className="mb-4">This is the main part of the selection process and requires lots of preparation and technical knowledge. There are generally 2 coding interviews. In the first one, they ask 2 coding questions related to DSA topics, mostly from arrays, hashmap, linked list, stack, and queue. In the second, they go a little bit harder and ask questions from trees, graphs, and dynamic programming. The main purpose of this round is to check problem-solving skills, coding, DSA knowledge, problem execution time, communication, and your creative thinking.</p>
            <p className="mb-4"><strong className="text-blue-600">Main tips for Coding interviews </strong></p>
            <ul className="list-disc pl-4 mb-4">
              <li>Complete most of the topics of <strong className="text-blue-600">DSA </strong>before your interview and practice medium to hard-level problems on those.&nbsp;</li>
              <li>Personally prefer LeetCode and InterviewBit for practice.</li>
              <li>Practice writing clean code on <strong className="text-blue-600">Google Docs </strong>as they ask you to do the same, and there is no indentation or code completion. Make sure to give meaningful names to your variables since they observe everything.</li>
              <li>Always try to “<strong className="text-blue-600">think loudly</strong>,” as the interaction between you and the interviewer throughout the meeting is crucial, and they can judge and guide you only if you will be presenting your ideas and thoughts before them.&nbsp;&nbsp;</li>
              <li>Be smart in identifying the situation in which they are trying to judge you. Like if you are not able to understand the question, you can ask again, and this will show your <strong className="text-blue-600">analytical skills</strong>.</li>
              <li>Now the main point: do not explain the optimal solution first, try to give a brute-force approach and then slowly reach the optimal solution. This shows you are good at <strong className="text-blue-600">optimization.</strong></li>
              <li>Explain them after every line of code what you are trying to implement or achieve from that part of the code. So sometimes they try to help you if you get stuck somewhere and don’t allow you to write an incorrect approach.</li>
            </ul>
            <p className="mb-4">For my preparation (first and second interview was on 13<sup>th</sup> and 17<sup>th</sup> Jan), I have&nbsp;</p>
            <ul className="list-disc pl-4 mb-4">
              <li>Completed DSA from GFG.</li>
              <li>Solved questions on binary search, arrays, stack, queue, hashmap, graph, trees, and dp from Striver sheet.</li>
              <li>Practiced many more questions from LeetCode.</li>
              <li>Read other computer-related topics like DBMS and OOPs, etc. (but these were not asked)&nbsp;</li>
            </ul>
            <p className="mb-4">So at last, I received an email on 27<sup>th</sup> Jan Thursday. Based on both interview performances, they send you an email of selection or rejection. It is said that if an interviewer gives you a sure yes, then that interview is considered. So in my case, the first interview had been very interactive. I have programmed both questions in very little time, and 15 minutes were still remaining. So my interviewer gave me a third question, which extended my interview to more than 45 minutes, but at the end, the interviewer was very happy.&nbsp;</p>
            <p className="mb-4">In the second interview, I was able to decode and program the first question, which was based on Trees, but I was not able to program the second question due to time limits. The interviewer was satisfied with the solution. I asked him a question at the end about the company culture, and then we ended the meeting.</p>
            <p className="mb-4">Both interviews were opposite of each other, and I was not able to judge anything about the result. And at last, I received a selection email from Google, the first big achievement of my life.</p>
            <p className="mb-4">Today also when I see back into this procedure, it feels very proud, and It’s very true that&nbsp;&nbsp;</p>
            <p className="mb-4">“<strong className="text-blue-600">YOU CAN REMODEL YOURSELF TO ANYTHING YOU WANT TO BECOME</strong>“</p>
            <p className="mb-4">I hope this article will provide you most of the insights into the entire selection process.&nbsp;</p>
            <p className="mb-4">For connecting with me, follow on</p>
            <p className="mb-4">
              <div className="flex space-x-3">
                <a href="#">
                  <RiTwitterXLine className="text-gray-800 text-2xl transform transition-transform hover:scale-110 hover:text-gray-300" />
                </a>
                <a href="#">
                  <RiLinkedinFill className="text-gray-800  text-2xl transform transition-transform hover:scale-110 hover:text-gray-300" />
                </a>
                <a href="#">
                  <RiInstagramFill className="text-gray-800 text-2xl transform transition-transform hover:scale-110 hover:text-gray-300" />
                </a>
              </div>
            </p>
            <p className="mb-4">All the best 😉</p> */}
            <ReactQuill value={blogData?.description} theme="bubble" readOnly className="w-full h-full" />
        </div>
      </div>
    </div>

    {similarArticles ? (
        <Articles similarArticles={similarArticles} /> // Render Articles component when similarArticles is not null
    ) : (
      <>
        <BlogCardLoading />
        <BlogCardLoading />
        <BlogCardLoading />
        <BlogCardLoading />
        <BlogCardLoading />
      </>
    )}

    </div >
  );
};

export default Blog;
