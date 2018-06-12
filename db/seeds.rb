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
Picture.destroy_all
Picture.create({title: "Made it to sf",image_url:"https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200", uploader_id: user1.id})
Picture.create({title: "Safari time",image_url:"https://s15.postimg.cc/3ucoqf6sb/safari.jpg", uploader_id: user1.id })
Picture.create({title: "Outdoor adventures",image_url:"https://s15.postimg.cc/akt5zzz4r/mountain.jpg", uploader_id: user2.id })
Picture.create({title: "Ready for new years",image_url:"https://s15.postimg.cc/7qq0mn4p7/times_square.jpg", uploader_id: user3.id })
Picture.create({title: "Finally Here!",image_url:"https://s15.postimg.cc/tr6d2q57f/shibuya.jpg", uploader_id: user4.id })
Picture.create({title: "Love this city",image_url:"https://s15.postimg.cc/f7z81ez8r/image.jpg", uploader_id: user5.id })
Picture.create({title: "Pure relaxation",image_url:"https://s15.postimg.cc/jtvc9tpxn/ocean.jpg", uploader_id: user6.id })
Picture.create({title: "Yay!!",image_url:"https://s15.postimg.cc/72h63cy63/forest.jpg", uploader_id: user7.id })

Picture.create({title: "Morning Essentials",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776389/zjc06v3xthn94njm8vnl.jpg", uploader_id: user8.id })
Picture.create({title: "Beauty in the night",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528777129/s9imhavzxntyo3y7gmcc.jpg", uploader_id: user9.id })
Picture.create({title: "never look back",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776631/qfeakv2w9rdfbhkvbpff.jpg", uploader_id: user10.id })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528822829/elena-taranenko-541565-unsplash.jpg", uploader_id: user1.id })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528777262/qevtrfepysdcivhcn41b.jpg", uploader_id: user2.id })
Picture.create({title: "beauty is art",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528822802/scott-webb-271478-unsplash.jpg", uploader_id: user3.id })
Picture.create({title: "The joys of brunch",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776915/zu1koeinx1axioxafjih.jpg", uploader_id: user4.id })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528825624/ya74xwyn1gxspcpdrhqw.jpg", uploader_id: user5.id })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528827269/erik-witsoe-366860-unsplash.jpg", uploader_id: user6.id })
Picture.create({title: "last night was awesome",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528825718/nouv1lfig99eth0iatrl.jpg", uploader_id: user7.id })
