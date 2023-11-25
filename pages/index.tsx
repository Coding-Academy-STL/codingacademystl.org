// types
import type { NextPage } from 'next';

// components
import Layout from '../components/layout';
import AboutCard from '../components/aboutCard';

// styles
// icons
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Alert from '../components/alert';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

import { motion } from 'framer-motion';

const people = [
    {
        name: 'Abheek Dhawan',
        image: '/img/team/abheek-dhawan.png',
        role: 'Mentor',
        bio: 'An avid programmer and astronomer, Abheek has particicipated in many STEM-related competitions and is continuing his CS journey as co-president for the Ladue Computer Science Club and as a programmer for the Ladue High School FRC team.',
        links: [
            {
                link: 'https://github.com/abheekda1',
                node: (
                    <FaGithub className='inline-block mr-2 mb-2 w-4 fill-slate-700 dark:fill-slate-50' />
                ),
            },
            {
                link: 'https://instagram.com/abheek_dhawan',
                node: (
                    <FaInstagram className='inline-block mr-2 mb-2 w-4 fill-slate-700 dark:fill-slate-50' />
                ),
            },
            {
                link: 'mailto:abheekd@protonmail.com',
                node: (
                    <FaEnvelope className='inline-block mr-2 mb-2 w-4 fill-slate-700 dark:fill-slate-50' />
                ),
            },
        ],
    },
    {
        name: 'Aiden Lambert',
        image: '/img/team/aiden-lambert.png',
        role: 'Mentor',
        bio: "Aiden is a junior and enjoys writing close-to-the-metal code. His game engine, Eugene (work in progress), is an example of his interest in low level graphics. During the spring semester, however, all of his programming energy is focused on his second hobby: writing code for the Ladue highschool's robotics team.",
        links: [
            {
                link: 'https://github.com/theVerySharpFlat',
                node: (
                    <FaGithub className='inline-block mr-2 mb-2 w-4 fill-slate-700 dark:fill-slate-50' />
                ),
            },
        ],
    },
    {
        name: 'Samuel Wiseman',
        image: '/img/team/samuel-wiseman.png',
        role: 'Mentor',
        bio: 'Samuel Wiseman, a junior at LHWHS who is pursuing a software engineering career. Programmer with over 6 years experience, enrolled at numerous clubs and avid Java hater.',
        links: [
            {
                link: 'https://github.com/notSam25',
                node: (
                    <FaGithub className='inline-block mr-2 mb-2 w-4 fill-slate-700 dark:fill-slate-50' />
                ),
            },
        ],
    },
    {
        name: 'Aric Wang',
        image: '/img/team/aric-wang.png',
        role: 'Outreach Coordinator',
        bio: 'Aric Wang is a 16-year-old junior at LHWHS. In his free time, he enjoys playing piano, drawing, and playing online videogames with his friends.',
    },
    {
        name: 'Ashmit Tendolkar',
        image: '/img/team/ashmit-tendolkar.png',
        role: 'Social Media Manager',
        bio: 'Ashmit is a junior who enjoys programming in his free time. His other hobbies include tennis and guitar as well as playing video games. He also hopes to be an aerospace engineer one day.',
    },
];

const About: NextPage = () => {
    const router = useRouter();
    const [messageReceivedShown, showMessageReceived] = useState(false);

    useEffect(() => {
        if (router.query.hasOwnProperty('messageReceived')) {
            showMessageReceived(true);
            router.push('/');
        }
    }, [router]);

    return (
        <Layout active='home'>
            <>
                {(() => {})()}
                <Alert
                    hidden={!messageReceivedShown}
                    alertType='info'
                    content="Thank you for sending us a message! You should receive a confirmation email soon. If you don't, please email us directly at contact@codingacademystl.org."
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='about'
                    className='flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all'
                >
                    <h1 className='block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3'>
                        Meet our team!
                    </h1>
                    <p className='block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3'>
                        We are composed of high school volunteers dedicated to
                        helping others learn.
                    </p>
                    {people.map((p, idx) => (
                        <AboutCard
                            key={idx}
                            name={p.name}
                            pic={p.image || '/img/team/profile-pic-default.jpg'}
                            role={p.role || 'Mentor'}
                            bio={p.bio || ''}
                            links={p.links}
                        />
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='learn-more'
                    className='flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all'
                >
                    <h1 className='block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3'>
                        What do we do?
                    </h1>
                    <p className='block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3'>
                        We provide programming coaching to students of all skill
                        levels.
                    </p>
                    <div className='grid grid-cols-2 grid-rows-3 gap-4'>
                        <div className='flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-400 shadow-xl rounded-lg text-center px-2 py-2 md:py-8'>
                            <h2 className='text-base md:text-4xl break-words max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg font-bold sm:text-2xl my-auto'>
                                Young Students
                            </h2>
                        </div>
                        <div className='flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-200 shadow-xl rounded-lg text-center px-2 py-2 md:py-8'>
                            <p className='text-sm md:text-base max-w-sm md:max-w-md lg:max-w-lg my-auto'>
                                Young students will start by learning basic
                                programming concepts such as variables and
                                functions, as well as their usages and
                                applications through fun activities and
                                projects. This program builds up to our next
                                one, in which students learn Python.
                            </p>
                        </div>
                        <div className='flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-200 shadow-xl rounded-lg text-center px-2 py-2 md:py-8'>
                            <p className='text-sm md:text-base max-w-sm md:max-w-md lg:max-w-lg my-auto'>
                                Students will begin with an introduction to one
                                of the most popular programming
                                languages&#8212;Python! With interactive lessons
                                and activities, they will finish off the program
                                with a final game or project of their choosing.
                            </p>
                        </div>
                        <div className='flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-400 shadow-xl rounded-lg text-center px-2 py-2 md:py-8'>
                            <h2 className='text-base md:text-4xl break-words max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg font-bold sm:text-2xl my-auto'>
                                Intermediate
                            </h2>
                        </div>
                        <div className='flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-400 shadow-xl rounded-lg text-center px-2 py-2 md:py-8'>
                            <h2 className='text-base md:text-4xl break-words max-w-sm md:max-w-md lg:max-w-lg max-h-sm md:max-h-md lg:max-h-lg font-bold sm:text-2xl my-auto'>
                                Tutoring
                            </h2>
                        </div>
                        <div className='flex flex-col bg-slate-50 text-slate-700 dark:bg-gray-700 dark:text-slate-200 shadow-xl rounded-lg text-center px-2 py-2 md:py-8'>
                            <p className='text-sm md:text-base max-w-sm md:max-w-md lg:max-w-lg my-auto'>
                                Older, high school age or advanced middle
                                schoolers who need aid or enrichment in learning
                                concepts from classes such as Computer Science
                                Principles and Advanced Placement Computer
                                Science A or elsewhere will be paired with a
                                coach to enhance their learning.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='get-started'
                    className='flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all'
                >
                    <h1 className='block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-3'>
                        How does it work?
                    </h1>
                    <p className='block w-full text-center text-lg text-slate-800 dark:text-slate-400 mb-3'>
                        See how you can take advantage of the free services
                        provided by our experienced coaches!
                    </p>
                    <div className='flex flex-col justify-center flex-wrap rounded-xl p-4 md:p-8 md:pl-12 md:pb-0 text-slate-700 dark:text-slate-50'>
                        <div className='flex flex-col md:flex-row  items-start md:space-x-4 text-center md:text-left my-3 md:my-5'>
                            <div className='opacity-70 text-center w-12 flex-none rounded-full object-cover m-auto bg-gradient-to-tr text-slate-50 from-cyan-500 via-cyan-400 to-blue-500 p-3'>
                                1
                            </div>
                            <div className='mx-auto md:mx-0 flex-auto md:max-w-lg lg:max-w-2xl'>
                                <h5 className='font-bold text-lg md:text-xl lg:text-2xl'>
                                    Contact us!
                                </h5>
                                <p className='text-base md:text-lg'>
                                    You can contact us through this website, by{' '}
                                    <a>phone</a>, or through our{' '}
                                    <a
                                        title='contact@codingacademystl.org'
                                        href='mailto:contact@codingacademystl.org'
                                        className='underline underline-offset-2 decoration-dashed decoration-slate-500'
                                    >
                                        email
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row  items-start md:space-x-4 text-center md:text-left my-3 md:my-5'>
                            <div className='opacity-70 text-center w-12 flex-none rounded-full object-cover m-auto bg-gradient-to-tr text-slate-50 from-blue-600 via-indigo-500 to-purple-500 p-3'>
                                2
                            </div>
                            <div className='mx-auto md:mx-0 flex-auto md:max-w-lg lg:max-w-2xl'>
                                <h5 className='no-underline font-bold text-lg md:text-xl lg:text-2xl'>
                                    Coordinate
                                </h5>
                                <p className='text-base md:text-lg'>
                                    We will respond as soon as possible to work
                                    out specifics such as time, as well as take
                                    any questions.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row  items-start md:space-x-4 text-center md:text-left mt-3 md:mt-5'>
                            <div className='opacity-70 text-center w-12 flex-none rounded-full object-cover m-auto bg-gradient-to-tr text-slate-50 from-purple-500 via-red-400 to-orange-500 p-3'>
                                3
                            </div>
                            <div className='mx-auto md:mx-0 flex-auto md:max-w-lg lg:max-w-2xl'>
                                <h5 className='no-underline font-bold text-lg md:text-xl lg:text-2xl'>
                                    Mentoring
                                </h5>
                                <p className='text-base md:text-lg'>
                                    Once everything has been decided, one of our
                                    qualified teachers will come to help the
                                    student(s) learn programming interactively
                                    and effectively. Once finished, we will
                                    always be available to talk more and provide
                                    further support and assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    id='contact-us'
                    className='flex flex-wrap px-5 justify-center overflow-hidden pt-12 pb-8 lg:py-24 transition-all'
                >
                    <h1 className='block w-full font-extrabold text-center text-5xl text-slate-700 dark:text-slate-50 mb-5'>
                        Contact us!
                    </h1>

                    <form
                        action='/api/contact'
                        method='post'
                        className='flex flex-col grow sm:max-w-md md:max-w-lg lg:max-w-xl'
                    >
                        <div className='mb-6'>
                            <input
                                type='text'
                                name='personName'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='Name'
                                required
                            />
                        </div>
                        <div className='mb-6'>
                            <input
                                type='email'
                                name='personEmail'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='Email'
                                required
                            />
                        </div>
                        <div className='mb-6'>
                            <select
                                name='inquiryReason'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                required
                            >
                                <option value='Young students'>
                                    Young students
                                </option>
                                <option value='Intermediate students'>
                                    Intermediate students
                                </option>
                                <option value='Tutoring'>Tutoring</option>
                                <option value='Other'>Other</option>
                            </select>
                        </div>
                        <div className='mb-6'>
                            <textarea
                                placeholder='Inquiry'
                                name='inquiryData'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                required
                            />
                        </div>
                        <input
                            type='submit'
                            value='Submit'
                            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            disabled
                        />
                    </form>
                    <p className='block w-full text-center text-slate-700 dark:text-slate-50 mt-2'>
                        ...or email us directly at{' '}
                        <a
                            title='contact@codingacademystl.org'
                            href='mailto:contact@codingacademystl.org'
                            className='underline underline-offset-2 decoration-dashed decoration-slate-500'
                        >
                            contact@codingacademystl.org
                        </a>
                    </p>
                </motion.div>
            </>
        </Layout>
    );
};

export default About;
