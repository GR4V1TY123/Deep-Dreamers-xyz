import React from "react";

const Footer = () => {
  const links = [
    {
      title: "Company",
      items: ["About Us", "Careers", "Press", "News"],
    },
    {
      title: "Help",
      items: ["FAQ", "Shipping", "Returns", "Contact Us"],
    },
  ];

  const socialIcons = [
    { icon: "ri-instagram-line", link: "#" },
    { icon: "ri-twitter-x-line", link: "#" },
    { icon: "ri-youtube-line", link: "#" },
    { icon: "ri-tiktok-line", link: "#" },
  ];

  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-3 gap-8 mb-8">
          {links.map((section, index) => (
            <div key={index}>
              <h4 className="text-black font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover-effect">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-black font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="hover:text-primary transition-colors w-8 h-8 flex items-center justify-center"
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center">
          <p>© 2025 Nike, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;