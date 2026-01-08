export default function HeroBackground() {
  return (
    <>
      <div
        aria-hidden
        className="
            absolute
            inset-x-[-50%]
            inset-y-0
            bg-[linear-gradient(-60deg,#df8b00_50%,#fca311_50%)]
            opacity-50
            animate-[slide_5s_ease-in-out_infinite_alternate]
            -z-5
        "
      />

      <div
        aria-hidden
        className="
            absolute
            inset-x-[-50%]
            inset-y-0
            bg-[linear-gradient(-60deg,#df8b00_50%,#fca311_50%)]
            opacity-50
            animate-[slide_6s_ease-in-out_infinite_alternate-reverse]
            -z-5
        "
      />

      <div
        aria-hidden
        className="
            absolute
            inset-x-[-50%]
            inset-y-0
            bg-[linear-gradient(-60deg,#df8b00_50%,#fca311_50%)]
            opacity-50
            animate-[slide_7s_ease-in-out_infinite_alternate]
            -z-5
        "
      />
    </>
  );
}
