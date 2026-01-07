export default function UserIcon() {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            className="w-full h-full scale-125"
        >
            <defs>
                <linearGradient id="user-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14213d" />
                    <stop offset="30%" stopColor="#14213d" />
                    <stop offset="70%" stopColor="#8c5e1f" />
                    <stop offset="100%" stopColor="#fca311" />
                </linearGradient>
            </defs>

            <circle 
                cx="12" 
                cy="8" 
                r="5"
                fill="url(#user-gradient)"
                stroke="#e5e5e5"
                strokeWidth="0.5"
            />
            
            <path 
                d="M20 21a8 8 0 0 0-16 0"
                fill="url(#user-gradient)"
                stroke="#e5e5e5"
                strokeWidth="0.5"
            />    
        </svg>
    );
}

