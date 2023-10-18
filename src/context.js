import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOPen, setIsSubmenuOPen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page: "", links: []})

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar =() => {
        setIsSidebarOpen(false);
    }

    const openSubmenu =(text, coordinates) => {
        const page = sublinks.find((link) => link.page ===text);
        setPage(page);
        setLocation(coordinates);
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
        closeSidebar,
        location,
        page,
        }}
        >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}