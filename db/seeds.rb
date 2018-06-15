# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

User.destroy_all
 user1 = User.create({username: "Felix", password: "password", cover_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528916078/dabtje61xxqksoljk470.jpg", profile_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528916116/pxdpqlokeeyhonybowbv.jpg", description: Faker::Movie.quote })
user2 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", description: Faker::Movie.quote})
user3 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", description: Faker::Movie.quote})
user4 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", description: Faker::Movie.quote})
user5 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528776849/coex5jgohodc0mqgty5r.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776350/boy4qqret5rpranjk18j.jpg", description: Faker::Movie.quote})
user6 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528776541/nren1oul9wgoqmsyeiux.jpg", description: Faker::Movie.quote})
user7 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528776272/ygty6yjd99z9n32bi0kn.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776894/aljdnek7yzyjcaamtyje.jpg", description: Faker::Movie.quote})
user8 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776588/bemxylyfht8kh8xhi7lh.jpg", description: Faker::Movie.quote})
user9 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528822826/freestocks-org-570360-unsplash.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528777304/dw2qed71upmhlolo769c.jpg", description: Faker::Movie.quote})
user10 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528494930/kulrpduwnhic8fbh9prf.png", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528490121/azwif34ctvpdbsbwtshp.jpg", description: Faker::Movie.quote})
user11 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528867401/asaf-r-467443-unsplash.jpg", cover_url:"", description: Faker::Movie.quote})
user12 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528867416/touzeey-302645-unsplash.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867310/valentino-funghi-275990-unsplash.jpg", description: Faker::Movie.quote})
user13 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528914135/jason-leung-667985-unsplash.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867310/valentino-funghi-275990-unsplash.jpg", description: Faker::Movie.quote})
user14 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528914169/jordan-andrews-396838-unsplash.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528914153/jon-tyson-520952-unsplash.jpg", description: Faker::Movie.quote})
user15 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1529038851/ezra-comeau-jeffrey-661583-unsplash.jpg", cover_url:"", description: Faker::Movie.quote})
user16 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1529038852/brad-halcrow-590097-unsplash.jpg", cover_url:"", description: Faker::Movie.quote})
user17 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1529038882/demetrius-washington-670055-unsplash.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1529038861/murray-campbell-29990-unsplash.jpg", description: Faker::Movie.quote})
user18 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1529079265/kyle-loftus-592128-unsplash.jpg", cover_url:"", description: Faker::Movie.quote})
user19 = User.create({username: Faker::Twitter.unique.screen_name, password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1529079285/roberto-nickson-g-366181-unsplash.jpg", description: Faker::Movie.quote})


Picture.destroy_all
Picture.create({title: "Made it to sf",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528915569/james-donovan-150590-unsplash.jpg", uploader_id: user1.id})
Picture.create({title: "Outdoor adventures",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528914897/luo-lei-625155-unsplash_2.jpg", uploader_id: user2.id })
Picture.create({title: "Ready for new years",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528914995/chuttersnap-336571-unsplash.jpg", uploader_id: user3.id })
Picture.create({title: "Finally Here!",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528915078/thomas-ribaud-665075-unsplash.jpg", uploader_id: user4.id })
Picture.create({title: "Love this city",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528915184/sasha-stories-267948-unsplash.jpg", uploader_id: user5.id })
Picture.create({title: "Pure relaxation",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528915244/seth-doyle-133176-unsplash.jpg", uploader_id: user6.id })


Picture.create({title: "Morning Essentials",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776389/zjc06v3xthn94njm8vnl.jpg", uploader_id: user8.id })
Picture.create({title: "Beauty in the night",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528777129/s9imhavzxntyo3y7gmcc.jpg", uploader_id: user9.id })
Picture.create({title: "never look back",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776631/qfeakv2w9rdfbhkvbpff.jpg", uploader_id: user10.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528915367/wenni-zhou-463395-unsplash.jpg", uploader_id: user1.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528777262/qevtrfepysdcivhcn41b.jpg", uploader_id: user2.id })
Picture.create({title: "beauty is art",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528822802/scott-webb-271478-unsplash.jpg", uploader_id: user3.id })
Picture.create({title: "The joys of brunch",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776915/zu1koeinx1axioxafjih.jpg", uploader_id: user4.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528825624/ya74xwyn1gxspcpdrhqw.jpg", uploader_id: user5.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528827269/erik-witsoe-366860-unsplash.jpg", uploader_id: user6.id })
Picture.create({title: "last night was awesome",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528825718/nouv1lfig99eth0iatrl.jpg", uploader_id: user7.id })
Picture.create({title: "nature speaks",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867316/alex-koch-513845-unsplash.jpg", uploader_id: user11.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867285/dulcey-lima-456862-unsplash.jpg", uploader_id: user12.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867266/braden-jarvis-625463-unsplash.jpg", uploader_id: user11.id })
Picture.create({title: "Wedding Bells",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867264/callie-morgan-285271-unsplash.jpg", uploader_id: user12.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867278/eric-ward-304333-unsplash.jpg", uploader_id: user12.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528914160/florin-kozma-678292-unsplash.jpg", uploader_id: user13.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528914176/joshua-fuller-204247-unsplash.jpg", uploader_id: user14.id })
Picture.create({title: "No adventure is too far off",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528914153/jon-tyson-520952-unsplash.jpg", uploader_id: user14.id })
Picture.create({title: "My little happy place",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1529038894/allef-vinicius-253985-unsplash.jpg", uploader_id: user15.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1529038873/vladimir-kudinov-61639-unsplash.jpg", uploader_id: user16.id })
Picture.create({title: "Pure Solice",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1529038913/jorge-flores-223750-unsplash.jpg", uploader_id: user17.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1529038926/fancycrave-225507-unsplash.jpg", uploader_id: user15.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1529038906/pietro-de-grandi-329892-unsplash.jpg", uploader_id: user16.id })
Picture.create({title: "This trip was well worth it",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1529038920/liam-pozz-247954-unsplash.jpg", uploader_id: user17.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1529079276/annie-spratt-460959-unsplash.jpg", uploader_id: user18.id })
Picture.create({title: Faker::Movie.quote,image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1529079292/amber-teasley-369443-unsplash.jpg", uploader_id: user19.id })
