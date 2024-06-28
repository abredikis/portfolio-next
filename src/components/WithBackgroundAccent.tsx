export default function WithBackgroundAccent() {
  return (
    <div className='absolute left-0 right-0 top-0 z-0 h-[min(100dvh,58rem)] max-w-full overflow-hidden'>
      <div className='absolute left-1/2 top-1/2 z-10 aspect-square h-3/4 -translate-x-[80%] -translate-y-1/2 rounded-full bg-primary-500'></div>
      <div className='absolute left-1/2 top-1/2 z-10 aspect-square h-1/2 -translate-x-1/3 -translate-y-1/4 rounded-full bg-accent-500'></div>
      <div className='fixed inset-0 z-20 bg-primary-50/[.925] backdrop-blur-[200px]'></div>
    </div>
  );
}
