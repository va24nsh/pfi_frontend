import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-yellow-400 py-8 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>F 303, Kruthi Apartments,</p>
            <p>Hennur, Bengaluru,</p>
            <p>Karnataka, India, 560043</p>
            <p><a href="mailto:sales@xaults.com" className="hover:text-yellow-500">maildgdg</a></p>
            <p><a href="tel:+919920932862" className="hover:text-yellow-500">+91 123456789</a></p>
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full mt-4 hover:bg-yellow-500 transition duration-300">
              Get a Quote
            </button>
          </div>

          <div className='mr-14'>
            <h3 className="text-xl font-semibold mb-4">Ready to transform your financial landscape?</h3>
            <p className="mb-4">Experience seamless transactions, enhanced security, and unparalleled convenience.</p>
            <form>
              <input type="email" placeholder="Email *" required className="bg-gray-800 text-white px-4 py-2 rounded-full mb-2 w-full" />
              <button type="submit" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-300 w-full">
                Submit
              </button>
            </form>
          </div>

          <div className='ml-5'>
            <h3 className="text-xl font-semibold mb-4">Menu</h3>
            <Link href="/" className="block mb-2 hover:text-yellow-500">Home</Link>
            {/*<Link href="/solutions" className="block mb-2 hover:text-yellow-500">Solutions</Link>
            <Link href="/technology" className="block mb-2 hover:text-yellow-500">Technology</Link> */}
            <Link href="/about" className="block mb-2 hover:text-yellow-500">About us</Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow us on</h3>
            <Link href="https://www.linkedin.com" className="block mb-2 hover:text-yellow-500">LinkedIn</Link>
            <Link href="https://www.twitter.com" className="block mb-2 hover:text-yellow-500">Twitter</Link>
          </div>
        </div>

        <div className=" mt-8 pt-8 border-t border-gray-800 text-white">
          <p>&copy; 2024 by Sarman.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
