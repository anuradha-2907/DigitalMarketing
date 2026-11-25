/** Reset for native buttons (original `.btn`). */
export const btn = "border-none bg-transparent cursor-pointer";

/** Pill button (original `.btn-primary`), hover swaps to the indigo gradient. */
export const btnPrimary =
  "py-[.8rem] px-8 rounded-[50px] font-poppins font-bold hover:bg-gradient-indigo";

/** Gradient call-to-action (original `.btn-primary .btn-shadow .bg-gradient .text-white`). */
export const btnGradient = `${btnPrimary} shadow-soft bg-gradient text-offwhite`;

/** Small peach "Digital Experience" pill. */
export const pill = `inline-block ${btnPrimary} bg-gradient-peach text-red`;

/** Large section heading (original `.text-lg .text-dark`). */
export const heading = "text-heading text-dark";
