const Footer = () => {
  return (
    <footer className="footer p-3 shadow position-absolute bottom-0 end-0 w-100">
      <div className="container">
        <h4 className="footer__copyright text-center">
          &copy; CopyRight Reserved {new Date().getFullYear()}
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
