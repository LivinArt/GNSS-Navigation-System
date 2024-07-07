const MENUS = [
  {
    label: "GNNS-SDR",
    onClick: () => {
      window.open("http://127.0.0.1/script/api/1.php", "_self");
    },
    subMenus: [],
  },
  {
    label: "NavIC",
    onClick: () => {
      window.open("http://127.0.0.1/script/api/2.php", "_self");
    },
    subMenus: [],
  },
];

export { MENUS };
