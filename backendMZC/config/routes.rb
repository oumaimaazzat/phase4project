Rails.application.routes.draw do
  # resources :users
  # resources :api_v1_users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

 
    namespace :api do
      namespace :v1 do
        resources :tracks do
          collection do
            get :top_100
            get :random
            get :search
          end
        end
      end
    end
  end
end
