import Link from "next/link";
import { FaLinkedin, FaSlideshare } from "react-icons/fa6";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link href={"/"} className="link link-hover">About Me</Link>
        <Link href={'/contact'} className="link link-hover">Contact</Link>
        <Link href={"/blogs"} className="link link-hover">Blogs</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href={"https://www.linkedin.com/in/mohammad-salehin-islam"} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline h-16 w-16 tooltip" data-tip="LinkedIn">
            <FaLinkedin size={32}/>
          </Link>
          <Link href={"https://www.facebook.com/mohammad.salehin.islam.27"} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline h-16 w-16 tooltip" data-tip="Facebook">
            <FaFacebookSquare size={32}/>
          </Link>
          <Link href={"https://github.com/SALEHINISLAM"} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline h-16 w-16 tooltip" data-tip="GitHub">
            <FaGithubSquare size={32}/>
          </Link>
          <Link href={"https://www.slideshare.net/msionlinekingdom"} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-outline h-16 w-16 tooltip" data-tip="SlideShare">
            <FaSlideshare size={32}/> 
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by <Link href={"/"}>Md Salehin Islam</Link> 
        </p>
      </aside>
    </footer>
  );
};

export default MainFooter;
