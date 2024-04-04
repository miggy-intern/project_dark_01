export const ante = 13;
export const defaultTime = '3:00';
let small_blind = 1;
let big_blind = 2;
export const blindValues = [];

for (let i = 0; i < ante; i++) {
    blindValues.push(`${small_blind}/${big_blind}`);
    small_blind *= 2;
    big_blind *= 2;
}
export const levels = Array.from({ length: ante }, (_, i) => i + 1);