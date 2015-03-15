require "JSON"
require "rails_helper"

describe Api::WordsController do
  describe "random_word route" do
    context "successful call: '/api/randomWord/4/6'" do
      before :each do
        get :random_word, min: 4, max: 6, format: :json
      end
      
      it "should be successful" do
        expect(response).to be_success
      end
      
      it "should return a word" do
        json = JSON.parse(response.body)
        
        expect(json["word"]).to be_a(String)
      end
    end
    
    context "unsuccessful call: '/api/randomWord/6/4'" do
      before :each do
        get :random_word, min: 6, max: 4, format: :json
      end
      
      it "should be unsuccessful" do
        expect(response).not_to be_success
      end
    end
  end
end