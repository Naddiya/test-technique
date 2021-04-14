'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const animes = [
      {
        "title": {
          "romaji": "Koukaku Kidoutai",
          "english": "Ghost in the Shell"
        },
        "coverImage": {
          "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx43-gHMR72EkEP4o.png"
        },
        "description": "In the year 2029, the barriers of our world have been broken down by the net and by cybernetics, but this brings new vulnerability to humans in the form of brain-hacking. When a highly-wanted hacker known as the \"Puppet Master\" begins involving them in politics, Section 9, a group of cybernetically enhanced cops, are called in to investigate and stop the Puppet Master. The pursuit will call into question what makes a human and what is the Puppet Master in a world where the distinction between human and machine is increasingly blurry.<br>\n<br>\n(Source: Anime News Network)"
      },
      {
        "title": {
          "romaji": "Rurouni Kenshin: Meiji Kenkaku Romantan - Ishinshishi e no Requiem",
          "english": "Samurai X: The Motion Picture"
        },
        "coverImage": {
          "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx46-Steq4sQpA6fq.png"
        },
        "description": "The war against the Tokugawa Shogunate ended years ago. But there are some who are not happy with the outcome. Shigure Takimi watched his friends and family get slashed down in the name of freedom and prosperity. Now he and a band of desperate rebels have sworn to settle one final score. Only one man stands in their way: Kenshin Himura. But when Shigure discovers Kenshin's true identity as the Hitokiri Battousai, his fight becomes a personal vendetta.\n<br><br>\n(Source: Anime News Network)"
      },
      {
        "title": {
          "romaji": "Akira",
          "english": "Akira"
        },
        "coverImage": {
          "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx47-Sjkc8RDBjqwT.jpg"
        },
        "description": "It's the year 2019, thirty-one years have passed since the start of World War III. A top-secret child with amazing powers of the mind breaks free from custody and accidentally gets a motorcycle gang involved in the project. This incident triggers psychic powers within one of the gang members, Tetsuo, and he is taken by the army to be experimented on. His mind has been altered and is now on the path of war, seeking revenge on the society that once called him weak. <br><br>\n(Source: FUNimation) "
      },
      {
        "title": {
          "romaji": "Appleseed (Movie)",
          "english": null
        },
        "coverImage": {
          "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx54-EIMIUlH3FuJb.jpg"
        },
        "description": "Growing out of the chaos of a global war, the city of Utopia is populated by humans and bioroids (artificial humans). On the surface, everything is harmonious, but tensions lurk. Into this seemingly perfect society comes a survivor of the wars, Deunan Knute, who carries a legacy that will turn out to be of critical importance to the future of humanity. <br><br>\n(Source: Anime News Network)"
      },
      {
        "title": {
          "romaji": "X/1999",
          "english": null
        },
        "coverImage": {
          "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/155.jpg"
        },
        "description": "At the millennial edge, the concluding battle for humanity's future is staged. Kamui Shirou's destiny has been decided as he returns to Tokyo to face his ultimate challenge. The Dragon of Heaven, defenders of the Earth, stand ready to protect the world from the Dragon of Earth, the seven angels of legend, who embrace the devastation of the planet to bring about its purification. Now Kamui must decide which side to fight for although he finds the idea utterly unappealing. It isn't until realizing that his two childhood friends, Fuma and Kotori Monou, are in grievous peril that Kamui decides to step into his fated position in the climactic struggle of the Year of Destiny: 1999. <br><br>\n(Source: AnimeNfo) "
      },
      {
        "title": {
          "romaji": "Initial D Third Stage",
          "english": null
        },
        "coverImage": {
          "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx187-QyCAlBGY3EWw.jpg"
        },
        "description": "Takumi is approached by RedSuns leader Ryosuke Takahashi and offered to join him in forming a professional racing team. Before coming up with an answer to the proposal, Takumi seeks retribution by issuing a rematch to Emperor leader Kyouichi Sudou, who previously defeated him due to an engine failure. He is also challenged by Kai Kogashiwa, a second-generation street racer whose father was once a fierce rival of Takumi's father Bunta. <br>"
      },
      {
        "title": {
          "romaji": "Ace wo Nerae! (1979)",
          "english": "Aim for the Ace! (1979)"
        },
        "coverImage": {
          "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx313-3AGBhL0VLIFI.jpg"
        },
        "description": "High school freshman Hiromi joins the tennis club because of her admiration for Ryuzaki. Ryuzaki is a senior, who's the best tennis player on the team and also nicknamed \"Och&#333;fujin\", (\"Madame Butterfly\"), because of her elegance on the tennis court. However, the new coach, Jin Munakata, wants the inexperienced Hiromi to play in a forthcoming tournament.<br><br>\nDue to this, Hiromi considers quitting tennis for good but, in the depth of her soul, she soon realizes that she loves tennis after all. She returns to the club and, under Munakata's coaching, her talent starts to bloom.<br><br>\nIn the end, Hiromi develops a strong emotional bond with her coach, not knowing that Munakata is risking his life because of a chronic illness.<br><br>\n(Source: AnimeNfo)"
      },
      {
        "title": {
          "romaji": "Cardcaptor Sakura Movie 1",
          "english": "Cardcaptor Sakura: The Movie"
        },
        "coverImage": {
          "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx371-sdrIzrI5qXl3.jpg"
        },
        "description": "It's winter vacation and Sakura wins a trip to Hong Kong. Kero, skeptic of her luck in lotteries, questions whether she was merely lucky or was she summoned to Hong Kong upon inevitability. As Sakura strolls through Hong Kong's Bird Street, she senses an evil force calling to her. On chasing two strange birds, she is lead to a phantom world where she learns she was actually made to come to Hong Kong by a woman, Madoushi, who apparently wants revenge on Clow Reed. With Syaoran's mother, Yelan's help and the guidance from Clow Reed's voice, she must fight Madoushi and rescue her friends and loved ones, who have been captured."
      },
      {
        "title": {
          "romaji": "Cardcaptor Sakura Movie 2: Fuinsareta Card",
          "english": "Cardcaptor Sakura the Movie 2: The Sealed Card"
        },
        "coverImage": {
          "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx372-fTXJwelrAAC6.png"
        },
        "description": "During the summer holidays, Sakura and her class are preparing to present a play at the annual Nadeshiko Festival. The unexpected arrival of Syaoran (and Meiling) give Sakura the courage to finally reciprocate her feelings. But as the cards begin to disappear one by one, Sakura discovers a single cards still remains. One with power equal to all hers... It is during this summer that Sakura faces her final battle."
      },
      {
        "title": {
          "romaji": "Tonari no Yamada-kun",
          "english": "My Neighbors the Yamadas"
        },
        "coverImage": {
          "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx415-6DDsl72NV0cv.png"
        },
        "description": "Join in the adventures of the quirky Yamada family -- from the hilarious to the touching -- brilliantly presented in a unique, visually striking comic strip style. Takashi Yamada and his wacky wife Matsuko, who has no talent for housework, navigate their way through the ups and downs of work, marriage and family life with a sharp-tongued grandmother who lives with them, a teenage son who wishes he had cooler parents, and a pesky daughter whose loud voice is unusual for someone so small. Even the family dog has issues!<br><br>\n(Source: Disney)"
      },
      {
        "title": {
          "romaji": "Kurenai no Buta",
          "english": "Porco Rosso"
        },
        "coverImage": {
          "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx416-vErUcQ5v7rjo.jpg"
        },
        "description": "Take flight with \"Porco\" Rosso, a valiant World War I flying ace! From tropical Adriatic settings to dazzling aerial maneuvers, this action-adventure from world-renowned animator Hayao Miyazaki is full of humor, courage and chivalry. When \"Porco\" &mdash;whose face has been transformed into that of a pig by a mysterious spell&mdash; infuriates a band of sky pirates with his aerial heroics, the pirates hire Curtis, a rival pilot, to \"get rid\" of him. On the ground, the two pilots compete for the affections of the beautiful Gina. But it is in the air where the true battles are waged. Will our hero be victorious? <br><br>\n(Source: Disney) "
      },
      {
        "title": {
          "romaji": "Ranma ½: Chuugoku Nekonron Daikessen! Okite Yaburi no Gekitou-hen!!",
          "english": "Ranma ½: Big Trouble in Nekonron, China"
        },
        "coverImage": {
          "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx418-aeVCp5jcGNsN.jpg"
        },
        "description": "All is well at the Tendo residence when from out of nowhere, a Chinese girl named Lychee appears, seeking revenge on Happosai for a broken promise made since her birth. Things get worse when Kirin and the Seven Lucky Gods appear and abduct Akane to take as his wife. Ranma and the gang must travel to Nekonron, China, and save Akane from getting married to Kirin.\n<br><br>\n(Source: Anime News Network)"
      }
    ]
      await queryInterface.bulkInsert("animes", animes, {}, { title : { type: new Sequelize.JSON() }, coverImage: { type: new Sequelize.JSON() } });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("animes", animes, {});
  }
};
