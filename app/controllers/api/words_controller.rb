class Api::WordsController < ApplicationController
  def random_word
    min = params[:min].to_i
    max = params[:max].to_i
    
    word = Word.randomWord(min, max)
    if word.nil?
      render status: :unprocessable_entity, json: {
        error: "Unprocessable request"
      }
    else
      render json: {
        word: word.text
      }
    end
  end
end