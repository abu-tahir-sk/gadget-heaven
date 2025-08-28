const Footer = () => {
  return (
    <>
      <h2 className="text-center py-4">
        <a className="text-3xl font-bold text-center" href="/">
          Gadget Heaven
        </a>
        <p className="text-center text-gray-400 py-4">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </h2>

      <footer className="footer p-10 grid grid-cols-3 md:px-48">
        <nav>
          <h6 className="font-bold text-xl text-black">Services</h6>
          <h5 className="text-gray-500">Branding</h5>
          <h5 className="text-gray-500">Design</h5>
          <h5 className="text-gray-500">Marketing</h5>
          <h5 className="text-gray-500">Advertisement</h5>
        </nav>
        <nav>
          <h6 className="font-bold text-xl text-black">Company</h6>
          <a className="link link-hover" href="/">
            About us
          </a>
          <a className="link link-hover " href="/dashboard">
            Contact
          </a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-bold text-xl text-black">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
