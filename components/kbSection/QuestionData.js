// questions.js
const questionsData = {
  "QLED MINI" : [
      {
        text: "What is QLED Mini?",
        popularity: 5,
        views: 100,
        des: "Skyworth QLED Mini is an advanced version of QLED technology that concentrate on improving contrast and black levels by harnessing precise backlighting control.",
      },
      {
        text: "What advanced features are available in QLED Mini Google TVs?",
        popularity: 4,
        views: 90,
        des: "Dynamic Local Dimming: Local Diming is a way for LED TVs to improve the contrast ratio in dark scenes by dimming backlight zones, making black appear deeper than they normally are without the feature. Dynamic dimming is paired with a brightness range from 20-2000 nits. Variable Refresh Rate (VRR): Synchronizes the TV's refresh rate with the frame rate of the content, reducing screen tearing for smoother gameplay. Auto Low Latency Mode (ALLM): Automatically switches to a low-latency setting for gaming consoles, reducing input lag and enhancing responsiveness.",
      },
      {
        text: "Are Mini QLED TVs suitable for gaming?",
        popularity: 4,
        views: 90,
        des: "Yes, Mini QLED TVs are excellent for gaming due to their low input lag, support for features like ALLM and VRR, and enhanced visual quality, making them ideal for both casual and competitive gamers.",
      },
      // Add more Television questions...
      {
        text: "What is the difference between Dolby Audio and Dolby Vision Atmos?",
        popularity: 4,
        views: 90,
        des: "Dolby Audio is a technology that enhances sound quality for a more immersive audio experience, optimizing audio for clarity and impact. Dolby Vision Atmos combines advanced HDR imaging with immersive audio, allowing sound to move freely around you in a three-dimensional space. This technology creates a more realistic sound environment, complementing the stunning visuals provided by compatible content",
      },
      {
        text: "What is Google TV platform, and what are its benefits?",
        popularity: 4,
        views: 90,
        des: "Google TV platform offers a user-friendly interface, personalized content recommendations, and access to thousands of apps and streaming services just for you.",
      },
      //next
      {
        text: "Can I mount the TV on the wall?",
        popularity: 3,
        views: 120,
        des: "Yes, all our TVs are wall-mount compatible. Be sure to check the specifications for recommended mount types and sizes."
      },
      {
        text: "Do your TVs support smart features?",
        popularity: 5,
        views: 150,
        des: "Yes! Our smart TVs come with the Google TV platform, allowing you to stream shows and movies, browse apps, and connect to smart home devices."
      },
      {
        text: "Can I connect my TV to Wi-Fi?",
        popularity: 4,
        views: 130,
        des: "Yes, all our Google TVs have built-in Wi-Fi, allowing easy connection to your home network for streaming and online features."
      },
      {
        text: "How do I set up my new TV?",
        popularity: 3,
        views: 100,
        des: "Setting up your TV is simple! Just connect to a power source, turn it on via remote, and follow the on-screen setup instructions."
      },
      {
        text: "Where can I find support if I have issues with my TV?",
        popularity: 4,
        views: 110,
        des: "For support, contact our customer service at 042 111 635 635 or toll-free at 0800 111 635, or email CS@skyworthpakistan.com."
      },
      {
        text: "What special features do Skyworth TVs include?",
        popularity: 5,
        views: 200,
        des: "Our TVs come with Dolby Vision & Atmos, Game Mode, Far Field Voice Control, and Filmmaker Mode for enhanced visuals, gaming, and cinematic experiences."
      },
      {
        text: "What is 4K?",
        popularity: 5,
        views: 160,
        des: "SKYWORTH QLED-Mini TV offers 4K Ultra High Definition with a resolution of 3840 x 2160 pixels, delivering an elevated viewing experience."
      },
      {
        text: "What are the benefits of 144Hz?",
        popularity: 4,
        views: 140,
        des: "SKYWORTH 144Hz panel provides fluid gaming and streaming, delivering smooth, precise frame transitions."
      },
      {
        text: "Can I connect my Gaming Console?",
        popularity: 5,
        views: 180,
        des: "SKYWORTH QLED-Mini TV includes HDMI2.1 and AMD FreeSYNC support for a top-tier gaming experience with high-speed connectivity."
      },
      {
        text: "What is AMD FreeSYNC?",
        popularity: 4,
        views: 130,
        des: "Certified by AMD FreeSync, SKYWORTH QLED-Mini TVs offer tear-free, flicker-free gaming and smooth video playback over HDMI and DisplayPort."
      },
      {
        text: "What is HDR10+?",
        popularity: 4,
        views: 125,
        des: "HDR10+ is an advanced HDR video technology that uses dynamic metadata to adjust each frame to the display’s capabilities, optimizing brightness and quality based on the content creator's intent."
      },
      {
        text: "What connectivity options are available?",
        popularity: 5,
        views: 140,
        des: "Our TVs offer USB 3.0 ports for high-speed data transfer, Bluetooth 5.2 for stable wireless connections, and WIFI 802.11a/b/g/n/ac for fast streaming."
      }
              

    ],
    QLED: [
      {
        text: "What is QLED technology?",
        popularity: 5,
        views: 160,
        des: "QLED (Quantum Dot LED) is a display technology that uses quantum dots to enhance color and brightness, providing improved color accuracy and brightness compared to standard LED TVs."
      },
      {
        text: "What advanced features are available in QLED TVs?",
        popularity: 4,
        views: 145,
        des: "Our QLED TVs offer Dynamic Local Dimming for improved contrast in dark scenes, Variable Refresh Rate (VRR) to sync refresh rate with content, and Auto Low Latency Mode (ALLM) for reduced input lag when gaming."
      },
      {
        text: "How long do QLED TVs typically last?",
        popularity: 3,
        views: 130,
        des: "QLED TVs generally have a long lifespan compared to other TVs and are more resistant to burn-in. Lifespan also depends on usage, settings, and environment."
      },
      {
        text: "What is the difference between Dolby Audio and Dolby Vision Atmos?",
        popularity: 4,
        views: 150,
        des: "Dolby Audio enhances sound quality for clarity, while Dolby Vision Atmos combines HDR imaging with immersive audio, creating a realistic three-dimensional sound environment."
      },
      {
        text: "What is the Google TV platform, and what are its benefits?",
        popularity: 4,
        views: 90,
        des: "Google TV platform offers a user-friendly interface, personalized content recommendations, and access to thousands of apps and streaming services just for you."
      },
      {
        text: "Can I mount the TV on the wall?",
        popularity: 3,
        views: 85,
        des: "Yes, all our TVs are wall-mount compatible. Check specifications for recommended mount types and sizes."
      },
      {
        text: "Do your TVs support smart features?",
        popularity: 5,
        views: 110,
        des: "Yes! Our smart TVs come with the Google TV platform, allowing you to stream your favorite shows, browse apps, and connect to smart home devices."
      },
      {
        text: "Can I connect my TV to Wi-Fi?",
        popularity: 4,
        views: 95,
        des: "Yes, all our smart TVs come with built-in Wi-Fi, allowing you to connect to your home network for streaming and online features."
      },
      {
        text: "How do I set up my new TV?",
        popularity: 3,
        views: 75,
        des: "Setting up your TV is simple! Just connect it to a power source, turn it on via remote, and follow the on-screen instructions."
      },
      {
        text: "Where can I find support if I have issues with my TV?",
        popularity: 5,
        views: 120,
        des: "For support inquiries, contact customer service. Call 042 111 635 635, toll-free 0800 111 635, or email at CS@skyworthpakistan.com."
      },
      {
        text: "What special features do Skyworth TVs include?",
        popularity: 5,
        views: 130,
        des: "Skyworth TVs come with Dolby Vision & Atmos for stunning visuals and sound, Game Mode for reduced input lag, Far Field Voice Control, and Filmmaker Mode for a true cinematic experience."
      }
      
    ],
    UHD: [
      {
        text: "What is UHD (Ultra High Definition)?",
        popularity: 5,
        views: 170,
        des: "UHD refers to a resolution of 3840 x 2160 pixels, which allows for sharper, more detailed images, especially on larger screens."
      },
      {
        text: "Do I need UHD content to benefit from a UHD TV?",
        popularity: 4,
        views: 150,
        des: "While UHD TVs can display lower-resolution content, accessing UHD content is necessary to fully utilize the TV's capabilities. Many streaming services and gaming consoles now offer UHD options."
      },
      {
        text: "What are the benefits of UHD?",
        popularity: 4,
        views: 140,
        des: "UHD provides more detail and clarity, particularly on larger screens, making images appear more lifelike. The higher pixel density also enhances the viewing experience for HDR content with better color and contrast."
      },
      {
        text: "Can I upscale HD content to UHD?",
        popularity: 4,
        views: 130,
        des: "Yes, many UHD TVs have upscaling technology that improves the quality of HD content, making it appear sharper and more vibrant on a UHD screen. However, the results can vary based on the TV's processing capabilities."
      },
      {
        text: "What is the Google TV platform, and what are its benefits?",
        popularity: 5,
        views: 120,
        des: "Google TV platform offers a user-friendly interface, personalized content recommendations, and access to thousands of apps and streaming services."
      },
      {
        text: "Can I mount the TV on the wall?",
        popularity: 3,
        views: 110,
        des: "Yes, all our TVs are wall-mount compatible. Check the specifications for recommended mount types and sizes."
      },
      {
        text: "Do your TVs support smart features?",
        popularity: 5,
        views: 115,
        des: "Yes! Our smart TVs come with the Google TV platform, allowing you to stream your favorite shows, browse apps, and connect to smart home devices."
      },
      {
        text: "Can I connect my TV to Wi-Fi?",
        popularity: 4,
        views: 105,
        des: "Yes, all our smart TVs come with built-in Wi-Fi, allowing you to connect to your home network for streaming and online features."
      },
      {
        text: "How do I set up my new TV?",
        popularity: 3,
        views: 90,
        des: "Setting up your TV is simple! Just connect it to a power source, turn it on via remote, and follow the on-screen instructions."
      },
      {
        text: "Where can I find support if I have issues with my TV?",
        popularity: 5,
        views: 125,
        des: "For support inquiries, contact customer service. Call 042 111 635 635, toll-free 0800 111 635, or email at CS@skyworthpakistan.com."
      },
      {
        text: "What is 4K?",
        popularity: 5,
        views: 160,
        des: "SKYWORTH QLED-Mini TV comes with 4K Ultra High Definition, offering a resolution of 3840 x 2160 pixels for an elevated viewing experience."
      },
      {
        text: "What is the benefit of 60Hz?",
        popularity: 3,
        views: 85,
        des: "This refresh rate is well-suited for standard HD content and streaming, providing a balance between quality and affordability."
      },
      {
        text: "What is HDR10?",
        popularity: 4,
        views: 115,
        des: "HDR10 improves the visual experience by offering more vivid colors, greater contrast, and lifelike visuals, making movies, shows, and games more immersive."
      },
      {
        text: "What is Dolby Audio?",
        popularity: 4,
        views: 100,
        des: "Dolby Audio enhances sound quality for a more immersive experience, optimizing audio for clarity and impact."
      }
      
    ],
    "FHD / HD": [
      {
        text: "What is HD and FHD?",
        popularity: 5,
        views: 160,
        des: "HD (High Definition) typically refers to a resolution of 1280 x 720 pixels. FHD (Full High Definition) has a resolution of 1920 x 1080 pixels, providing a clearer and more detailed picture."
      },
      {
        text: "Does this resolution come with Dolby Audio and 60Hz?",
        popularity: 4,
        views: 150,
        des: "Yes, our HD and FHD TVs come equipped with Dolby Audio for enhanced sound quality and support a refresh rate of 60Hz, ensuring smooth and clear playback for various content types."
      },
      {
        text: "Can I play games in HD or FHD resolution?",
        popularity: 4,
        views: 145,
        des: "Yes, many gaming consoles and PC games support HD and FHD resolutions, providing a great gaming experience. Make sure your TV is set to the appropriate resolution for the best performance."
      },
      {
        text: "What is the Google TV platform, and what are its benefits?",
        popularity: 5,
        views: 120,
        des: "Google TV platform offers a user-friendly interface, personalized content recommendations, and access to thousands of apps and streaming services."
      },
      {
        text: "Can I mount the TV on the wall?",
        popularity: 3,
        views: 110,
        des: "Yes, all our TVs are wall-mount compatible. Be sure to check the specifications for recommended mount types and sizes."
      },
      {
        text: "Do your TVs support smart features?",
        popularity: 5,
        views: 115,
        des: "Yes! Our smart TVs come with the Google TV platform, allowing you to stream your favorite shows and movies, browse apps, and connect to your smart home devices."
      },
      {
        text: "Can I connect my TV to Wi-Fi?",
        popularity: 4,
        views: 105,
        des: "Yes, all our smart TVs come with built-in Wi-Fi capabilities, allowing you to connect to your home network for streaming and online features."
      },
      {
        text: "How do I set up my new TV?",
        popularity: 3,
        views: 90,
        des: "Setting up your TV is simple! Just connect it to a power source, turn it on via remote, and follow the on-screen instructions to complete the setup."
      },
      {
        text: "Where can I find support if I have issues with my TV?",
        popularity: 5,
        views: 125,
        des: "For support inquiries, contact customer service. Call 042 111 635 635, toll-free 0800 111 635, or email at CS@skyworthpakistan.com."
      }
      
    ],
  };
  
  export default questionsData;
  