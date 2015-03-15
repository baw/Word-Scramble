Rails.application.routes.draw do
  root "static#root"
  
  namespace :api, defaults: { format: :json } do
    get "random_word/:min/:max", to: "words#random_word"
  end
end
