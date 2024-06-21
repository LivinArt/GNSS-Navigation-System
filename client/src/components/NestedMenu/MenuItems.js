const MENUS = [
    {
      label: "GNNS RX",
      onClick: () => console.log("GNNS RX"),
      subMenus: [
        {
          label: "Quick Start Guide",
          onClick: () => {
            window.open("https://gnss-sdr.org/quick-start-guide", "_blank");
          },
        },
        {
          label: "Requirements",
          onClick: () => {
            window.open("https://gnss-sdr.org/requirements", "_blank");
          },
        },
        {
          label: "Build and Install",
          onClick: () => {
            window.open("https://gnss-sdr.org/build-and-install", "_blank");
          },
        },
        {
          label: "Position Fix",
          onClick: () => {
            window.open("https://gnss-sdr.org/my-first-fix", "_blank");
          },
        },
        {
          label: "Configuration",
          onClick: () => {
            window.open("https://gnss-sdr.org/conf", "_blank");
          },
        },
      ],
    },
    
    {
      label: "KARKEN SYS",
      onClick: () => console.log("KARKEN SYS"),
      subMenus: [
        {
          label: "OP Charac",
          onClick: () => {
            window.open("https://github.com/krakenrf/krakensdr_docs/wiki", "_blank");
          },
        },
        {
          label: "Connectivity",
          onClick: () => {
            window.open("https://github.com/krakenrf/krakensdr_docs/wiki/02.-Direction-Finding-Quickstart-Guide", "_blank");
          },
        },
        {
          label: "Antenna Array",
          onClick: () => {
            window.open("https://github.com/krakenrf/krakensdr_docs/wiki/04.-Antenna-Array-Setup", "_blank");
          },
        },
        {
          label: "Web Interface",
          onClick: () => {
            window.open("https://github.com/krakenrf/krakensdr_docs/wiki/05.-KrakenSDR-Web-Interface-Controls", "_blank");
          },
        },
        {
          label: "Raspberry Pi",
          onClick: () => {
            window.open("https://www.raspberrypi.com/documentation/computers/getting-started.html", "_blank");
          },
        },
      ],
    },
    {
      label: "GPS TX",
      onClick: () => console.log("GPS TX"),
      subMenus: [
        {
          label: "Installation Guide",
          onClick: () => console.log("Installation Guide"),
        },
        {
          label: "Setup",
          onClick: () => console.log("Setup"),
        },
        {
          label: "Procedure",
          onClick: () => console.log("Procedure"),
        },
      ],
    },
    {
      label: "USRP B 205 Mini",
      onClick: () => {
        window.open("https://kb.ettus.com/Building_and_Installing_the_USRP_Open-Source_Toolchain_(UHD_and_GNU_Radio)_on_Linux", "_blank");
      },
      subMenus: []
    },
    {
      label: "Hack RF",
      onClick: () => {
        window.open("https://hackrf.readthedocs.io/en/latest/installing_hackrf_software.html", "_blank");
      },
      subMenus: []
    },
  ];
  
  export {
    MENUS
  };
  