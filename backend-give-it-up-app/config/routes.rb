Rails.application.routes.draw do
  resources :categories
  resources :vices
  resources :subscriptions
  resources :users

  #Auth Routes
  post "/login", to: "auth#create"
  post "/signup", to: "users#create"
  get "/profile", to: "users#profile"

  #stripe routes
  # post "/create-customer", to: "stripe#create_customer"
  # post "create-plan", to: "stripe#create_plan"
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
