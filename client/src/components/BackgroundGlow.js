export const BackgroundGlow = ({ variant = "default" }) => {
  if (variant === "alt") {
    return (
      <>
        <div className="absolute bottom-0 -left-10 w-80 h-80 bg-pink-200/40 dark:bg-pink-900/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/2 -right-10 w-80 h-80 bg-purple-200/40 dark:bg-purple-900/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </>
    );
  }

  return (
    <>
      <div className="absolute top-20 -left-10 w-72 h-72 bg-purple-200/50 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute top-40 -right-10 w-72 h-72 bg-pink-200/50 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
    </>
  );
};