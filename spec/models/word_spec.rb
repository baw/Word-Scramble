require "rails_helper"

describe Word do
  
  describe "new" do
    it "should require text" do
      word1 = Word.new(text: "text")
      word2 = Word.new
      
      expect(word1).to be_valid
      expect(word2).not_to be_valid
    end
  end
  describe "randomWord" do
    
    before :each do
      @min = 4
      @max = 6
      
      @word = Word.randomWord @min, @max
    end
    
    it "should return a Word" do
      expect(@word).to be_a(Word)
    end
    
    it "should return a word longer then min" do
      expect(@word.text.length).to be >= @min
    end
    
    it "should return a word shorter then max" do
      expect(@word.text.length).to be <= @max
    end
  end
end