const SpotifyIcon = props => {
  const { spotifyLogoStyle } = props;

  return (
    <svg
      width="91"
      height="96"
      viewBox="0 0 91 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={spotifyLogoStyle}
    >
      <path
        d="M45.5 0C20.3833 0 0 21.5032 0 48C0 74.4968 20.3833 96 45.5 96C70.6167 96 91 74.4968 91 48C91 21.5032 70.6167 0 45.5 0ZM63.9752 70.6258C63.2046 70.6258 62.7276 70.3742 62.0121 69.929C50.5637 62.6516 37.244 62.3419 24.0893 65.1871C23.3738 65.3806 22.4381 65.6903 21.906 65.6903C20.1264 65.6903 19.0073 64.2 19.0073 62.6323C19.0073 60.6387 20.1264 59.6903 21.5024 59.3806C36.5284 55.8774 51.8847 56.1871 64.9843 64.4516C66.1034 65.2065 66.7639 65.8839 66.7639 67.6452C66.7639 69.4064 65.4613 70.6258 63.9752 70.6258ZM68.9105 57.929C67.9565 57.929 67.3143 57.4839 66.6538 57.1161C55.1871 49.9548 38.0879 47.071 22.8784 51.4258C21.9978 51.6774 21.5208 51.929 20.6952 51.929C18.7321 51.929 17.1359 50.2452 17.1359 48.1742C17.1359 46.1032 18.0899 44.729 19.9796 44.1677C25.08 42.6581 30.2905 41.5355 37.9228 41.5355C49.8298 41.5355 61.3333 44.6516 70.3966 50.3419C71.8827 51.271 72.4698 52.471 72.4698 54.1548C72.4514 56.2452 70.9103 57.929 68.9105 57.929ZM74.598 43.1806C73.644 43.1806 73.0569 42.929 72.2313 42.4258C59.1684 34.2 35.8129 32.2258 20.6952 36.6774C20.0347 36.871 19.2091 37.1806 18.3284 37.1806C15.9067 37.1806 14.0536 35.1871 14.0536 32.6129C14.0536 29.9806 15.5948 28.4903 17.246 27.9871C23.704 25.9935 30.9327 25.0452 38.8034 25.0452C52.1966 25.0452 66.2319 27.9871 76.4877 34.2968C77.9187 35.1677 78.8544 36.3677 78.8544 38.671C78.8544 41.3032 76.8363 43.1806 74.598 43.1806Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="45.5"
          y1="0"
          x2="45.5"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#09DCB2" />
          <stop offset="1" stop-color="#77E073" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SpotifyIcon;
