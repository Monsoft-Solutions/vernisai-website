import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from './ui/toaster';

export function Layout() {
    return (
        <div className="no-overflow flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
            <Toaster />
        </div>
    );
}
