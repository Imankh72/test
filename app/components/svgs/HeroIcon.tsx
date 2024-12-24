const HeroIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="39"
      height="36"
      fill="none"
      viewBox="0 0 39 36"
    >
      <path
        fill="url(#pattern0_1_477)"
        d="M0 0h39v36H0z"
        style={{ mixBlendMode: "plus-lighter" }}
      ></path>
      <defs>
        <pattern
          id="pattern0_1_477"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref="#image0_1_477"
            transform="matrix(.0067 0 0 .00715 0 .027)"
          ></use>
        </pattern>
        <image
          xlinkHref="data:image/png;base64,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"
          id="image0_1_477"
          width="148"
          height="139"
        ></image>
      </defs>
    </svg>
  );
};
export default HeroIcon;