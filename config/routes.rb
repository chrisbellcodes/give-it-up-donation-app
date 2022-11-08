Rails.application.routes.draw do
  namespace :api do
    post "signup", to: "users#create"
    post "login", to: "users#create"
    post "profile", to: "users#profile"

    post '/cancel-subscription', to: "subscriptions#cancel"
    resources :users
    resources :categories
    resources :vices
    resources :subscriptions
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
