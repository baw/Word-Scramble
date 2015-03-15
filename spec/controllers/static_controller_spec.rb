require "rails_helper"

describe StaticController do
  describe "root route" do
    before :each do
      get :root
    end
    
    it "should be successful" do
      expect(response).to be_successful
    end
    
    it "should render root template" do
      expect(response).to render_template :root
    end
  end
end