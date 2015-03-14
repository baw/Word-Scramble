class StaticController < ApplicationController
  def root
    @w = Word.randomWord 4, 6
    
    render :root
  end
end
