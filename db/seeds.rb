# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

File.open(Rails.root.join("db", "words.txt"), "r") do |f|
  f.each_line do |line|
    word = line.downcase.chomp
    
    next if word.length <= 1
    
    Word.create!(text: word)
  end
end
