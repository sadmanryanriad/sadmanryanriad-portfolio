/* eslint-disable react/prop-types */

const Header = ({children}) => {
    return (
        <div className="text-3xl lg:text-5xl font-bold mb-5 mt-5 dark:text-slate-300">
            <h1>{children}</h1>
        </div>
    );
};

export default Header;