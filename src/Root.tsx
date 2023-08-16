import { Outlet } from 'react-router-dom'
import { ThemeToggle } from './components';
const Root = () => {
    return(
        <>
            <Outlet />
            <ThemeToggle/>
        </>
    )
}

export default Root;