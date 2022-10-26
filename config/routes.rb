Rails.application.routes.draw do
  
  post "signup", to: "users#create"
  post "login", to: "users#create"
  resources :users
  resources :categories
  resources :vices
  resources :subscriptions
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
