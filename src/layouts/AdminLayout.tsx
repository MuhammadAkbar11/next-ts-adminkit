import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

function AdminLayout({ children }: Props) {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">{children}</main>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;
