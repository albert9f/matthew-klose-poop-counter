import Link from 'next/link'

export default function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'The Classic', href: '/products/classic' },
        { name: 'Soft Serve', href: '/products/soft-serve' },
        { name: 'Compact Series', href: '/products/compact' },
        { name: 'Emergency Release', href: '/products/emergency' },
      ]
    },
    {
      title: 'Features',
      links: [
        { name: 'Analytics', href: '/analytics' },
        { name: 'Comparisons', href: '/compare' },
        { name: 'Photo Tracking', href: '/features/photos' },
        { name: 'Health Insights', href: '/features/health' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Getting Started', href: '/support/getting-started' },
        { name: 'User Guide', href: '/support/guide' },
        { name: 'Contact Support', href: '/support/contact' },
        { name: 'Community', href: '/community' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Matthew', href: '/about' },
        { name: 'About Ozzie', href: '/ozzie' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">💩</span>
                <span className="text-xl font-semibold">Poop Counter</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                The world's most advanced poop tracking experience. 
                Designed exclusively for Matthew Klose and Ozzie Klose.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297C4.198 14.895 3.64 13.88 3.64 12.695s.558-2.2 1.481-3.007c.88-.807 2.031-1.297 3.328-1.297s2.447.49 3.328 1.297c.923.807 1.481 1.822 1.481 3.007s-.558 2.2-1.481 3.007c-.881.807-2.031 1.297-3.328 1.297z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="lg:col-span-1">
                <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay updated with Poop Counter</h3>
              <p className="text-gray-400 text-sm">
                Get the latest features, analytics insights, and product updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Matthew Klose Poop Counter. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <span className="text-sm text-gray-400">Made with 💩 for Matthew & Ozzie</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}