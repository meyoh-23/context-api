import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOPen, setIsSubmenuOPen] = useState(true);


    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar =() => {
        setIsSidebarOpen(false);
    }

    const openSubmenu =() => {
        setIsSubmenuOPen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOPen(false);
    }
    return <AppContext.Provider
    value={{
        isSubmenuOPen,
        isSidebarOpen,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar
        }}
        >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}