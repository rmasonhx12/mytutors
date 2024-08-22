
import Navbar from '@/components/Navbar2';
import Footer from '@/components/Footer';
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      </html>
  );
};

export default MainLayout;