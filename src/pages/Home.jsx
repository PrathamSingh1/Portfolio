import React from 'react'

const Home = () => {
  return (
    <div className='sm:max-w-[810px] max-w-[350px] mx-auto sm:mt-[70px] mt-[20px]'>

      {/* Border Section */}
      <div className='border-[1px] border-[#27272a] w-[full] sm:h-[25vh] p-[20px] rounded-[10px]'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='font-[Menlo] sm:text-[36px] text-[20px] leading-[40px] font-[700] tracking-tighter'>Shashi Ranjan Singh</h1>
          </div>
          <div className='flex items-center gap-3'>
            <div className='p-[10px] border-[1px] border-[#27272a] w-[41.6px] h-[41.6px] rounded-[10px]'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8.0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1.0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16h384c8.8.0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64h384c35.3.0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3.0-64-28.7-64-64V128z" fill="#fff"></path></svg>
            </div>
            <div className='p-[10px] border-[1px] border-[#27272a] w-[41.6px] h-[41.6px] rounded-[10px]'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6.0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6.0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3.0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1.0-6.2-.3-40.4-.3-61.4.0.0-70 15-84.7-29.8.0.0-11.4-29.1-27.8-36.6.0.0-22.9-15.7 1.6-15.4.0.0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5.0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9.0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4.0 33.7-.3 75.4-.3 83.6.0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6.0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9.0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="#fff"></path></svg>
            </div>
            <div className='p-[10px] border-[1px] border-[#27272a] w-[41.6px] h-[41.6px] rounded-[10px]'>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" /></svg>
            </div>
            
          </div>
        </div>
        <div className='flex items-center text-[#9ca3af] font-[400] sm:text-[20px] text-[18px] leading-[26px] mt-[5px]'>
          <div className='sm:w-[20px] w-[18px] sm:h-[20px] h-[18px]'>
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3.5C6 2.67157 6.67157 2 7.5 2S9 2.67157 9 3.5 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5zM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5 10 2.11929 8.88071 1 7.5 1 6.11929 1 5 2.11929 5 3.5c0 1.20948.85888 2.21836 2 2.44999V13.5c0 .2761.22386.5.5.5s.5-.2239.5-.5V5.94999z" fill="currentcolor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </div>
          <span>Noida, India</span>
        </div>
        <div className='sm:text-[20px] text-[18px] font-[400] leading-[26px] mt-[15px]'>
          <p>I'm a Software Engineer passionate about building scalable web applications with clean code, modern technologies, and seamless user experiences.</p>
        </div>
        
      </div>

      {/* What I Work With */}
      <div>
        <h1 className='sm:text-[40px] text-[32px] text-[#f1f5f9] leading-[52px] font-[700] mb-[30px] mt-[55px]'>What I work with</h1>
        <div>
          <div className='flex items-center sm:gap-3 gap-2 sm:text-[20px] text-[16px] p-[8px] overflow-hidden'>
            <i className="devicon-html5-plain sm:text-3xl text-2xl"></i> HTML
            <i className="devicon-css3-plain sm:text-3xl text-2xl"></i> CSS
            <i className="devicon-tailwindcss-plain sm:text-3xl text-2xl"></i> Tailwind
            <i className="devicon-bootstrap-plain sm:text-3xl text-2xl"></i> Bootstrap
            <i className="devicon-materialui-plain sm:text-3xl text-2xl"></i> MaterialUI
            <i className="devicon-sass-plain sm:text-3xl text-2xl"></i> Sass
            <i className="devicon-javascript-plain sm:text-3xl text-2xl"></i> JavaScript
            <i className="devicon-typescript-plain sm:text-3xl text-2xl"></i> TypeScript
            <i className="devicon-react-plain sm:text-3xl text-2xl"></i> React
            <i className="devicon-nextjs-plain sm:text-3xl text-2xl"></i> Nextjs
          </div>
          <div className='flex items-center sm:gap-3 gap-2 sm:text-[20px] text-[16px] p-[8px] mt-[10px] overflow-hidden'>
            <i class="devicon-nodejs-plain-wordmark sm:text-3xl text-2xl"></i> Node.js
            <i class="devicon-express-original sm:text-3xl text-2xl"></i> Express
            <i class="devicon-mongodb-plain sm:text-3xl text-2xl"></i> MongoDB
            <i class="devicon-mysql-original sm:text-3xl text-2xl"></i> MySQL
            <i class="devicon-postgresql-plain sm:text-3xl text-2xl"></i> PostgreSQL
            <i class="devicon-prisma-original sm:text-3xl text-2xl"></i> Prisma
            <i class="devicon-git-plain sm:text-3xl text-2xl"></i> Git
            <i class="devicon-github-original sm:text-3xl text-2xl"></i> Github
            <i class="devicon-docker-plain sm:text-3xl text-2xl"></i> Docker
            <i class="devicon-amazonwebservices-plain-wordmark sm:text-3xl text-2xl"></i> AWS
            <i class="devicon-cloudflare-plain sm:text-3xl text-2xl"></i> Cloudflare
            <i class="devicon-vercel-original sm:text-3xl text-2xl"></i> Vercel
            <i class="devicon-bash-plain sm:text-3xl text-2xl"></i> Bash
          </div>
        </div>
      </div>

      {/* Experience */}
      <div>
        <h1 className='sm:text-[40px] text-[32px] leading-[52px] font-[700] mb-[30px] mt-[30px]'>Experience</h1>
        <div className='sm:max-w-[740px] max-w-[350px] mx-auto'>
          <h2 className='text-[20px] leading-[26px] text-[#31929a] font-[500]'>Codexon</h2>
          <h1 className='text-[20px] leading-[28px] text-[#f1f5f9] font-[700]'>Software Engineering Intern</h1>
          <h3 className='text-[14px] leading-[20px] text-[#94a3b8] font-[400]'>July 2024 - Dec 2024 </h3>
          <p className='sm:text-[20px] text-[18px] leading-[26px] text-[#cbd5e1] font-[400]'>Developed and maintained frontend features using React.js. Worked on creating responsive, user-friendly interfaces and improving overall UI/UX for the company's web applications. Collaborated with the backend team to integrate APIs and ensure smooth functionality across the platform.</p>
        </div>
      </div>

      {/* Project */}
      <div>
        <h1 className='sm:text-[40px] text-[32px] leading-[52px] font-[700] mb-[30px] mt-[30px]'>Projects</h1>
        
      </div>
    </div>
  )
}

export default Home