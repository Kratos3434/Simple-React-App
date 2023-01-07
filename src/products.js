const Products = [
    /*
      {
        id: "P1",
        name: "Name 1",
        description: "Description 1...",
        price: 199,
        discontinued: false,
        categories: ["c1"]
      },
    */
    {
      id: "P1",
      name: "God of War Ragnarok",
      description: "Embark on an epic adventure as Kratos and Atreus as they prepare for ragnarok",
      price: 8999,
      discounted: false,
      categories: ["c2"],
      imageUrl: "https://infinitestart.com/wp-content/uploads/2021/09/E-37dPaVcBYyRWH.jpeg"
    },
    {
      id: "P2",
      name: "Minecraft",
      description: "Minecraft is about placing blocks and going on adventures",
      price: 3999,
      discounted: false,
      categories: ["c1", "c2", "c3", "c4"],
      imageUrl:
        "https://thegamerhq.com/wp-content/uploads/2020/12/Minecraft_Horizontal-Key-Art-1600x900-1536x864-1.jpg"
    },
    {
      id: "P3",
      name: "Mario Kart 8 Deluxe",
      description: "Hit the road with the definitive version of Mario Kart 8",
      price: 7999,
      discounted: false,
      categories: ["c3"],
      imageUrl:
        "http://cdn.wccftech.com/wp-content/uploads/2017/01/NintendoSwitch_MarioKart8Deluxe_artwork_illustration_01.jpg"
    },
    {
      id: "P4",
      name: "Horizon Forbidden West",
      description: "Join Aloy as she braves the Forbidden West",
      price: 8999,
      discounted: false,
      categories: ["c2"],
      imageUrl: "https://gameondaily.com/wp-content/uploads/2022/01/horizonforbiddenwest-min.jpg"
    },
    {
      id: "P5",
      name: "Call of Duty Modern Warfare 2",
      description: "The sequel to 2019's blockbuster Modern Warfare",
      price: 8999,
      discounted: false,
      categories: ["c1", "c2", "c4"],
      imageUrl: "https://i.ytimg.com/vi/8Z7RDfdulCY/maxresdefault.jpg"
    },
    {
      id: "P6",
      name: "Halo Infinite",
      description: "A first person shooter game",
      price: 7999,
      discounted: false,
      categories: ["c1"],
      imageUrl: "https://gamingbolt.com/wp-content/uploads/2020/07/halo-infinite.jpg"
    },
    {
      id: "P7",
      name: "Left 4 Dead",
      description: "Zombie first person shooter survival game",
      price: 1299,
      discounted: false,
      categories: ["c4"],
      imageUrl: "https://i.ytimg.com/vi/O-2NtfWWI1k/maxresdefault.jpg"
    },
    {
      id: "P8",
      name: "Left 4 Dead 2",
      description: "Sequel of Left 4 Dead",
      price: 1299,
      discounted: false,
      categories: ["c4"],
      imageUrl: "https://tse3.mm.bing.net/th?id=OIP.TkLhXl_yZckchJ8UqlyM2gHaEK&pid=Api&P=0"
    },
    {
      id: "P9",
      name: "NBA 2k22",
      description:
        "Play your favorite NBA players or create your own player and become a hall of fame",
      price: 6999,
      discounted: false,
      categories: ["c1", "c2", "c4"],
      imageUrl: "https://gamerbase.org/wp-content/uploads/2021/07/nba-22-2048x1152.jpg"
    },
    {
      id: "P10",
      name: "The Legend of Zelda: Breath of the Wild",
      description: "Step into the world of amazing adventures",
      price: 7999,
      discounted: false,
      categories: ["c3"],
      imageUrl: "https://wallpapercave.com/wp/wp2386759.jpg"
    },
    {
      id: "P11",
      name: "Super Mario Odyssey",
      description: "Join Mario on a massive, globe-trotting 3d adventure",
      price: 7999,
      discounted: false,
      categories: ["c3"],
      imageUrl:
        "https://downloadhdwallpapers.in/wp-content/uploads/2018/01/Super-Mario-Odyssey-Best-HD-Image.jpg"
    },
    {
      id: "P12",
      name: "Assassin's Creed Odyssey",
      description: "Action Adventure Assassin Game",
      price: 7999,
      discounted: false,
      categories: ["c1", "c2", "c3", "c4"],
      imageUrl:
        "https://www.obilisk.co/wp-content/uploads/2018/10/assassins-creed-odyssey-poster-wallpaper-2560x1440_79546-mm-90.jpg"
    },
    {
      id: "P13",
      name: "Stardew Valley",
      description: "An RPG farming adventure game",
      price: 1699,
      discounted: false,
      categories: ["c1", "c2", "c3", "c4"],
      imageUrl: "https://wallpapers-all.com/uploads/posts/2017-03/2_stardew_valley.jpg"
    },
    {
      id: "P14",
      name: "Marvel's Spider-Man",
      description: "Play Spider-Man as he fights against crime",
      price: 7999,
      discounted: false,
      categories: ["c2", "c4"],
      imageUrl:
        "https://i2.wp.com/www.thesoundarchitect.co.uk/wp-content/uploads/2018/09/SMCover.jpg?fit=1024%2C576&ssl=1"
    },
    {
      id: "P15",
      name: "The Last of Us Part 2",
      description: "Tense and desperate action-survival game",
      price: 1499,
      discounted: false,
      categories: ["c2"],
      imageUrl: "https://images6.alphacoders.com/788/thumb-1920-788051.jpg"
    },
    {
      id: "P16",
      name: "Microsoft - Flight Simulator",
      description: "A flight simulator game",
      price: 7999,
      discounted: false,
      categories: ["c1", "c4"],
      imageUrl:
        "https://sm.ign.com/t/ign_il/screenshot/default/microsoft-flight-simulator_b8ev.1200.jpg"
    },
    {
      id: "P17",
      name: "Far Cry 6",
      description: "An action adventure game",
      price: 7999,
      discounted: false,
      categories: ["c1", "c2", "c4"],
      imageUrl:
        "https://gameranx.com/wp-content/uploads/2020/07/tetra-preorder-standard-edition-epic-image-hero-carrousel-3840x2160-3840x2160-430977812.png.jpeg"
    },
    {
      id: "P18",
      name: "Red Dead Redemption 2",
      description: "Play in the wild west as Arthur with his gang",
      price: 7999,
      discounted: false,
      categories: ["c1", "c2", "c4"],
      imageUrl: "http://hdqwalls.com/wallpapers/red-dead-redemption-2-62.jpg"
    },
    {
      id: "P19",
      name: "Fire Emblem Warriors: Three Hopes",
      description: "Engage in massive battle across Fodlan",
      price: 7999,
      discounted: true,
      categories: ["c3"],
      imageUrl: ""
    },
    {
      id: "P20",
      name: "Super Smash Bros. Ultimate",
      description: "Gaming icons clash in the ultimate brawl",
      price: 7999,
      discounted: true,
      categories: ["c3"],
      imageUrl: ""
    }
  ];

  export default Products;