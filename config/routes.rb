Rails.application.routes.draw do
  resources :meals
  root 'home#index'

  get 'home/about'
end
