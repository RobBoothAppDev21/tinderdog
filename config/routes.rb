Rails.application.routes.draw do
  root "dogs#home"
  get 'home', to: 'dogs#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
