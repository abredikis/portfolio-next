export default function WithFooter() {
  return (
    <footer className='bg-white ~py-3/5'>
      <div className='mx-auto grid w-full max-w-[90rem] items-center justify-center gap-4 ~px-5/24 lg:grid-cols-[repeat(3,1fr)]'>
        <p className='text-sm'>
          Built with <span className='text-primary-600'>Next.js</span> and{' '}
          <span className='text-primary-600'>Tailwind CSS</span>
        </p>
        <p className='text-center text-sm'>
          © {new Date().getFullYear()} Alberts Bredikis
        </p>
        <div className='flex justify-center gap-3 lg:justify-end'>
          <a
            href='https://github.com/abredikis'
            target='_blank'
            className='flex size-8 items-center justify-center overflow-hidden rounded-md bg-white text-primary-500 transition-colors hover:text-primary-800'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 509 509'
            >
              <path
                fill='currentColor'
                d='M254 108a150 150 0 0 0-47 292c7 2 10-3 10-7v-28c-42 9-51-18-51-18-7-17-17-21-17-21-13-10 1-10 1-10 15 1 23 16 23 16 14 23 35 16 44 12 1-9 5-16 10-20-34-3-69-16-69-74 0-15 6-29 16-40-2-4-7-19 1-40 0 0 13-4 41 16 25-7 51-7 75 0 29-20 42-16 42-16 8 21 3 36 1 40 10 11 16 25 16 40 0 58-35 70-69 74 6 5 10 14 10 28v41c0 4 3 9 10 7a150 150 0 0 0-47-292Z'
              />
              <path
                fill='currentColor'
                d='m155 316-3 1-1-3h3l1 2ZM161 323c-1 1-2 0-3-1l-1-3c1-1 3 0 4 1v3ZM167 332c-1 0-3 0-3-2v-3l3 1v4ZM175 340c-1 1-3 1-4-1l-1-3h4c1 1 2 3 1 4ZM186 345l-4 1-2-3c0-1 2-2 4-1 1 0 3 2 2 3ZM198 346c0 1-1 2-3 2s-3-1-3-2 1-3 3-3 3 1 3 3ZM210 344c0 1-1 2-3 2-2 1-3 0-4-1 0-1 1-3 3-3s4 0 4 2Z'
              />
            </svg>
          </a>
          <a
            href='https://www.linkedin.com/in/alberts-bredikis/'
            target='_blank'
            className='flex size-8 items-center justify-center overflow-hidden rounded-md bg-white text-primary-500 transition-colors hover:text-primary-800'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 509 509'
            >
              <g fill='currentColor' clip-path='url(#a)'>
                <path d='M172.4 190.6H109V399h63.4V190.6ZM326.5 190.6c-36.3 0-46.3 11.9-54.4 27.2v-27.2h-63.4V399H272V281.2c0-18.1 0-36.3 31.7-36.3 31.8 0 31.8 18.2 31.8 36.3V399H399V281.2c0-54.4-9-90.6-72.5-90.6ZM140.7 172.4a31.7 31.7 0 1 0 0-63.4 31.7 31.7 0 0 0 0 63.4Z' />
              </g>
              <defs>
                <clipPath id='a'>
                  <path fill='currentColor' d='M109 109h290v290H109z' />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
