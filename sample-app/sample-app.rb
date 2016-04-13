Rails.application.routes.draw do

post "/purple_hippo", to: 'pages#about'

get "contact_us", to: 'pages#contact_us'