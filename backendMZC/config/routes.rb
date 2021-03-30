 Rails.application.routes.draw do
   
  resources :users
  resources :api_v1_users
     namespace :api do
      namespace :v1 do
        resources :tracks do
           collection do
            get :top_100
            get :random
            get :search
            get :index
          end
        end
      end
    end
  end


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
