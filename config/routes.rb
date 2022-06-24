Rails.application.routes.draw do
  root "pages#index"

  namespace :api do
    namespace :v1 do 
      resources :airlines, param: :slug # specify the param as slug instead of the predefined id 
      resources :reviews, only: [:create, :destroy]
    end
  end

  get "*path", to: "pages#index", via: :all # sort of catch-it-all for requests that are not defined in the routes
end
