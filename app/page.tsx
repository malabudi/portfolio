import { getImageProps } from 'next/image'
 
function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

export default function Home() {
  const {
    props: { srcSet },
  } = getImageProps({
    src: '/bg.gif',
    width: 128,
    height: 128,
    alt: ''
  })

  const backgroundImage = getBackgroundImage(srcSet)

  return (
    <div 
      className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black" 
      style={{ backgroundImage }}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold text-zinc-900 dark:text-white sm:text-6xl">
          Welcome to <span className="text-blue-600">Next.js!</span>
        </h1>
        <p className="mt-6 text-lg text-zinc-700 dark:text-zinc-300 sm:text-xl">
          Get started by editing <code className="rounded-md bg-zinc-100 p-1 font-mono text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">app/page.tsx</code>
        </p>
      </main>
    </div>
  );
}
