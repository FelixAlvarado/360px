# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: "Felix", password: "password"})
User.create({username: "Allen", password: "password"})
User.create({username: "Bob", password: "password"})
User.create({username: "Steve", password: "password"})

Picture.create({title: "Made it to sf",image_url:"https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200", uploader_id: 8 })
Picture.create({title: "Safari time",image_url:"https://s15.postimg.cc/3ucoqf6sb/safari.jpg", uploader_id: 8 })
Picture.create({title: "Outdoor adventures",image_url:"https://s15.postimg.cc/akt5zzz4r/mountain.jpg", uploader_id: 18 })
Picture.create({title: "Ready for new years",image_url:"https://s15.postimg.cc/7qq0mn4p7/times_square.jpg", uploader_id: 18 })
Picture.create({title: "Finally Here!",image_url:"https://s15.postimg.cc/tr6d2q57f/shibuya.jpg", uploader_id: 19 })
Picture.create({title: "Love this city",image_url:"https://s15.postimg.cc/f7z81ez8r/image.jpg", uploader_id: 19 })
Picture.create({title: "Pure relaxation",image_url:"https://s15.postimg.cc/jtvc9tpxn/ocean.jpg", uploader_id: 20 })
Picture.create({title: "Yay!!",image_url:"https://s15.postimg.cc/72h63cy63/forest.jpg", uploader_id: 20 })
# Picture.create({title: "Made it to sf",image_url:"https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200", uploader_id: 8 })
