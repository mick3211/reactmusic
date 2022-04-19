import { createContext } from 'react';
import { useApp } from './data/hooks/useApp.page';
import Header from './ui/components/Header';
import Index from './ui/pages/index';

export const AppContext = createContext({});

function App() {
    const useAppValues = useApp();

    return (
        <>
            <Header />

            <AppContext.Provider value={useAppValues}>
                <Index />
            </AppContext.Provider>
        </>
    );
}

export default App;
