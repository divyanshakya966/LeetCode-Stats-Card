import { Theme } from "./_theme";

export default Theme({
    palette: {
        // Fully transparent background for both modes
        bg: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)"],
        // GitHub-native text colors: dark for light mode, light for dark mode
        text: ["#0d1117", "#e6edf3"],
        // GitHub colors: Green (Easy), Yellow (Medium), Red (Hard), Blue (Accent)
        color: ["#3fb950", "#ffd33d", "#f85149", "#1f6feb"],
    },
    css: `
        /* Global SVG styling */
        svg {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
        
        /* Title styling */
        text {
            font-size: 14px;
            font-weight: 400;
        }
        
        /* Username - bold and larger */
        #username {
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 0.3px;
        }
        
        /* Ranking number - accent color */
        #ranking {
            font-size: 14px;
            font-weight: 500;
            opacity: 0.75;
        }
        
        /* Difficulty labels - bold and clear */
        #easy-solved-type, #medium-solved-type, #hard-solved-type {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.2px;
        }
        
        /* Problem counts - bold for emphasis */
        #easy-solved-count, #medium-solved-count, #hard-solved-count {
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0px;
        }
        
        /* Background rectangles for progress bars - light fill */
        #easy-solved-bg, #medium-solved-bg, #hard-solved-bg {
            fill-opacity: 0.2;
        }
        
        /* Progress bar rectangles - solid fill */
        #easy-solved-progress, #medium-solved-progress, #hard-solved-progress {
            fill-opacity: 1;
        }
        
        /* Total solved ring - thicker stroke */
        #total-solved-ring {
            stroke-linecap: round;
            stroke-linejoin: round;
        }
        
        /* Icon */
        #icon {
            opacity: 1;
        }
        
        /* Section headers */
        #icon-label {
            font-size: 12px;
            font-weight: 500;
            opacity: 0.7;
        }
        
        /* Activity section title */
        text[y="310"] {
            font-size: 14px;
            font-weight: 600;
            opacity: 0.75;
        }
        
        /* All text base styling for consistency */
        text tspan {
            dominant-baseline: middle;
            text-anchor: inherit;
        }
        
        /* Line styling */
        line {
            stroke-opacity: 0.2;
        }
    `,
});
