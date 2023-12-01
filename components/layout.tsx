import React, { useEffect, useState } from 'react';

// components
import Navbar from '../components/navbar';
import Footer from './footer';

// styles
import cx from 'classnames';
import Head from 'next/head';
import { ChevronDoubleUpIcon } from '@heroicons/react/outline';

export default function Layout({
    children,
    active,
}: {
    children: React.ReactNode;
    active: string;
}) {
    const [isDarkMode, setDarkMode] = useState(true);
    const [scrollTop, setScrollTop] = useState(0);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
        window.localStorage.setItem('isDarkMode', `${isDarkMode}`);
    };

    useEffect(() => {
        if (
            window.localStorage.getItem('isDarkMode') === 'true' ||
            (window.localStorage.getItem('isDarkMode') === null &&
                !window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    }, [isDarkMode]);

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset;
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop]);

    return (
        <>
            <Head>
                <title>
                    {active
                        .toLowerCase()
                        .split(' ')
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1)) +
                        ' | Coding Academy St. Louis'}
                </title>

                {/* metadata */}
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta
                    name='title'
                    content={
                        active
                            .toLowerCase()
                            .split(' ')
                            .map(
                                (w) => w.charAt(0).toUpperCase() + w.slice(1)
                            ) + ' | Coding Academy St. Louis'
                    }
                />
                <meta name='type' content='website' />
                <meta
                    name='url'
                    content='https://codingacademystl.org'
                />
                <meta
                    name='image'
                    content='https://codingacademystl.org/img/logo.png'
                />
                <meta
                    name='description'
                    content='Teaching students with all levels of programming experience through engaging, effective, and hands-on lessons for free'
                />
                <meta name='theme-color' content='#334155' />
                <link rel="canonical" href="https://codingacademystl.org" />
            </Head>
            <div className={cx({ dark: isDarkMode }, 'transition-colors')}>
                <div
                    className={cx('bg-slate-50 dark:bg-slate-700 h-full', {
                        dark: isDarkMode,
                    })}
                >
                    <Navbar
                        active={active}
                        isDarkMode={isDarkMode}
                        toggleDarkMode={toggleDarkMode}
                    />
                    <main className={cx({ dark: isDarkMode })}>{children}</main>
                    <div className='fixed bottom-8 right-8 text-slate-700 dark:text-slate-50'>
                        <a
                            href='#'
                            className={cx({
                                'pointer-events-none': scrollTop === 0,
                            })}
                        >
                            <ChevronDoubleUpIcon
                                className={cx(
                                    'h-10 w-10 opacity-100 transition-all delay-200 drop-shadow-lg',
                                    { 'opacity-0': scrollTop === 0 }
                                )}
                            />
                        </a>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
