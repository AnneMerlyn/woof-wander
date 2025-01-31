import { Link } from "react-router";

const navLinks = [
    { name: "Dog Explorer", path: "/" },
    { name: "Dog Status", path: "/dogstatus" },
];

export const Nav = () => {
    return (
        <div className="bg-slate-100 py-2 px-4 text-xl mb-4 flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <div className="w-12 h-12 flex items-center">
                    {/* SVG Logo */}
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 200 250"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Paw pad */}
                        <circle
                            cx="100"
                            cy="130"
                            r="30"
                            fill="#F4A261"
                            stroke="#E76F51"
                            strokeWidth="5"
                        />
                        {/* Toes */}
                        <circle
                            cx="70"
                            cy="80"
                            r="18"
                            fill="#F4A261"
                            stroke="#E76F51"
                            strokeWidth="5"
                        />
                        <circle
                            cx="100"
                            cy="70"
                            r="18"
                            fill="#F4A261"
                            stroke="#E76F51"
                            strokeWidth="5"
                        />
                        <circle
                            cx="130"
                            cy="80"
                            r="18"
                            fill="#F4A261"
                            stroke="#E76F51"
                            strokeWidth="5"
                        />
                        <circle
                            cx="85"
                            cy="50"
                            r="12"
                            fill="#F4A261"
                            stroke="#E76F51"
                            strokeWidth="5"
                        />
                        <circle
                            cx="115"
                            cy="50"
                            r="12"
                            fill="#F4A261"
                            stroke="#E76F51"
                            strokeWidth="5"
                        />
                    </svg>
                </div>
                {/* Brand Name */}
                <span className="text-orange-600 font-bold text-lg">
                    Woof Wander
                </span>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-4">
                {navLinks.map((link) => (
                    <div
                        className="p-1 rounded-md hover:bg-slate-300 hover:text-orange-600 text-slate-600"
                        key={link.path}
                    >
                        <Link to={link.path}>{link.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
