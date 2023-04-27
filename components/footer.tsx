import Container from './container';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div className="py-28 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
            href={`https://github.com/brymon68/hellobryce.dev`}
            className="mx-3 font-bold hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
