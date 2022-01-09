const allBlogs = [
    {
        author: "Soumya Banerjee",
        title: "Arcane is great TV even if you don’t care about League of Legends",
        imgURL: "https://cdn.vox-cdn.com/thumbor/1XvpNKTOyLNls5IrCGMEONkNbjw=/0x0:2048x870/1075x1075/filters:focal(794x130:1120x456):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70194602/Vi_fight.0.jpeg",
        desc: "Ahead of Arcane’s premiere, our premiere review noted that it is, essentially, extremely good YA fiction. This is the perfect way to approach the show. Like so much of YA fiction, Arcane is a story about very hot people wrecking their relationships and their own lives in ways that feel hopelessly inevitable. What makes it so compelling over the course of its now complete first season is that its characters and their passions — for each other, for fulfillment, for revenge — are what everything else stems from. It’s not a show that’s particularly concerned with world-building by way of exposition, the way so much fantasy is. Rather, it shows characters building the world — and breaking it.",
        category: "Hollywood",
        time: " /November 26 2021",
        tags: ["Arcane", "League of Legends"],
        readtime: "2 mins read"
    },
    {
        author: "Indian Express",
        imgURL: "https://images.indianexpress.com/2021/12/spider-man-no-way-home-1200-1.jpg",
        title: "Spider-Man No Way Home excitement crashes theatre websites, fans unable to book tickets",
        desc: "The fan excitement over the upcoming MCU movie Spider-Man No Way Home is huge. And that is not surprising, considering Sony and Marvel are selling the movie as a sort of mini-Avengers. Apart from Tom Holland’s Spider-Man and Doctor Strange, the film also brings back several supervillains from previous Spider-Man franchises led by Tobey Maguire and Andrew Garfield. Electro (Jamie Foxx), Doctor Octopus (Alfred Molina), Green Goblin (Willem Dafoe), Sandman (Thomas Haden Church), and Lizard (Rhys Ifans) are confirmed to return. After the film broke several pre-release ticket sales records in North America, there are reports claiming that many are not able to book tickets to the movie as the theatre sites have crashed.",
        category: "Hollywood",
        time: " /December 03 2021",
        tags: ["NWH", "Spiderman", "Marvel"],
        readtime: "10 mins read"

    },
    {
        author: "Marvel Studio",
        imgURL: "https://i.ytimg.com/vi/1WfzGDKvwrw/maxresdefault.jpg",
        title: "Everything you want to know about Eternals",
        desc: "Who are Marvel’s Eternals? What are their powers? What is the role of the Eternals like Ikaris, Sersi, Makkari and Ajak in human evolution in the Marvel universe? What are the origins of the Eternals? How do the Eternals help keep the cosmic balance like Galactus? Why did the Celestials create the Deviant race in the first place? Could we see The Horde fight The Celestials soon in the MCU? MasterTainment explains the origins and cosmic role of Marvel’s Eternals!",
        category: "Hollywood",
        time: " /November 11 2021",
        tags: ["Marvel", "Avengers"],
        readtime: "5 mins read"
    },
    {
        author: "Money Control",
        imgURL: "https://images.moneycontrol.com/static-mcnews/2020/12/Digital-Payment-770x433.jpg?impolicy=website&width=770&height=431",
        title: "Digital payments script robust growth story in India, cards in race",
        desc: "The Indian payments industry sees a sea change with the share of digital payments gaining a formidable size of the pie in the past few years. Close to 1 billion cards and more than 2 billion prepaid payment instruments (PPI) like internet wallets, mobile accounts, mobile wallets and digital payment modes have catapulted India into one of the fastest growing and largest markets in the world for digital payments. An exponential spurt in online shopping and the pandemic gave virtual transactions a boost.",
        category: "Technology",
        time: " /December 03 2021",
        tags: ["Stock Market", "India"],
        readtime: "5 mins read"
    },
    {
        author: "Hojo Kolkata",
        imgURL: "https://www.hojokolkata.com/wp-content/uploads/2021/02/buffet-web.jpg",
        title: "New Town Kolkata’s most popular Weekday Buffet is Back !",
        desc: "Now, eat truly like a King with our Weekday Buffet at Nest Restaurant, Kolkata’s favourite All-day Dining Restaurant with emphasis on Bengali Cuisine. When : All Weekdays, from 12.30 pm – 10.30 pm. Where : Nest, Serving Lunch & Dinner",
        category: "Food",
        time: " /July 01, 2019",
        tags: ["Food", "India"],
        readtime: "2 mins read"
    },
    {
        author: "LBB",
        imgURL: "https://imgmediagumlet.lbb.in/media/2018/11/5bfbb32435d660102e68e887_1543222052541.jpg?fm=webp&w=750&h=500&dpr=1",
        title: "Treks, Camps & Trails: Izifiso Will Take You To Quaint & Virgin Places To Explore",
        desc: "If the usual touristy spots don't charm you, skip the trappings of shady money-grabbing travel operators and try experiential travel to quaint places with Izifiso. They refuse to be clubbed as a regular travel company. As interesting as its name (Izifiso in Zulu means the spirit of life that a traveller chases), so are their curated camps, treks and trails in virgin and unexplored places in West Bengal and beyond. They have on offer beach destinations (Mousuni Island), lake stays (Doladanga), Himalayan places (Gurdum), musical journeys (Joydev Kenduli), wildlife camps (Bangripossi) and others. Keeping a traveller's zest for exploration at the heart of things, Izifiso's camps are manned by trained locals and are thus perfect for a community and cultural exchange. If you're looking for luxury, then this is definitely not the scene because their camps of mud huts, tents, caravans and homestays are all about forsaking the concrete walls of the city. They've also created a new trek route from Gurdung to Gorkhay for hikers, and several bike and bicycle trails around the city.",
        category: "Travel",
        time: " /February 18, 2021",
        tags: ["Travel", "India"],
        readtime: "6 mins read"
    },
    {
        author: "E Times",
        imgURL: "https://images.hindustantimes.com/img/2021/12/03/550x309/katrina-vicky_1638517649302_1638517657819.jpg",
        title: "Katrina Kaif-Vicky Kaushal wedding: TOP Bollywood celebs who are expected to attend their big day",
        desc: "Katrina Kaif and Vicky Kaushal are all set to tie the knot this month. ETimes was the first one to inform you about their wedding plans. The latest reports suggest that the wedding preparations are in full swing at the Six Senses Fort Barwara of Sawai Madhopur in Rajasthan. As the bride and groom gear up for the big day, here's taking a look at their guest list...",
        category: "Bollywood",
        time: " /November 16, 2021",
        tags: ["Bollywood", "Vicky Kaushal", "Katrina Kaif"],
        readtime: "4 mins read"
    },
    {
        author: "Hindustan Times",
        imgURL: "https://images.hindustantimes.com/img/2021/12/02/550x309/ahan_shetty_1638457855129_1638464851160.jpg",
        title: "Ahan Shetty on his equation with other star-kids: 'Known Aryan Khan since I was a kid'",
        desc: "Ahan Shetty has said that he did not know many star kids while growing up, however, he has known Shah Rukh Khan’s elder son Aryan Khan since they were kids. In his new interview, Ahan has also said that he started making friends in the industry only recently. Ahan is Suniel Shetty’s son and is gearing up for the release of his first film, Tadap.",
        category: "Bollywood",
        time: " /November 16, 2021",
        tags: ["Bollywood", "Star Kids"],
        readtime: "3 mins read"
    },
    {
        author: "The Indian Express",
        imgURL: "https://images.indianexpress.com/2021/12/Mumbai.jpg",
        title: "After flak, Maharashtra revises air travel rules in wake of Omicron",
        desc: "Following criticism, Maharashtra has revised the travel restrictions it had imposed two days ago in the wake of the detection of the Omicron-19 variant. Now, international travellers coming from or having travel history in the last 15 days from the Omicron-specific three ‘high risk- countries’ will have to undergo a mandatory seven-day institutional quarantine. Also, fully vaccinated domestic travellers can fly without RT-PCR negative report.",
        category: "Travel",
        time: " /November 14, 2021",
        tags: ["Travel", "Omicron", "Covid"],
        readtime: "4 mins read"
    },
    {
        author: "Food 52",
        imgURL: "https://images.food52.com/ON9RjEQbxp1vtigcgCv4c-zuoag=/1348x898/filters:format(webp)/735b84dc-2201-4f58-82ff-304960cbc243--2021_f52_content_nov_cookies-eds-banner_LP.jpg",
        title: "13 Holiday Classics Turned Into Cookies",
        desc: "If you look forward to winter holiday desserts all year long, you’re not alone. I have sudden cravings for a cold glass of coquito in April, and sometimes think about a croquembouche festooned with drips of caramel in July. Now that it’s finally December, it’s time to dig into all those great seasonal goodies. But this year, we have a bit of a twist: Cookies Meet Classics, a baker’s dozen of your favorite holiday sweets as cookies.",
        category: "Food",
        time: " /November 17, 2021",
        tags: ["Food", "Recepies"],
        readtime: "3 mins read"
    },
    {
        author: "Tech Advisor",
        imgURL: "https://www.techadvisor.com/cmsdata/features/3806854/xiaomi_m12_release_date_rumours_mi11main2_thumb800.jpg",
        title: "Xiaomi 12: Everything you need to know",
        desc: "Xiaomi phones may not launch in the US, but the company remains one of the biggest players in the global smartphone market - it's even overtaken Apple in worldwide phone shipments - and the Xiaomi 12 is expected to be its next major flagship phone. Note that it's the Xiaomi 12, not the Mi 12 - we'll explain why - but this is still the successor to last year's Mi 11. Going by last year's effort this could well be one of the year's best phones, and that's not even mentioning other phones in the series like the affordable Lite and the OTT Ultra model - apparently set to be joined this time by a petite Xiaomi 12X.",
        category: "Technology",
        time: " /November 14, 2021",
        tags: ["Technology", "Mi", "Phone"],
        readtime: "4 mins read"
    }
]

module.exports = allBlogs;