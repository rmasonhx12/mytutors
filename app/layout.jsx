import '@/assets/styles/globals.css';

export const metadata = {
  title: 'JacquelineTaylorAndFriends',
  description: 'Find music tutors and musicians in your area',
  keywords: 'music, tutors, musicians, lessons, teachers',
};


const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
      </html>
  );
};

export default MainLayout;