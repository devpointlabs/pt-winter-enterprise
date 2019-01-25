Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    resources :rooms
      resources :reservations   
  end
end
