import { selectors } from "../elements";
import { Extension } from "../types";

const keyframe = `
@keyframes fade_in{
    from{opacity:0;transform:translateY(10px)}
    to{opacity:1;transform:translateY(0)}
}
@keyframes slide_left{
    from{opacity:0;transform:translateX(-20px)}
    to{opacity:1;transform:translateX(0)}
}
@keyframes scale_in{
    from{opacity:0;transform:scale(0.95)}
    to{opacity:1;transform:scale(1)}
}
@keyframes fill_animation{
    from{stroke-dasharray:1000;stroke-dashoffset:1000}
    to{stroke-dasharray:1000;stroke-dashoffset:0}
}
`;

const order: (typeof selectors)[number][] = [
    "#icon",
    "#username",
    "#ranking",
    "#total-solved-bg",
    "#total-solved-ring",
    "#total-solved-text",
    "#easy-solved-type",
    "#easy-solved-count",
    "#easy-solved-bg",
    "#easy-solved-progress",
    "#medium-solved-type",
    "#medium-solved-count",
    "#medium-solved-bg",
    "#medium-solved-progress",
    "#hard-solved-type",
    "#hard-solved-count",
    "#hard-solved-bg",
    "#hard-solved-progress",
];

export function AnimationExtension(): Extension {
    return async function Animation(generator, data, body, styles) {
        if (generator.config.animation === false) {
            return;
        }

        const speed = 1;

        let css = keyframe;
        
        // Main elements fade in
        for (let i = 0; i < 3; i++) {
            css += `${order[i]}{animation:fade_in ${0.5 / speed}s cubic-bezier(0.34, 1.56, 0.64, 1) ${(
                0.08 * i
            ).toFixed(2)}s 1 forwards;opacity:0}`;
        }
        
        // Stats section slides in
        for (let i = 3; i < order.length; i++) {
            const group = Math.floor((i - 3) / 4);
            css += `${order[i]}{animation:slide_left ${0.6 / speed}s ease-out ${(
                0.15 + 0.1 * group
            ).toFixed(2)}s 1 forwards;opacity:0}`;
        }

        const [total, solved] = (["easy", "medium", "hard"] as const).reduce(
            (acc, level) => [
                acc[0] + data.problem[level].total,
                acc[1] + data.problem[level].solved,
            ],
            [0, 0],
        );

        css += circle("#total-solved-ring", 80 * Math.PI * (solved / total), 0.5);

        styles.push(css);
    };
}

function circle(selector: string, len = 0, delay = 0) {
    const R = Math.floor(Math.random() * 1000);
    const animation = `@keyframes circle_${R}{
        0%{opacity:0;stroke-dasharray:0 1000;transform:rotate(-90deg)}
        50%{opacity:1}
        100%{opacity:1;stroke-dasharray:${len} 10000;transform:rotate(270deg)}
    }`;
    const style = `${selector}{animation:circle_${R} 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s 1 forwards}`;
    return animation + style;
}

