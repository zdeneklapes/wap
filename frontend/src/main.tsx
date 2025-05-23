import { GoogleOAuthProvider } from '@react-oauth/google';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import { environment } from './environment/environment.ts';
import './index.css';
import { Toaster } from '@/components/ui/toaster.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GoogleOAuthProvider clientId={environment.googleClientId}>
            <BrowserRouter>
                <App />
                <Toaster />
            </BrowserRouter>
        </GoogleOAuthProvider>
    </StrictMode>,
);
