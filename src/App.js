import { createContext } from 'react';
import styles from './App.module.css';
import { useApp } from './data/hooks/useApp.page';
import Index from './ui/pages/index';

export const AppContext = createContext({});

function App() {
    const useAppValues = useApp();

    return (
        <>
            <header className={styles.header}>
                <h1>
                    React<span>fy</span>
                </h1>
            </header>

            <AppContext.Provider value={useAppValues}>
                <Index />
            </AppContext.Provider>
        </>
    );
}

export default App;
