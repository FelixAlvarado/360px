Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :follows, only: [:index, :create, :destroy]
    resources :users, only: [:create,:update, :show] do
      resources :pictures, only: [ :index, :create]
    end
      resources :pictures, only: [:show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root 'static_pages#root'
end
