/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('directory').del()
  await knex('directory').insert([
  {
    full_name: 'Adham Summerton',
    duty_title: 'Propulsion Engineer',
    phone_number: '9512599384',
    email: 'asummerton0@about.com',
    org_id: 29,
  },
  {
    full_name: 'Janet Duffell',
    duty_title: 'Propulsion Engineer',
    phone_number: '3568493148',
    email: 'jduffell1@about.com',
    org_id: 33,
  },
  {
    full_name: 'Amabelle Bonallack',
    duty_title: 'Robotics Engineer',
    phone_number: '3248114165',
    email: 'abonallack2@nps.gov',
    org_id: 28,
  },
  {
    full_name: 'Alain Ottewell',
    duty_title: 'Chief Technology Officer',
    phone_number: '6519102339',
    email: 'aottewell3@usatoday.com',
    org_id: 1,
  },
  {
    full_name: 'Charlotte MacGuffie',
    duty_title: 'Operations Research Analyst',
    phone_number: '8557925767',
    email: 'cmacguffie4@psu.edu',
    org_id: 17,
  },
  {
    full_name: 'Reggie Stobart',
    duty_title: 'Business Development Manager',
    phone_number: '7735572053',
    email: 'rstobart5@163.com',
    org_id: 9,
  },
  {
    full_name: 'Erena Linklet',
    duty_title: 'Propulsion Engineer',
    phone_number: '8369659974',
    email: 'elinklet6@economist.com',
    org_id: 7,
  },
  {
    full_name: 'Nataniel Erickssen',
    duty_title: 'Radar Systems Engineer',
    phone_number: '4262033417',
    email: 'nerickssen7@slideshare.net',
    org_id: 24,
  },
  {
    full_name: 'Giacinta Doggrell',
    duty_title: 'Spacecraft Designer',
    phone_number: '4681456959',
    email: 'gdoggrell8@globo.com',
    org_id: 23,
  },
  {
    full_name: 'Killian Dearn',
    duty_title: 'Human Factors Engineer',
    phone_number: '9869047803',
    email: 'kdearn9@cnn.com',
    org_id: 34,
  },
  {
    full_name: 'Gipsy Hughf',
    duty_title: 'Avionics Technician',
    phone_number: '8555536819',
    email: 'ghughfa@yellowpages.com',
    org_id: 32,
  },
  {
    full_name: 'Colan McMichael',
    duty_title: 'Software Developer',
    phone_number: '2318538583',
    email: 'cmcmichaelb@blogs.com',
    org_id: 2,
  },
  {
    full_name: 'Raviv Ashelford',
    duty_title: 'Human Factors Engineer',
    phone_number: '2722106147',
    email: 'rashelfordc@timesonline.co.uk',
    org_id: 4,
  },
  {
    full_name: 'Gabe Dillamore',
    duty_title: 'Logistics Coordinator',
    phone_number: '7299497787',
    email: 'gdillamored@exblog.jp',
    org_id: 30,
  },
  {
    full_name: 'Cart Chappelow',
    duty_title: 'Research Scientist',
    phone_number: '4401599763',
    email: 'cchappelowe@so-net.ne.jp',
    org_id: 29,
  },
  {
    full_name: 'Irena Jeeks',
    duty_title: 'Network Engineer',
    phone_number: '6583227014',
    email: 'ijeeksf@loc.gov',
    org_id: 34,
  },
  {
    full_name: 'Stern Cornwell',
    duty_title: 'Manufacturing Engineer',
    phone_number: '9592683248',
    email: 'scornwellg@t-online.de',
    org_id: 37,
  },
  {
    full_name: 'Aguistin Cossington',
    duty_title: 'Structural Engineer',
    phone_number: '6339823619',
    email: 'acossingtonh@homestead.com',
    org_id: 15,
  },
  {
    full_name: 'Ophelie Camp',
    duty_title: 'UAV Operator',
    phone_number: '3531745103',
    email: 'ocampi@netscape.com',
    org_id: 24,
  },
  {
    full_name: 'Ring De Cristofalo',
    duty_title: 'Logistics Coordinator',
    phone_number: '1279379556',
    email: 'rdej@yellowbook.com',
    org_id: 25,
  },
  {
    full_name: 'Jaymee Heatly',
    duty_title: 'Chief Technology Officer',
    phone_number: '5188126711',
    email: 'jheatlyk@purevolume.com',
    org_id: 15,
  },
  {
    full_name: 'Lenee Proughten',
    duty_title: 'Supply Chain Manager',
    phone_number: '4783972849',
    email: 'lproughtenl@ask.com',
    org_id: 12,
  },
  {
    full_name: 'Adriena Klimashevich',
    duty_title: 'Materials Scientist',
    phone_number: '8654306926',
    email: 'aklimashevichm@psu.edu',
    org_id: 21,
  },
  {
    full_name: 'Lazaro Grene',
    duty_title: 'Avionics Technician',
    phone_number: '3049597496',
    email: 'lgrenen@jiathis.com',
    org_id: 37,
  },
  {
    full_name: 'Yvette McNysche',
    duty_title: 'Avionics Technician',
    phone_number: '3317274362',
    email: 'ymcnyscheo@sbwire.com',
    org_id: 11,
  },
  {
    full_name: 'Retha Kesten',
    duty_title: 'Satellite Communications Specialist',
    phone_number: '1132048872',
    email: 'rkestenp@macromedia.com',
    org_id: 38,
  },
  {
    full_name: 'Wiatt Turneux',
    duty_title: 'Spacecraft Designer',
    phone_number: '4819843433',
    email: 'wturneuxq@amazon.co.jp',
    org_id: 34,
  },
  {
    full_name: 'Colas Wyldbore',
    duty_title: 'Structural Engineer',
    phone_number: '1997312301',
    email: 'cwyldborer@wordpress.com',
    org_id: 2,
  },
  {
    full_name: 'Camellia Grimes',
    duty_title: 'Satellite Communications Specialist',
    phone_number: '2763333387',
    email: 'cgrimess@discovery.com',
    org_id: 31,
  },
  {
    full_name: "Shay D'Emanuele",
    duty_title: 'Avionics Technician',
    phone_number: '5536165016',
    email: 'sdemanuelet@answers.com',
    org_id: 31,
  },
  {
    full_name: 'Ezechiel Ickovici',
    duty_title: 'Contract Specialist',
    phone_number: '6944117052',
    email: 'eickoviciu@archive.org',
    org_id: 25,
  },
  {
    full_name: 'Juditha Ranstead',
    duty_title: 'Materials Scientist',
    phone_number: '5139888777',
    email: 'jransteadv@samsung.com',
    org_id: 3,
  },
  {
    full_name: 'Reese Mitchley',
    duty_title: 'Contract Specialist',
    phone_number: '4082740709',
    email: 'rmitchleyw@xing.com',
    org_id: 10,
  },
  {
    full_name: 'Ethelyn McNeice',
    duty_title: 'Materials Scientist',
    phone_number: '2062701136',
    email: 'emcneicex@phpbb.com',
    org_id: 15,
  },
  {
    full_name: 'Lalo Gillard',
    duty_title: 'Robotics Engineer',
    phone_number: '5384248437',
    email: 'lgillardy@facebook.com',
    org_id: 1,
  },
  {
    full_name: 'Verine Dannell',
    duty_title: 'Program Analyst',
    phone_number: '4123880740',
    email: 'vdannellz@fda.gov',
    org_id: 15,
  },
  {
    full_name: 'Antonin Blance',
    duty_title: 'Payload Specialist',
    phone_number: '6178791777',
    email: 'ablance10@opensource.org',
    org_id: 15,
  },
  {
    full_name: 'Alicia Fruser',
    duty_title: 'Logistics Coordinator',
    phone_number: '9363141822',
    email: 'afruser11@nytimes.com',
    org_id: 38,
  },
  {
    full_name: 'Fiorenze Hould',
    duty_title: 'Safety Engineer',
    phone_number: '6121974860',
    email: 'fhould12@hao123.com',
    org_id: 12,
  },
  {
    full_name: 'Emile Esslement',
    duty_title: 'Launch Operations Manager',
    phone_number: '2577708895',
    email: 'eesslement13@sciencedaily.com',
    org_id: 32,
  },
  {
    full_name: 'Birk Durham',
    duty_title: 'Program Analyst',
    phone_number: '3572256324',
    email: 'bdurham14@newsvine.com',
    org_id: 37,
  },
  {
    full_name: 'Ronnie Garry',
    duty_title: 'Chief Technology Officer',
    phone_number: '7573397832',
    email: 'rgarry15@wiley.com',
    org_id: 19,
  },
  {
    full_name: 'Angelo Kahler',
    duty_title: 'Satellite Communications Specialist',
    phone_number: '4445415518',
    email: 'akahler16@wired.com',
    org_id: 31,
  },
  {
    full_name: 'Hilly Vaadeland',
    duty_title: 'Materials Scientist',
    phone_number: '3995649877',
    email: 'hvaadeland17@samsung.com',
    org_id: 34,
  },
  {
    full_name: 'Meaghan Pettigree',
    duty_title: 'Human Factors Engineer',
    phone_number: '7502134029',
    email: 'mpettigree18@dailymail.co.uk',
    org_id: 39,
  },
  {
    full_name: 'Trude Witty',
    duty_title: 'Test Pilot',
    phone_number: '7699843590',
    email: 'twitty19@dedecms.com',
    org_id: 6,
  },
  {
    full_name: 'Claudetta Casaro',
    duty_title: 'Radar Systems Engineer',
    phone_number: '6054957153',
    email: 'ccasaro1a@blogs.com',
    org_id: 33,
  },
  {
    full_name: 'Raeann Browning',
    duty_title: 'Chief Technology Officer',
    phone_number: '9641751636',
    email: 'rbrowning1b@examiner.com',
    org_id: 23,
  },
  {
    full_name: 'Marga Swain',
    duty_title: 'Astronaut',
    phone_number: '3471855552',
    email: 'mswain1c@ucla.edu',
    org_id: 8,
  },
  {
    full_name: 'Davita Muggleton',
    duty_title: 'Network Engineer',
    phone_number: '8144054727',
    email: 'dmuggleton1d@mapy.cz',
    org_id: 18,
  },
  {
    full_name: 'Sidnee Roughsedge',
    duty_title: 'Chief Technology Officer',
    phone_number: '8309521844',
    email: 'sroughsedge1e@disqus.com',
    org_id: 31,
  },
  {
    full_name: 'Wilbert East',
    duty_title: 'UAV Operator',
    phone_number: '3531951088',
    email: 'weast1f@shop-pro.jp',
    org_id: 25,
  },
  {
    full_name: 'Halie Tertre',
    duty_title: 'Mission Control Specialist',
    phone_number: '9452695011',
    email: 'htertre1g@microsoft.com',
    org_id: 4,
  },
  {
    full_name: 'Hailey Crummay',
    duty_title: 'Propulsion Engineer',
    phone_number: '1849603645',
    email: 'hcrummay1h@a8.net',
    org_id: 34,
  },
  {
    full_name: 'Sheila Mustin',
    duty_title: 'Launch Operations Manager',
    phone_number: '5426612266',
    email: 'smustin1i@ask.com',
    org_id: 38,
  },
  {
    full_name: 'Raimundo Dobbie',
    duty_title: 'Product Manager',
    phone_number: '1978788217',
    email: 'rdobbie1j@marketwatch.com',
    org_id: 5,
  },
  {
    full_name: 'Kipper Mayoh',
    duty_title: 'Software Developer',
    phone_number: '2866116694',
    email: 'kmayoh1k@slashdot.org',
    org_id: 16,
  },
  {
    full_name: 'Lotte Ricketts',
    duty_title: 'Contract Specialist',
    phone_number: '4318888960',
    email: 'lricketts1l@weather.com',
    org_id: 26,
  },
  {
    full_name: 'Evered Dubock',
    duty_title: 'Systems Engineer',
    phone_number: '1493872035',
    email: 'edubock1m@e-recht24.de',
    org_id: 34,
  },
  {
    full_name: 'Thomasa Gorman',
    duty_title: 'Test Pilot',
    phone_number: '4289398036',
    email: 'tgorman1n@icio.us',
    org_id: 38,
  },
  {
    full_name: 'Zena Jelks',
    duty_title: 'Operations Research Analyst',
    phone_number: '6287064422',
    email: 'zjelks1o@eventbrite.com',
    org_id: 1,
  },
  {
    full_name: 'Agosto Lazonby',
    duty_title: 'Mission Control Specialist',
    phone_number: '4727467431',
    email: 'alazonby1p@webeden.co.uk',
    org_id: 16,
  },
  {
    full_name: 'Garold Choke',
    duty_title: 'Mission Control Specialist',
    phone_number: '3029341756',
    email: 'gchoke1q@usnews.com',
    org_id: 1,
  },
  {
    full_name: 'Nettle Perfili',
    duty_title: 'Supply Chain Manager',
    phone_number: '7681580238',
    email: 'nperfili1r@globo.com',
    org_id: 12,
  },
  {
    full_name: 'Brunhilde Hamnet',
    duty_title: 'Electrical Engineer',
    phone_number: '3349049634',
    email: 'bhamnet1s@mail.ru',
    org_id: 18,
  },
  {
    full_name: 'Meredeth Penburton',
    duty_title: 'Supply Chain Manager',
    phone_number: '7118637988',
    email: 'mpenburton1t@bizjournals.com',
    org_id: 10,
  },
  {
    full_name: 'Pernell Gostick',
    duty_title: 'Payload Specialist',
    phone_number: '1038633665',
    email: 'pgostick1u@nytimes.com',
    org_id: 29,
  },
  {
    full_name: 'Luciana Le Marchant',
    duty_title: 'Operations Research Analyst',
    phone_number: '6442643220',
    email: 'lle1v@cdbaby.com',
    org_id: 38,
  },
  {
    full_name: 'Reeba Edeler',
    duty_title: 'Astronaut',
    phone_number: '9408461121',
    email: 'redeler1w@webmd.com',
    org_id: 8,
  },
  {
    full_name: 'Enrika Abberley',
    duty_title: 'Avionics Technician',
    phone_number: '9526774568',
    email: 'eabberley1x@biglobe.ne.jp',
    org_id: 29,
  },
  {
    full_name: 'Meg Coull',
    duty_title: 'Business Development Manager',
    phone_number: '2429673238',
    email: 'mcoull1y@cbslocal.com',
    org_id: 18,
  },
  {
    full_name: 'Kacie Hyslop',
    duty_title: 'Radar Systems Engineer',
    phone_number: '3259861665',
    email: 'khyslop1z@unesco.org',
    org_id: 21,
  },
  {
    full_name: 'Dody Hounihan',
    duty_title: 'UAV Operator',
    phone_number: '3921128034',
    email: 'dhounihan20@wufoo.com',
    org_id: 13,
  },
  {
    full_name: 'Price Likly',
    duty_title: 'Cybersecurity Analyst',
    phone_number: '2332634257',
    email: 'plikly21@wikimedia.org',
    org_id: 31,
  },
  {
    full_name: 'Edythe Lindholm',
    duty_title: 'Business Development Manager',
    phone_number: '1902214133',
    email: 'elindholm22@huffingtonpost.com',
    org_id: 3,
  },
  {
    full_name: 'La verne Cutridge',
    duty_title: 'Radar Systems Engineer',
    phone_number: '4474858763',
    email: 'lverne23@wisc.edu',
    org_id: 28,
  },
  {
    full_name: 'Yovonnda Winning',
    duty_title: 'Manufacturing Engineer',
    phone_number: '1468470746',
    email: 'ywinning24@jigsy.com',
    org_id: 20,
  },
  {
    full_name: 'Clarence Passo',
    duty_title: 'Project Manager',
    phone_number: '4535184322',
    email: 'cpasso25@opensource.org',
    org_id: 13,
  },
  {
    full_name: 'Annalee Duquesnay',
    duty_title: 'Systems Engineer',
    phone_number: '8303767217',
    email: 'aduquesnay26@japanpost.jp',
    org_id: 29,
  },
  {
    full_name: 'Aile Jemmison',
    duty_title: 'Radar Systems Engineer',
    phone_number: '6059321448',
    email: 'ajemmison27@japanpost.jp',
    org_id: 10,
  },
  {
    full_name: 'Nissie Noad',
    duty_title: 'Satellite Communications Specialist',
    phone_number: '6647704255',
    email: 'nnoad28@over-blog.com',
    org_id: 34,
  },
  {
    full_name: 'Carlos Philpot',
    duty_title: 'Data Scientist',
    phone_number: '2705091800',
    email: 'cphilpot29@phpbb.com',
    org_id: 10,
  },
  {
    full_name: 'Malchy Dickman',
    duty_title: 'Business Development Manager',
    phone_number: '7496880546',
    email: 'mdickman2a@slashdot.org',
    org_id: 14,
  },
  {
    full_name: 'Chrisse Kowal',
    duty_title: 'UAV Operator',
    phone_number: '4683858676',
    email: 'ckowal2b@networksolutions.com',
    org_id: 13,
  },
  {
    full_name: 'Clementina Streatley',
    duty_title: 'Data Scientist',
    phone_number: '8615068875',
    email: 'cstreatley2c@icq.com',
    org_id: 32,
  },
  {
    full_name: 'Rosalia Dunston',
    duty_title: 'Spacecraft Designer',
    phone_number: '2597906914',
    email: 'rdunston2d@furl.net',
    org_id: 8,
  },
  {
    full_name: 'Calhoun Vivians',
    duty_title: 'Launch Operations Manager',
    phone_number: '6854689421',
    email: 'cvivians2e@vinaora.com',
    org_id: 16,
  },
  {
    full_name: 'Helaina Gardner',
    duty_title: 'Mission Control Specialist',
    phone_number: '6641508298',
    email: 'hgardner2f@paypal.com',
    org_id: 16,
  },
  {
    full_name: 'Hortense Libby',
    duty_title: 'Human Factors Engineer',
    phone_number: '7386049121',
    email: 'hlibby2g@google.ru',
    org_id: 15,
  },
  {
    full_name: 'Paulie Lefley',
    duty_title: 'Project Manager',
    phone_number: '6334108445',
    email: 'plefley2h@reuters.com',
    org_id: 28,
  },
  {
    full_name: 'Dorie Heinz',
    duty_title: 'Satellite Communications Specialist',
    phone_number: '1519245122',
    email: 'dheinz2i@behance.net',
    org_id: 1,
  },
  {
    full_name: 'Anabal McKeag',
    duty_title: 'Mission Control Specialist',
    phone_number: '7234664325',
    email: 'amckeag2j@who.int',
    org_id: 25,
  },
  {
    full_name: 'Keith Vaudin',
    duty_title: 'Structural Engineer',
    phone_number: '4091664864',
    email: 'kvaudin2k@statcounter.com',
    org_id: 33,
  },
  {
    full_name: 'Meris Coggell',
    duty_title: 'Astronaut',
    phone_number: '6388994119',
    email: 'mcoggell2l@shop-pro.jp',
    org_id: 32,
  },
  {
    full_name: 'Claudius Danaher',
    duty_title: 'Robotics Engineer',
    phone_number: '5341724111',
    email: 'cdanaher2m@usatoday.com',
    org_id: 25,
  },
  {
    full_name: 'Sukey Castel',
    duty_title: 'Business Development Manager',
    phone_number: '6292428109',
    email: 'scastel2n@huffingtonpost.com',
    org_id: 5,
  },
  {
    full_name: 'Birch Latus',
    duty_title: 'Test Pilot',
    phone_number: '5404126836',
    email: 'blatus2o@tinyurl.com',
    org_id: 29,
  },
  {
    full_name: 'Garland Eggleson',
    duty_title: 'Materials Scientist',
    phone_number: '2111118622',
    email: 'geggleson2p@sohu.com',
    org_id: 30,
  },
  {
    full_name: 'Louise Michelmore',
    duty_title: 'Operations Research Analyst',
    phone_number: '5046256032',
    email: 'lmichelmore2q@patch.com',
    org_id: 29,
  },
  {
    full_name: 'Norma Liebermann',
    duty_title: 'Propulsion Engineer',
    phone_number: '4551101400',
    email: 'nliebermann2r@theguardian.com',
    org_id: 7,
  },
]);
};




