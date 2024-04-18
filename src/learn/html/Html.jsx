import React from 'react';
import Intro from '../../courses/html/Intro';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Navbar from '../../components/Navbar';
import HtmlSidebar from '../../components/HtmlSidebar';

const Html = () => {
  return (
    <div className='bg-gray-50 text-black dark:text-white dark:bg-gray-950 mx-auto min-h-screen'>
      <div className='container max-w-7xl mx-auto'>
        <div>
          <Navbar />
        </div>
        <div className='grid md:grid-cols-6'>
          <div className='col-span-4'>
            <Intro />
          </div>
          <div className='hidden md:block col-span-2 text-right pr-5 pt-10'>
            <HtmlSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Html;