// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css';

// Style Imports
import './globals.css';

export const metadata = {
  title: 'Demo: Wijmo - NextJS Dashboard Free',
  description:
    'Develop next-level web apps with Wijmo Dashboard - NextJS. Now, updated with lightning-fast routing powered by App router.',
};

const RootLayout = ({ children }) => {
  // Vars
  const direction = 'ltr';

  return (
    <html id="__next" dir={direction}>
      <body className="flex is-full min-bs-full flex-auto flex-col">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
