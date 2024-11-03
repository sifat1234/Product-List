import LogoImg from '../../assets/logo.svg';

const navItems = [
  { label: 'Women', href: '#' },
  { label: 'Men', href: '#' },
  { label: 'Company', href: '#' },
  { label: 'Stores', href: '#' },
];

const authItems = [
  { label: 'Sign in', href: '#' },
  { label: 'Create account', href: '#' },
];

export default function NavBar() {
  return (
    <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex h-16 items-center">
          <button
            type="button"
            className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div className="ml-4 flex lg:ml-0">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={LogoImg} alt="" />
            </a>
          </div>

          <div className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full space-x-8">
              {navItems.map((item) => (
                <div className="flex" key={item.label}>
                  <div className="relative flex">
                    <button
                      type="button"
                      className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                      aria-expanded="false"
                    >
                      {item.label}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ml-auto flex items-center">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              {authItems.map((item) => (
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  key={item.label}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:ml-8 lg:flex">
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-gray-800"
              >
                <img
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                  alt=""
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-sm font-medium">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
