import { Theme } from "./_theme";

export default Theme({
    palette: {
        // Fully transparent background that works with both light and dark GitHub mode
        bg: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)"],
        // High contrast text colors that work in both light and dark modes
        text: ["#0d1117", "#e6edf3"],
        // Color palette: Green (Easy), Yellow (Medium), Red (Hard), Blue (Accent)
        color: ["#3fb950", "#ffd33d", "#f85149", "#1f6feb"],
    },
    css: `
        /* Overall styling */
        svg {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
        
        /* Titles and headers */
        #username {
            font-weight: 600;
            font-size: 16px;
        }
        
        #ranking {
            font-weight: 500;
            font-size: 14px;
            opacity: 0.8;
        }
        
        /* Difficulty level labels - make them more prominent */
        #easy-solved-type, #medium-solved-type, #hard-solved-type {
            font-weight: 600;
            font-size: 13px;
        }
        
        /* Count numbers - make them bold and prominent */
        #easy-solved-count, #medium-solved-count, #hard-solved-count {
            font-weight: 700;
            font-size: 16px;
        }
        
        /* Progress bars styling */
        #easy-solved-bg, #medium-solved-bg, #hard-solved-bg {
            opacity: 0.15;
            rx: 3;
            ry: 3;
        }
        
        #easy-solved-progress, #medium-solved-progress, #hard-solved-progress {
            rx: 3;
            ry: 3;
            opacity: 1;
        }
        
        /* Section titles */
        text[text-anchor="middle"] {
            letter-spacing: 0.5px;
        }
        
        /* Total solved ring styling */
        #total-solved-ring {
            stroke-width: 3;
            opacity: 0.9;
        }
        
        /* Icon styling */
        #icon {
            opacity: 1;
        }
        
        /* Adjust line heights for better readability */
        tspan {
            dominant-baseline: middle;
        }
    `,
});
