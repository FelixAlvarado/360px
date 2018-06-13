Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    get '/feed', to: 'feeds#home', controller: 'feeds'
    get '/fresh', to: 'feeds#fresh', controller: 'feeds'
    resources :follows, only: [:index, :create, :destroy]
    resources :users, only: [:create,:update, :show, :index] do
      resources :pictures, only: [ :index, :create]
    end
      resources :pictures, only: [:show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root 'static_pages#root'
end
