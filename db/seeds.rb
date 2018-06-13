# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

User.destroy_all
 user1 = User.create({username: "Felix", password: "password"})
user2 = User.create({username: "Allen", password: "password"})
user3 = User.create({username: "Bob", password: "password"})
user4 = User.create({username: "Steve", password: "password"})
user5 = User.create({username: "Melony", password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528776849/coex5jgohodc0mqgty5r.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776350/boy4qqret5rpranjk18j.jpg"})
user6 = User.create({username: "sfman", password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528776541/nren1oul9wgoqmsyeiux.jpg"})
user7 = User.create({username: "Garden Flower", password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528776272/ygty6yjd99z9n32bi0kn.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776894/aljdnek7yzyjcaamtyje.jpg"})
user8 = User.create({username: "runnerman2", password: "password", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776588/bemxylyfht8kh8xhi7lh.jpg"})
user9 = User.create({username: "Harmony Atom", password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528822826/freestocks-org-570360-unsplash.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528777304/dw2qed71upmhlolo769c.jpg", description: "visioinary, leader, philanthropist"})
user10 = User.create({username: "mrExtinct", password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528494930/kulrpduwnhic8fbh9prf.png", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528490121/azwif34ctvpdbsbwtshp.jpg", description: "visioinary, leader, philanthropist"})
user11 = User.create({username: "Matt", password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528867401/asaf-r-467443-unsplash.jpg", cover_url:"", description: "beach is where the heart is"})
user12 = User.create({username: "CloudyBeauty", password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528867416/touzeey-302645-unsplash.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867310/valentino-funghi-275990-unsplash.jpg", description: "visioinary, leader, philanthropist"})
user13 = User.create({username: "AvidTravel", password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528914135/jason-leung-667985-unsplash.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867310/valentino-funghi-275990-unsplash.jpg", description: ""})
user14 = User.create({username: "Beverly", password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528914169/jordan-andrews-396838-unsplash.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528914153/jon-tyson-520952-unsplash.jpg", description: ""})
Picture.destroy_all
Picture.create({title: "Made it to sf",image_url:"https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200", uploader_id: user1.id})
Picture.create({title: "Outdoor adventures",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528914897/luo-lei-625155-unsplash_2.jpg", uploader_id: user2.id })
Picture.create({title: "Ready for new years",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528914897/luo-lei-625155-unsplash_2.jpg", uploader_id: user3.id })
Picture.create({title: "Finally Here!",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528915078/thomas-ribaud-665075-unsplash.jpg", uploader_id: user4.id })
Picture.create({title: "Love this city",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528915184/sasha-stories-267948-unsplash.jpg", uploader_id: user5.id })
Picture.create({title: "Pure relaxation",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528915244/seth-doyle-133176-unsplash.jpg", uploader_id: user6.id })
Picture.create({title: "Yay!!",image_url:"https://s15.postimg.cc/72h63cy63/forest.jpg", uploader_id: user7.id })

Picture.create({title: "Morning Essentials",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776389/zjc06v3xthn94njm8vnl.jpg", uploader_id: user8.id })
Picture.create({title: "Beauty in the night",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528777129/s9imhavzxntyo3y7gmcc.jpg", uploader_id: user9.id })
Picture.create({title: "never look back",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776631/qfeakv2w9rdfbhkvbpff.jpg", uploader_id: user10.id })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528915367/wenni-zhou-463395-unsplash.jpg", uploader_id: user1.id })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528777262/qevtrfepysdcivhcn41b.jpg", uploader_id: user2.id })
Picture.create({title: "beauty is art",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528822802/scott-webb-271478-unsplash.jpg", uploader_id: user3.id })
Picture.create({title: "The joys of brunch",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776915/zu1koeinx1axioxafjih.jpg", uploader_id: user4.id })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528825624/ya74xwyn1gxspcpdrhqw.jpg", uploader_id: user5.id })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528827269/erik-witsoe-366860-unsplash.jpg", uploader_id: user6.id })
Picture.create({title: "last night was awesome",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528825718/nouv1lfig99eth0iatrl.jpg", uploader_id: user7.id })
Picture.create({title: "nature speaks",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867316/alex-koch-513845-unsplash.jpg", uploader_id: user11.id })
Picture.create({title: "nature speaks",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867285/dulcey-lima-456862-unsplash.jpg", uploader_id: user12.id })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867266/braden-jarvis-625463-unsplash.jpg", uploader_id: user11.id })
Picture.create({title: "Wedding Bells",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867264/callie-morgan-285271-unsplash.jpg", uploader_id: user12.id })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528867278/eric-ward-304333-unsplash.jpg", uploader_id: user12.id })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528914160/florin-kozma-678292-unsplash.jpg", uploader_id: user13.id })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528914176/joshua-fuller-204247-unsplash.jpg", uploader_id: user14.id })
Picture.create({title: "No adventure is too far off",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528914153/jon-tyson-520952-unsplash.jpg", uploader_id: user14.id })
