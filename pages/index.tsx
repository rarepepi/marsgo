import Head from "next/head";
import { useEffect, useRef } from "react";
export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current!.volume = 0.3;
    }
  }, []);
  return (
    <>
      <Head>
        <title>MarsGo</title>
        <meta name="description" content="Going to mars. For free." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio
        src="https://dl.sndup.net/sqrh/marsgo.mp3"
        autoPlay
        loop
        ref={audioRef}
      />{" "}
      <main className="flex flex-col items-center  text-center p-12 text-white bg-mars bg-cover bg-center bg-no-repeat ">
        <div className="max-w-4xl backdrop-blur-sm rounded-2xl">
          <h1 className="mt-6 text-6xl font-bold">
            Your First-Class Ticket to the Red Frontier!
          </h1>
          <h2 className="mt-8 text-4xl">Colonize Mars the EASY way! 🚀</h2>
          <p className="mt-8 text-2xl">
            Welcome to MarsGo! We&apos;re a revolutionary parody startup
            dedicated to building a future on Mars. We&apos;re not actually
            building anything, but we&apos;re passionate about it. So
            passionate, in fact, we&apos;re almost as real as those other
            startups that will never see the light of day.
          </p>
          <div className="my-8 text-2xl">
            <h3>
              Join us in our quest to conquer the universe (at least in our
              dreams). Here&apos;s what MarsGo.xyz has to offer:
            </h3>

            <ol className="text-lg mt-4 space-y-4">
              <li>
                <span className="text-2xl font-bold">
                  1. Exclusive Martian Real Estate 🏠 <br />
                </span>
                <br /> Tired of Earth&apos;s limited space and overpriced
                properties? Reserve your own Martian land now! With our
                nonexistent MarsGo Real Estate platform, you can claim your
                piece of the Red Planet. Just don&apos;t expect any paperwork.
                Or the land. Ever.
              </li>
              <li>
                <span className="text-2xl font-bold">
                  2. MarsGo Social Network 🌐 <br />
                </span>
                <br /> Introducing MarsGo&apos;s revolutionary social network,
                MarsBook! Connect with fellow Earthlings dreaming of Mars. Share
                memes, have a laugh, and discuss the best way to grow potatoes
                on Martian soil. Just don&apos;t expect any actual science or
                progress.
              </li>
              <li>
                <span className="text-2xl font-bold">3. MarsGo Fitness 🏋️‍♀️</span>
                <br /> Stay fit for your imaginary journey to Mars with our
                MarsGo Fitness app. Get tips from our not-so-certified trainers
                on how to survive in the Martian environment without ever
                leaving your couch. Gravity training? We haven&apos;t figured it
                out, but we&apos;re working on it (kind of).
              </li>
              <li>
                <span className="text-2xl font-bold">
                  4. MarsGo Merchandise 🛍️ <br />
                </span>
                <br /> Show your support for MarsGo and look out-of-this-world
                in our exclusive MarsGo merchandise. We have T-shirts, caps,
                hoodies, and more! Perfect for confusing your friends and
                sparking conversations about your favorite parody startup.
              </li>
              <li>
                <span className="text-2xl font-bold">
                  5. MarsGo Jobs 🚀 <br />
                </span>
                <br /> Looking for a career that&apos;s going nowhere? Join the
                MarsGo team! We&apos;re always looking for talented individuals
                who are passionate about not actually doing anything. It&apos;s
                the perfect opportunity for a good laugh and honing your
                procrastination skills.
              </li>
            </ol>
          </div>
          <p className="mt-8 text-2xl backdrop-blur-sm">
            Sign up today and join our not-so-serious mission to Mars. Together,
            we&apos;ll reach for the stars (and maybe even get a chuckle or two
            along the way).
          </p>
          <h3 className="my-4 backdrop-blur-sm">
            MarsGo.xyz - Because the universe needs a bit of humor.
          </h3>
        </div>
      </main>
    </>
  );
}
