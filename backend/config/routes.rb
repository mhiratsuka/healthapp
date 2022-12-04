Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope :api do
    resources :users do
      resources :pets, only: [:index, :create]
    end
    resources :pets, only: [:show, :update, :destroy] do
      resources :journals, only: [:index, :create]
    end
    resources :journals, only: [:show, :update, :destroy]
  end
end
