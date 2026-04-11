import { Theme } from "./_theme";

export default Theme({
    palette: {
        // GitHub-like dark card surface with subtle border contrast
        bg: ["rgba(13, 17, 23, 0.62)", "#30363d"],
        // High-contrast text tuned for dark profile README backgrounds
        text: ["#e6edf3", "#8b949e"],
        // LeetCode + GitHub-inspired accents (ring, easy, medium, hard)
        color: ["#ffa116", "#3fb950", "#d29922", "#f85149"],
    },
    css: `
        svg{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
        #L{fill:#c9d1d9}
        #dash{fill:#8b949e}
        #background{rx:8px}
        #total-solved-bg,#easy-solved-bg,#medium-solved-bg,#hard-solved-bg{opacity:.45}
        #ranking,#easy-solved-count,#medium-solved-count,#hard-solved-count{font-weight:700}
    `,
});
