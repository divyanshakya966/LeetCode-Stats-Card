import { Theme } from "./_theme";

export default Theme({
    palette: {
        // Fully transparent background that works with both light and dark GitHub mode
        bg: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0)"],
        // High contrast text colors that work in both light and dark modes
        text: ["#333333", "#b8b8b8"],
        // Color palette for difficulty levels: Easy, Medium, Hard, and accent
        color: ["#16a34a", "#eab308", "#dc2626", "#0ea5e9"],
    },
    css: `
        /* Rounded corners for improved modern look */
        rect{rx:8;ry:8}
        
        /* Better text rendering */
        text{font-family:'Segoe UI',sans-serif}
        
        /* Subtle shadows for depth */
        .stats-item{filter:drop-shadow(0 1px 3px rgba(0,0,0,0.1))}
        
        /* Enhanced styling for progress bars */
        .progress-bg{opacity:0.3}
        .progress-bar{opacity:1;filter:drop-shadow(0 1px 2px rgba(0,0,0,0.2))}
        
        /* Label styling */
        .difficulty-label{font-size:12px;font-weight:600}
        .solve-count{font-size:14px;font-weight:700}
        
        /* Hover effects for interactive feel */
        rect:hover{opacity:0.9}
    `,
});
