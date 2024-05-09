import { writable } from "svelte/store";

export let duration = 0;

const formatter = new Intl.DateTimeFormat("en", {
    hour12: false,
    minute: "2-digit",
    second: "2-digit"
});

export const time = writable();
export const isRunning = writable(false);
export const isComplete = writable(false);

const createTimer = (count_down: number) => {
    let animationRef: any;
    let latestStartTime: any;
    let remainingTime = count_down * 1000;

    const animate = (timestamp: any) => {
        // is it the first iteration in this cycle?
        if (latestStartTime === undefined) {
            // make a note of the start time
            latestStartTime = timestamp + remainingTime;
        }

        // the time to display now
        const currentTime = latestStartTime - timestamp;
        if (currentTime <= 0) {
            cancelAnimationFrame(animationRef);
            time.set(formatter.format(0));
            isRunning.set(false);
            isComplete.set(true);
            return;
        }
        time.set(formatter.format(currentTime));

        // keep animating recursively
        animationRef = requestAnimationFrame(animate);
    };

    const api = {
        start: () => {
            isRunning.set(true);
            animationRef = requestAnimationFrame(animate);
        },

        pause: () => {
            cancelAnimationFrame(animationRef);
            if (latestStartTime !== undefined) {
                // prepare for the next cycle
                remainingTime = latestStartTime - performance.now();
                latestStartTime = undefined;
            }
            isRunning.set(false);
        },

        reset: Function.prototype
    };

    return api;
};

export const timer = createTimer;