# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
# User.create({username: "Felix", password: "password"})
# User.create({username: "Allen", password: "password"})
# User.create({username: "Bob", password: "password"})
# User.create({username: "Steve", password: "password"})
User.create({username: "Melony", password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528776849/coex5jgohodc0mqgty5r.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776350/boy4qqret5rpranjk18j.jpg"})
User.create({username: "sfman", password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528776541/nren1oul9wgoqmsyeiux.jpg"})
User.create({username: "Garden Flower", password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528776272/ygty6yjd99z9n32bi0kn.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776894/aljdnek7yzyjcaamtyje.jpg"})
User.create({username: "runnerman2", password: "password", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776588/bemxylyfht8kh8xhi7lh.jpg"})
User.create({username: "Harmony Atom", password: "password", profile_url: "https://res.cloudinary.com/dbm56y2y/image/upload/v1528822826/freestocks-org-570360-unsplash.jpg", cover_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528777304/dw2qed71upmhlolo769c.jpg", description: "visioinary, leader, philanthropist"})

Picture.create({title: "Made it to sf",image_url:"https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200", uploader_id: 1})
Picture.create({title: "Safari time",image_url:"https://s15.postimg.cc/3ucoqf6sb/safari.jpg", uploader_id: 2 })
Picture.create({title: "Outdoor adventures",image_url:"https://s15.postimg.cc/akt5zzz4r/mountain.jpg", uploader_id: 3 })
Picture.create({title: "Ready for new years",image_url:"https://s15.postimg.cc/7qq0mn4p7/times_square.jpg", uploader_id: 4 })
Picture.create({title: "Finally Here!",image_url:"https://s15.postimg.cc/tr6d2q57f/shibuya.jpg", uploader_id: 1 })
Picture.create({title: "Love this city",image_url:"https://s15.postimg.cc/f7z81ez8r/image.jpg", uploader_id: 2 })
Picture.create({title: "Pure relaxation",image_url:"https://s15.postimg.cc/jtvc9tpxn/ocean.jpg", uploader_id: 3 })
Picture.create({title: "Yay!!",image_url:"https://s15.postimg.cc/72h63cy63/forest.jpg", uploader_id: 4 })

Picture.create({title: "Morning Essentials",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776389/zjc06v3xthn94njm8vnl.jpg", uploader_id: 5 })
Picture.create({title: "Beauty in the night",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528777129/s9imhavzxntyo3y7gmcc.jpg", uploader_id: 6 })
Picture.create({title: "never look back",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776631/qfeakv2w9rdfbhkvbpff.jpg", uploader_id: 7 })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528822829/elena-taranenko-541565-unsplash.jpg", uploader_id: 8 })
Picture.create({title: "",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528777262/qevtrfepysdcivhcn41b.jpg", uploader_id: 9 })
Picture.create({title: "beauty is art",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528822802/scott-webb-271478-unsplash.jpg", uploader_id: 6 })
Picture.create({title: "The joys of brunch",image_url:"https://res.cloudinary.com/dbm56y2y/image/upload/v1528776915/zu1koeinx1axioxafjih.jpg", uploader_id: 7 })
